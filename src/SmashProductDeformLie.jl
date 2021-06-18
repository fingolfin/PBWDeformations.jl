struct SmashProductSymmDeformLie
    sp :: SmashProductLie
end

function Base.show(io::IO, spd::SmashProductSymmDeformLie)
    println(io, "Symmetric deformation of:")
    show(spd.sp)
end


function smashProductSymmDeformLie(dynkin::Char, n::Int64, lambda::Vector{Int64}) :: QuadraticAlgebra{SmashProductSymmDeformLie}
    @assert n == length(lambda)
    sanitizeLieInput(dynkin, n)

    sp = smashProductLie(dynkin, n, lambda)
    basis = sp.basis
    relTable = sp.relTable
    extraData = SmashProductSymmDeformLie(sp.extraData)

    for i in 1:sp.extraData.nV, j in 1:i-1
        relTable[(mod(i), mod(j))] = [(1, [mod(j), mod(i)])]
    end

    QuadraticAlgebra{SmashProductSymmDeformLie}(basis, relTable, extraData)
end
