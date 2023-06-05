include("setup.jl")

include("Aqua.jl")

include("ArcDiagram-test.jl")
include("DeformationBases-test.jl")
include("Pseudograph-test.jl")
include("SmashProductLie-test.jl")
include("SmashProductLieDeform-test.jl")
include("SmashProductPBWDeformLie-test.jl")
include("Util-test.jl")

DocMeta.setdocmeta!(
    PBWDeformations,
    :DocTestSetup,
    :(using PBWDeformations; using PBWDeformations.Oscar);
    recursive=true,
)
doctest(PBWDeformations)
