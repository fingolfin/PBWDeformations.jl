module PBWDeformations

using Oscar

using Oscar.LieAlgebras:
    AbstractLieAlgebra,
    AbstractLieAlgebraElem,
    LieAlgebra,
    LieAlgebraElem,
    LieAlgebraModule,
    LieAlgebraModuleElem,
    LinearLieAlgebra,
    LinearLieAlgebraElem,
    abstract_module,
    base_lie_algebra,
    combinations,
    exterior_power,
    general_linear_lie_algebra,
    highest_weight_module,
    is_exterior_power,
    is_standard_module,
    is_symmetric_power,
    is_tensor_power,
    lie_algebra,
    matrix_repr_basis,
    multicombinations,
    permutations,
    permutations_with_sign,
    special_linear_lie_algebra,
    special_orthogonal_lie_algebra,
    standard_module,
    symmetric_power,
    tensor_power

import AbstractAlgebra: ProductIterator, coefficient_ring, elem_type, gen, gens, ngens, parent_type

import Oscar: comm, edges, nedges, neighbors, nvertices, simplify, vertices

import Oscar.LieAlgebras: lie_algebra

import Base: deepcopy_internal, hash, isequal, isone, iszero, length, one, parent, show, sum, zero


export AbstractLieAlgebra, AbstractLieAlgebraElem
export ArcDiagDeformBasis
export ArcDiagram
export ArcDiagramUndirected
export ArcDiagramVertex
export DeformationMap
export DeformBasis
export LieAlgebra, LieAlgebraElem
export LieAlgebraModule, LieAlgebraModuleElem
export LinearLieAlgebra, LinearLieAlgebraElem
export PseudographDeformBasis
export PseudographLabelled
export SmashProductLie, SmashProductLieElem
export SmashProductLieDeform, SmashProductLieDeformElem
export StdDeformBasis

export abstract_module
export all_arc_diagrams
export all_pbwdeformations
export all_pseudographs
export base_lie_algebra
export deform
export edge_labels
export edges
export exterior_power
export general_linear_lie_algebra
export highest_weight_module
export is_crossing_free
export is_pbwdeformation
export lie_algebra
export lie_module
export lookup_data
export lower_vertex, is_lower_vertex
export lower_vertices
export matrix_repr_basis
export nedges
export neighbor
export neighbors
export nvertices
export pbwdeform_eqs
export smash_product
export special_linear_lie_algebra
export special_orthogonal_lie_algebra
export standard_module
export symmetric_deformation
export symmetric_power
export tensor_power
export to_arcdiag
export underlying_algebra
export upper_vertex, is_upper_vertex
export upper_vertices
export vertex_index
export vertices

function __init__()
    add_verbose_scope(:PBWDeformations)
end

include("DeformationBases/DeformBasis.jl")

include("SmashProductLie.jl")
include("SmashProductLieDeform.jl")
include("SmashProductPBWDeformLie.jl")
include("ArcDiagram.jl")
include("Pseudograph.jl")

include("DeformationBases/ArcDiagDeformBasis.jl")
include("DeformationBases/PseudographDeformBasis.jl")
include("DeformationBases/StdDeformBasis.jl")

end
