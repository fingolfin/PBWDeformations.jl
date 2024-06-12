var documenterSearchIndex = {"docs":
[{"location":"util/","page":"Util functions","title":"Util functions","text":"CurrentModule = PBWDeformations","category":"page"},{"location":"util/#Utility-functions","page":"Util functions","title":"Utility functions","text":"","category":"section"},{"location":"util/","page":"Util functions","title":"Util functions","text":"This section contains some utility functions that are used in other parts of the package.","category":"page"},{"location":"util/","page":"Util functions","title":"Util functions","text":"Modules = [PBWDeformations]\nPages   = [\"Util.jl\"]","category":"page"},{"location":"references/#References","page":"References","title":"References","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"smash_product_deform_lie/","page":"Smash product deformations","title":"Smash product deformations","text":"CurrentModule = PBWDeformations\nDocTestSetup  = quote\n    using PBWDeformations\n    using Oscar\nend","category":"page"},{"location":"smash_product_deform_lie/#Smash-products-deformations","page":"Smash product deformations","title":"Smash products deformations","text":"","category":"section"},{"location":"smash_product_deform_lie/#Constructors","page":"Smash product deformations","title":"Constructors","text":"","category":"section"},{"location":"smash_product_deform_lie/","page":"Smash product deformations","title":"Smash product deformations","text":"DeformationMap\ndeform\nsymmetric_deformation","category":"page"},{"location":"smash_product_deform_lie/#PBWDeformations.DeformationMap","page":"Smash product deformations","title":"PBWDeformations.DeformationMap","text":"DeformationMap{C} = MatElem{FreeAssAlgElem{C}} where {C <: RingElem}\n\nThe type for deformation maps of a Lie algebra smash product. The entry kappa[i,j] should be the image of v_i wedge v_j under the deformation map, i.e. κ(v_iv_j). Deformation maps are always assumed to be quadratic and skew-symmetric.\n\n\n\n\n\n","category":"type"},{"location":"smash_product_deform_lie/#PBWDeformations.deform","page":"Smash product deformations","title":"PBWDeformations.deform","text":"deform(sp::SmashProductLie{C}, kappa::DeformationMap{C}) where {C <: RingElem}\n\nConstructs the deformation of the smash product sp by the deformation map kappa.\n\nReturns a SmashProductLieDeform struct and a two-part basis.\n\n\n\n\n\n","category":"function"},{"location":"smash_product_deform_lie/#PBWDeformations.symmetric_deformation","page":"Smash product deformations","title":"PBWDeformations.symmetric_deformation","text":"symmetric_deformation(sp::SmashProductLie{C}) where {C <: RingElem}\n\nConstructs the symmetric deformation of the smash product sp.\n\n\n\n\n\n","category":"function"},{"location":"smash_product_deform_lie/#SmashProductLieDeform-struct","page":"Smash product deformations","title":"SmashProductLieDeform struct","text":"","category":"section"},{"location":"smash_product_deform_lie/","page":"Smash product deformations","title":"Smash product deformations","text":"SmashProductLieDeform","category":"page"},{"location":"smash_product_deform_lie/#PBWDeformations.SmashProductLieDeform","page":"Smash product deformations","title":"PBWDeformations.SmashProductLieDeform","text":"The struct representing a deformation of a Lie algebra smash product. It consists of the underlying FreeAssAlgebra with relations and some metadata. It gets created by calling deform.\n\n\n\n\n\n","category":"type"},{"location":"smash_product_deform_lie/#Functions","page":"Smash product deformations","title":"Functions","text":"","category":"section"},{"location":"smash_product_deform_lie/","page":"Smash product deformations","title":"Smash product deformations","text":"The SmashProductLieDeform struct can be used as an argument for the following functions:","category":"page"},{"location":"smash_product_deform_lie/","page":"Smash product deformations","title":"Smash product deformations","text":"gen\ngens\nngens","category":"page"},{"location":"smash_product_deform_lie/","page":"Smash product deformations","title":"Smash product deformations","text":"For gen, gens, and ngens, on can supply a symbol to choose the part of the smash product to use: :L for the Lie algebra, and :V for the module.","category":"page"},{"location":"arc_diagrams/","page":"Arc diagrams","title":"Arc diagrams","text":"CurrentModule = PBWDeformations\nDocTestSetup  = quote\n    using PBWDeformations\n    using Oscar\nend","category":"page"},{"location":"arc_diagrams/#Arc-diagrams","page":"Arc diagrams","title":"Arc diagrams","text":"","category":"section"},{"location":"arc_diagrams/","page":"Arc diagrams","title":"Arc diagrams","text":"Modules = [PBWDeformations]\nPages   = [\"ArcDiagram.jl\"]","category":"page"},{"location":"arc_diagrams/#Arc-diagram-induced-bases","page":"Arc diagrams","title":"Arc diagram induced bases","text":"","category":"section"},{"location":"arc_diagrams/","page":"Arc diagrams","title":"Arc diagrams","text":"warning: Warning\nThe basis ArcDiagDeformBasis can currently only be used for exterior and symmetric powers of the standard module of special orthogonal Lie algebras.","category":"page"},{"location":"arc_diagrams/","page":"Arc diagrams","title":"Arc diagrams","text":"ArcDiagDeformBasis","category":"page"},{"location":"arc_diagrams/#PBWDeformations.ArcDiagDeformBasis","page":"Arc diagrams","title":"PBWDeformations.ArcDiagDeformBasis","text":"Concrete subtype of DeformBasis. Each element of the basis is induced by an arc diagram of a suitable size, which gets symmetrized and specialised to the given smash product. This process is due to [FM22].\n\n\n\n\n\n","category":"type"},{"location":"arc_diagrams/#Reverse-direction","page":"Arc diagrams","title":"Reverse direction","text":"","category":"section"},{"location":"arc_diagrams/","page":"Arc diagrams","title":"Arc diagrams","text":"Given a basis element of an above basis, one can lookup all arc diagrams that induce it (up to a scalar).","category":"page"},{"location":"arc_diagrams/","page":"Arc diagrams","title":"Arc diagrams","text":"lookup_data","category":"page"},{"location":"arc_diagrams/#PBWDeformations.lookup_data","page":"Arc diagrams","title":"PBWDeformations.lookup_data","text":"lookup_data(m::DeformationMap{C}, basis::DeformBasis{C}) where {C <: RingElem}\n\nLook up additional data that was used to generate the deformation map m in the basis basis. This can e.g. be an arc diagram or a pseudograph.\n\n\n\n\n\n","category":"function"},{"location":"pseudographs/","page":"Pseudographs","title":"Pseudographs","text":"CurrentModule = PBWDeformations\nDocTestSetup  = quote\n    using PBWDeformations\n    using Oscar\nend","category":"page"},{"location":"pseudographs/#Pseudographs","page":"Pseudographs","title":"Pseudographs","text":"","category":"section"},{"location":"pseudographs/","page":"Pseudographs","title":"Pseudographs","text":"Modules = [PBWDeformations]\nPages   = [\"Pseudograph.jl\"]","category":"page"},{"location":"pseudographs/#Pseudograph-induced-bases","page":"Pseudographs","title":"Pseudograph induced bases","text":"","category":"section"},{"location":"pseudographs/","page":"Pseudographs","title":"Pseudographs","text":"warning: Warning\nThe basis PseudographDeformBasis can currently only be used for exterior and symmetric powers of the standard module of special orthogonal Lie algebras.","category":"page"},{"location":"pseudographs/","page":"Pseudographs","title":"Pseudographs","text":"PseudographDeformBasis","category":"page"},{"location":"pseudographs/#PBWDeformations.PseudographDeformBasis","page":"Pseudographs","title":"PBWDeformations.PseudographDeformBasis","text":"Concrete subtype of DeformBasis. Each element of the basis is induced by a pseudograph with two vertices and certain properties, which gets transformed to an arc diagram and then handled as in ArcDiagDeformBasis. This process is due to [FM22].\n\n\n\n\n\n","category":"type"},{"location":"pseudographs/#Reverse-direction","page":"Pseudographs","title":"Reverse direction","text":"","category":"section"},{"location":"pseudographs/","page":"Pseudographs","title":"Pseudographs","text":"Given a basis element of an above basis, one can lookup all pseudographs that induce it (up to a scalar). See lookup_data for more details.","category":"page"},{"location":"#PBWDeformations","page":"PBWDeformations.jl","title":"PBWDeformations","text":"","category":"section"},{"location":"#Introduction","page":"PBWDeformations.jl","title":"Introduction","text":"","category":"section"},{"location":"","page":"PBWDeformations.jl","title":"PBWDeformations.jl","text":"The package PBWDeformations will provide both a general framework and specialized functions in order to","category":"page"},{"location":"","page":"PBWDeformations.jl","title":"PBWDeformations.jl","text":"classify PBW deformations of certain smash products and\nstudy their representations.","category":"page"},{"location":"","page":"PBWDeformations.jl","title":"PBWDeformations.jl","text":"To solve classification problems efficiently, we use representation theoretic ideas.","category":"page"},{"location":"#Features","page":"PBWDeformations.jl","title":"Features","text":"","category":"section"},{"location":"","page":"PBWDeformations.jl","title":"PBWDeformations.jl","text":"Construct Lie algebras and their modules.\nConstruct smash products of the form TV rtimes U(L) for a Lie algbra L and a module V.\nConstruct deformations of such smash products.\nCompute a normal form for elements of smash products and their deformations.\nCheck, if a given deformation is a PBW-deformation (using [WW14]).\nFor some smash product, compute a basis of all PBW-deformations up to a given degree (using [WW14]). It is possible to give a basis of the relevant part of the deformation space, which is then used in the computation.\nFor some modules of mathfrakso_n, give an explicit basis using arc diagrams or pseudographs (cf. [FM22]).","category":"page"},{"location":"#Installation","page":"PBWDeformations.jl","title":"Installation","text":"","category":"section"},{"location":"","page":"PBWDeformations.jl","title":"PBWDeformations.jl","text":"As this package heavily relies on Oscar, it is recommended to install Oscar first (installation instructions). Then, install this package via the Julia package manager:","category":"page"},{"location":"","page":"PBWDeformations.jl","title":"PBWDeformations.jl","text":"] add PBWDeformations","category":"page"},{"location":"#Outline","page":"PBWDeformations.jl","title":"Outline","text":"","category":"section"},{"location":"","page":"PBWDeformations.jl","title":"PBWDeformations.jl","text":"Pages = [\n    \"smash_product_lie.md\",\n    \"smash_product_deform_lie.md\",\n    \"smash_product_pbwdeform_lie.md\",\n    \"arc_diagrams.md\",\n    \"util.md\",\n]","category":"page"},{"location":"","page":"PBWDeformations.jl","title":"PBWDeformations.jl","text":"References","category":"page"},{"location":"#main-index","page":"PBWDeformations.jl","title":"Index","text":"","category":"section"},{"location":"","page":"PBWDeformations.jl","title":"PBWDeformations.jl","text":"","category":"page"},{"location":"smash_product_pbwdeform_lie/","page":"PBWDeformations","title":"PBWDeformations","text":"CurrentModule = PBWDeformations\nDocTestSetup  = quote\n    using PBWDeformations\n    using Oscar\nend","category":"page"},{"location":"smash_product_pbwdeform_lie/#PBW-Deformations-of-smash-products","page":"PBWDeformations","title":"PBW Deformations of smash products","text":"","category":"section"},{"location":"smash_product_pbwdeform_lie/#General-deformation-functions","page":"PBWDeformations","title":"General deformation functions","text":"","category":"section"},{"location":"smash_product_pbwdeform_lie/","page":"PBWDeformations","title":"PBWDeformations","text":"is_pbwdeformation\npbwdeform_eqs","category":"page"},{"location":"smash_product_pbwdeform_lie/#PBWDeformations.is_pbwdeformation","page":"PBWDeformations","title":"PBWDeformations.is_pbwdeformation","text":"is_pbwdeformation(d::SmashProductLieDeform)\n\nCheck if d is a Poincare-Birkhoff-Witt deformation of a smash product. Uses Theorem 3.1 of [WW14].\n\n\n\n\n\n","category":"function"},{"location":"smash_product_pbwdeform_lie/#PBWDeformations.pbwdeform_eqs","page":"PBWDeformations","title":"PBWDeformations.pbwdeform_eqs","text":"pbwdeform_eqs(d::SmashProductLieDeform; disabled::Vector{Symbol}=Symbol[])\n\nReturns the equations for d being a PBW deformation of a smash product as in Theorem 3.1 of [WW14]. Subsets of the equations can be disabled by passing the corresponding symbols as keyword arguments, e.g. disabled = [:c, :d].\n\n\n\n\n\n","category":"function"},{"location":"smash_product_pbwdeform_lie/#All-PBW-deformations","page":"PBWDeformations","title":"All PBW deformations","text":"","category":"section"},{"location":"smash_product_pbwdeform_lie/","page":"PBWDeformations","title":"PBWDeformations","text":"all_pbwdeformations","category":"page"},{"location":"smash_product_pbwdeform_lie/#PBWDeformations.all_pbwdeformations","page":"PBWDeformations","title":"PBWDeformations.all_pbwdeformations","text":"all_pbwdeformations(sp::SmashProductLie{C}, deform_basis::DeformBasis{C}; special_return=Nothing) where {C <: RingElem}\n\nComputes a basis of all Poincare-Birkhoff-Witt deformations of sp. deform_basis specifies the basis to use for the space of deformation maps. If special_return is SMat, the function returns intermediate results.\n\nUses pbwdeform_eqs and thus Theorem 3.1 of [WW14].\n\n\n\n\n\nall_pbwdeformations(sp::SmashProductLie{C}, degs::AbstractVector{Int}, DeformBasisType::Type{<:DeformBasis{C}}=StdDeformBasis{C}; special_return=Nothing) where {C <: RingElem}\n\nComputes a basis of all Poincare-Birkhoff-Witt deformations of sp of degrees degs. DeformBasisType specifies the type of basis to use for the space of deformation maps. If special_return is SMat, the function returns intermediate results.\n\nUses pbwdeform_eqs and thus Theorem 3.1 of [WW14].\n\n\n\n\n\nall_pbwdeformations(sp::SmashProductLie{C}, deg::Int, DeformBasisType::Type{<:DeformBasis{C}}=StdDeformBasis{C}; special_return=Nothing) where {C <: RingElem}\n\nThe same as the other method, but only for a single degree deg.\n\n\n\n\n\n","category":"function"},{"location":"smash_product_pbwdeform_lie/#Bases-of-deformation-map-spaces","page":"PBWDeformations","title":"Bases of deformation map spaces","text":"","category":"section"},{"location":"smash_product_pbwdeform_lie/","page":"PBWDeformations","title":"PBWDeformations","text":"DeformBasis","category":"page"},{"location":"smash_product_pbwdeform_lie/#PBWDeformations.DeformBasis","page":"PBWDeformations","title":"PBWDeformations.DeformBasis","text":"abstract type DeformBasis{C <: RingElem} end\n\nA basis for a deformation map space of a Lie algebra smash product. The constructor of a subtype should accept a SmashProductLie and an AbstractVector{Int} of degrees. It is required that Base.length and Base.iterate are implemented for subtypes, where iterating yields objects of type DeformationMap{C}.\n\nFor a reference implementation, we refer to StdDeformBasis.\n\n\n\n\n\n","category":"type"},{"location":"smash_product_pbwdeform_lie/#Standard-basis","page":"PBWDeformations","title":"Standard basis","text":"","category":"section"},{"location":"smash_product_pbwdeform_lie/","page":"PBWDeformations","title":"PBWDeformations","text":"StdDeformBasis","category":"page"},{"location":"smash_product_pbwdeform_lie/#PBWDeformations.StdDeformBasis","page":"PBWDeformations","title":"PBWDeformations.StdDeformBasis","text":"Concrete subtype of DeformBasis that implements the standard basis. Each element of the basis is a skew-symmetric matrix with 2 non-zero entries, where one entry is a pure tensor power of degree ∈ degs over the Lie algebra part of the smash product, and the other entry is its additive inverse.\n\n\n\n\n\n","category":"type"},{"location":"smash_product_pbwdeform_lie/#Other-bases","page":"PBWDeformations","title":"Other bases","text":"","category":"section"},{"location":"smash_product_pbwdeform_lie/","page":"PBWDeformations","title":"PBWDeformations","text":"Please refer to Arc diagram induced bases and Pseudograph induced bases for more specialized bases.","category":"page"},{"location":"smash_product_lie/","page":"Smash products","title":"Smash products","text":"CurrentModule = PBWDeformations\nDocTestSetup  = quote\n    using PBWDeformations\n    using Oscar\nend","category":"page"},{"location":"smash_product_lie/#Smash-products","page":"Smash products","title":"Smash products","text":"","category":"section"},{"location":"smash_product_lie/#Constructors","page":"Smash products","title":"Constructors","text":"","category":"section"},{"location":"smash_product_lie/#General-case","page":"Smash products","title":"General case","text":"","category":"section"},{"location":"smash_product_lie/","page":"Smash products","title":"Smash products","text":"smash_product","category":"page"},{"location":"smash_product_lie/#PBWDeformations.smash_product","page":"Smash products","title":"PBWDeformations.smash_product","text":"smash_product(L::LieAlgebra{C}, V::LieAlgebraModule{C}) where {C <: RingElem}\n\nConstruct the smash product TV rtimes U(L).\n\n\n\n\n\nsmash_product(R::Ring, L::LieAlgebra{C}, V::LieAlgebraModule{C}) where {C <: RingElem}\n\nConstruct the smash product TV rtimes U(L) and extend the coefficients to R.\n\n\n\n\n\n","category":"function"},{"location":"smash_product_lie/#Highest-weight-/-GAP-case","page":"Smash products","title":"Highest weight / GAP case","text":"","category":"section"},{"location":"smash_product_lie/","page":"Smash products","title":"Smash products","text":"","category":"page"},{"location":"smash_product_lie/#SmashProductLie-struct","page":"Smash products","title":"SmashProductLie struct","text":"","category":"section"},{"location":"smash_product_lie/","page":"Smash products","title":"Smash products","text":"SmashProductLie","category":"page"},{"location":"smash_product_lie/#PBWDeformations.SmashProductLie","page":"Smash products","title":"PBWDeformations.SmashProductLie","text":"The struct representing a Lie algebra smash product. It consists of the underlying FreeAssAlgebra with relations and some metadata. It gets created by calling smash_product.\n\n\n\n\n\n","category":"type"},{"location":"smash_product_lie/#Functions","page":"Smash products","title":"Functions","text":"","category":"section"},{"location":"smash_product_lie/","page":"Smash products","title":"Smash products","text":"The SmashProductLie struct can be used as an argument for the following functions:","category":"page"},{"location":"smash_product_lie/","page":"Smash products","title":"Smash products","text":"gen\ngens\nngens","category":"page"},{"location":"smash_product_lie/","page":"Smash products","title":"Smash products","text":"For gen, gens, and ngens, on can supply a symbol to choose the part of the smash product to use: :L for the Lie algebra, and :V for the module.","category":"page"}]
}
