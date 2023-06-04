import aspose.threed as a3d

scene = a3d.Scene.from_file("Asian_Boy.glb")
scene.save("Output.gltf")