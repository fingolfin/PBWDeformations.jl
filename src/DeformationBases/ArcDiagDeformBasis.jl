"""
Concrete subtype of [`DeformBasis`](@ref).
Each element of the basis is induced by an arc diagram of a suitable size,
which gets symmetrized and specialised to the given smash product.
This process is due to [FM22](@cite).
"""
struct ArcDiagDeformBasis{C <: RingElem} <: DeformBasis{C}
    len::Int
    iter
    extra_data::Dict{DeformationMap{C}, Set{ArcDiagram}}
    normalize

    function ArcDiagDeformBasis{C}(
        sp::SmashProductLie{C},
        degs::AbstractVector{Int};
        no_normalize::Bool=false,
    ) where {C <: RingElem}
        @req get_attribute(lie_algebra(sp), :type, nothing) == :special_orthogonal "Only works for so_n."
        @req (is_exterior_power(lie_module(sp)) || is_symmetric_power(lie_module(sp))) &&
             is_standard_module(base_module(lie_module(sp))) "Only works for exterior powers of the standard module."

        extra_data = Dict{DeformationMap{C}, Set{ArcDiagram}}()
        normalize = no_normalize ? identity : normalize_default

        lens = []
        iters = []
        debug_counter = 0
        for d in degs
            diag_iter = pbw_arc_diagrams__so(lie_module(sp), d)
            len = length(diag_iter)
            iter = (
                begin
                    @vprintln :PBWDeformations 2 "Basis generation deg $(lpad(d, maximum(ndigits, degs))), $(lpad(floor(Int, 100*(debug_counter = (debug_counter % len) + 1) / len), 3))%, $(lpad(debug_counter, ndigits(len)))/$(len)"
                    basis_elem = arcdiag_to_deformationmap__so(diag, sp)
                    if !no_normalize
                        basis_elem = normalize(basis_elem)
                    end
                    if haskey(extra_data, basis_elem)
                        push!(extra_data[basis_elem], diag)
                    else
                        extra_data[basis_elem] = Set([diag])
                    end
                    basis_elem
                end for
                diag in diag_iter if is_crossing_free(diag, part=:upper) && is_crossing_free(diag, part=:lower)
            )
            push!(lens, len)
            push!(iters, iter)
        end
        len = sum(lens)
        iter = Iterators.flatten(iters)
        if !no_normalize
            iter = unique(Iterators.filter(b -> !iszero(b), iter))
            len = length(iter)
        end
        return new{C}(len, iter, extra_data, normalize)
    end
end

function Base.iterate(i::ArcDiagDeformBasis)
    return iterate(i.iter)
end

function Base.iterate(i::ArcDiagDeformBasis, s)
    return iterate(i.iter, s)
end

Base.length(basis::ArcDiagDeformBasis) = basis.len


function pbw_arc_diagrams__so(V::LieAlgebraModule, d::Int)
    e = arc_diagram_num_points__so(V)
    upper_indep_sets = Vector{Int}[is .+ a * e for a in [0, 1] for is in arc_diagram_indep_sets__so(V)]
    lower_indep_sets = Vector{Int}[[[2i - 1, 2i] for i in 1:d]...]
    indep_sets = Vector{Int}[[(-1) .* is for is in upper_indep_sets]; [is for is in lower_indep_sets]]
    return all_arc_diagrams(2e, 2d; indep_sets)
end

function arc_diagram_num_points__so(V::LieAlgebraModule)
    if is_standard_module(V)
        return 1
    elseif is_exterior_power(V) || is_symmetric_power(V) || is_tensor_power(V)
        return arc_diagram_num_points__so(base_module(V)) * get_attribute(V, :power)
    else
        error("Not implemented.")
    end
end

function arc_diagram_indep_sets__so(V::LieAlgebraModule)
    if is_standard_module(V)
        return Vector{Int}[]
    elseif is_exterior_power(V) || is_symmetric_power(V) || is_tensor_power(V)
        inner_mod = base_module(V)
        power = get_attribute(V, :power)
        if is_standard_module(inner_mod)
            if is_exterior_power(V)
                return [1:power]
            else
                return Vector{Int}[]
            end
        else
            is = arc_diagram_indep_sets__so(inner_mod)
            return [map(i -> i + k * arc_diagram_num_points__so(inner_mod), is) for k in 0:power-1, is in is]
        end
    else
        error("Not implemented.")
    end
end

function arc_diagram_label_iterator__so(V::LieAlgebraModule, base_labels::AbstractVector{Int})
    if is_standard_module(V)
        return [[l] for l in base_labels]
    elseif is_exterior_power(V)
        inner_mod = base_module(V)
        power = get_attribute(V, :power)
        return combinations(collect(arc_diagram_label_iterator__so(inner_mod, base_labels)), power) .|>
               Iterators.flatten .|>
               collect
    elseif is_symmetric_power(V)
        inner_mod = base_module(V)
        power = get_attribute(V, :power)
        return multicombinations(collect(arc_diagram_label_iterator__so(inner_mod, base_labels)), power) .|>
               Iterators.flatten .|>
               collect
    elseif is_tensor_power(V)
        inner_mod = base_module(V)
        power = get_attribute(V, :power)
        return ProductIterator(arc_diagram_label_iterator__so(inner_mod, base_labels), power) .|>
               reverse .|>
               Iterators.flatten .|>
               collect
    else
        error("Not implemented.")
    end
end

function arc_diagram_label_permutations__so(V::LieAlgebraModule, label::AbstractVector{Int})
    if is_standard_module(V)
        @req length(label) == 1 "Number of labels mistmatch."
        return [(label, 1)]
    elseif is_exterior_power(V) || is_symmetric_power(V) || is_tensor_power(V)
        inner_mod = base_module(V)
        power = get_attribute(V, :power)
        m = arc_diagram_num_points__so(inner_mod)
        @req length(label) == m * power "Number of labels mistmatch."
        if is_exterior_power(V)
            return [
                begin
                    inner_label = vcat(first.(inner_iter)...)
                    inner_sign = prod(last.(inner_iter))
                    (inner_label, inner_sign * outer_sign)
                end for (outer_perm, outer_sign) in permutations_with_sign(1:power) for inner_iter in ProductIterator([
                    arc_diagram_label_permutations__so(inner_mod, label[(outer_perm[i]-1)*m+1:outer_perm[i]*m]) for
                    i in 1:power
                ])
            ]
        elseif is_symmetric_power(V)
            return [
                begin
                    inner_label = vcat(first.(inner_iter)...)
                    inner_sign = prod(last.(inner_iter))
                    (inner_label, inner_sign)
                end for outer_perm in permutations(1:power) for inner_iter in ProductIterator([
                    arc_diagram_label_permutations__so(inner_mod, label[(outer_perm[i]-1)*m+1:outer_perm[i]*m]) for
                    i in 1:power
                ])
            ]
        elseif is_tensor_power(V)
            return [
                begin
                    inner_label = flatten(first.(inner_iter))
                    inner_sign = prod(last.(inner_iter))
                    (inner_label, inner_sign)
                end for inner_iter in
                ProductIterator([arc_diagram_label_permutations__so(inner_mod, label[(i-1)*m+1:i*m]) for i in 1:power])
            ]
        else
            error("Not implemented.")
        end
    end
end


function arcdiag_to_deformationmap__so(diag::ArcDiagram, sp::SmashProductLie{C}) where {C <: RingElem}
    d = div(diag.num_lower_verts, 2)
    dim_stdmod_V = lie_algebra(sp).n

    e = arc_diagram_num_points__so(lie_module(sp))

    iso_wedge2V_g = Dict{Vector{Int}, Int}()
    for (i, bs) in enumerate(combinations(lie_algebra(sp).n, 2))
        iso_wedge2V_g[bs] = i
    end

    index = Dict{Vector{Int}, Int}()
    for (i, is) in enumerate(arc_diagram_label_iterator__so(lie_module(sp), 1:dim_stdmod_V))
        index[is] = i
    end

    kappa = fill(zero(underlying_algebra(sp)), dim(lie_module(sp)), dim(lie_module(sp)))
    for is in arc_diagram_label_iterator__so(lie_module(sp), 1:dim_stdmod_V),
        js in arc_diagram_label_iterator__so(lie_module(sp), 1:dim_stdmod_V)

        i = index[is]
        j = index[js]
        if i >= j
            continue
        end
        for (is, sgn_left) in arc_diagram_label_permutations__so(lie_module(sp), is),
            (js, sgn_right) in arc_diagram_label_permutations__so(lie_module(sp), js),
            swap in [false, true]

            sgn_upper_labels = sgn_left * sgn_right
            if swap
                is, js = js, is
                sgn_upper_labels *= -1
            end

            zeroprod = false
            upper_labels = vcat(is, js)
            lower_labels = [0 for _ in 1:2d]
            frees = Int[]
            for v in upper_vertices(diag)
                nv = neighbor(diag, v)
                if is_upper_vertex(nv) && upper_labels[vertex_index(v)] != upper_labels[vertex_index(nv)]
                    zeroprod = true
                    break
                elseif is_lower_vertex(nv)
                    lower_labels[vertex_index(nv)] = upper_labels[vertex_index(v)]
                end
            end
            if zeroprod
                continue
            end
            for v in lower_vertices(diag)
                nv = neighbor(diag, v)
                if is_lower_vertex(nv) && vertex_index(v) < vertex_index(nv)
                    push!(frees, vertex_index(v))
                end
            end

            entry = zero(underlying_algebra(sp))

            # iterate over lower point labelings
            nextindex = 1
            while true
                if nextindex > length(frees)
                    # begin inner
                    zeroelem = false
                    sign_lower_labels = 1
                    basiselem = Int[]
                    for k in 1:2:length(lower_labels)
                        if lower_labels[k] == lower_labels[k+1]
                            zeroelem = true
                            break
                        elseif lower_labels[k] > lower_labels[k+1]
                            sign_lower_labels *= -1
                            append!(basiselem, iso_wedge2V_g[[lower_labels[k+1], lower_labels[k]]])
                        else
                            append!(basiselem, iso_wedge2V_g[[lower_labels[k], lower_labels[k+1]]])
                        end
                    end
                    if !zeroelem
                        symm_basiselem = underlying_algebra(sp)(
                            fill(C(1 // factorial(length(basiselem))), factorial(length(basiselem))),
                            [ind for ind in permutations(basiselem)],
                        )
                        entry += sign_lower_labels * _normal_form(symm_basiselem, sp.rels)
                    end
                    # end inner

                    nextindex -= 1
                end

                while nextindex >= 1 && lower_labels[frees[nextindex]] == dim_stdmod_V
                    lower_labels[frees[nextindex]] = 0
                    lower_labels[vertex_index(_neighbor_of_lower_vertex(diag, frees[nextindex]))] = 0
                    nextindex -= 1
                end
                if nextindex == 0
                    break
                end
                lower_labels[frees[nextindex]] += 1
                lower_labels[vertex_index(_neighbor_of_lower_vertex(diag, frees[nextindex]))] += 1
                if ispairgood(lower_labels, frees[nextindex]) &&
                   ispairgood(lower_labels, vertex_index(_neighbor_of_lower_vertex(diag, frees[nextindex])))
                    nextindex += 1
                end
            end

            entry *= sgn_upper_labels

            kappa[i, j] += entry
            kappa[j, i] -= entry
        end
    end
    return kappa
end

function ispairgood(labeled_diag::Vector{Int}, k::Int)
    left_k = k % 2 == 1 ? k : k - 1
    return labeled_diag[left_k] != labeled_diag[left_k+1]
end