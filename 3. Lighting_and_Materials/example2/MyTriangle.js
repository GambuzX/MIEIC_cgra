/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 1, 0,
			-1, -1, 0,
			1, -1, 0,
			-1, 1, 0,
			-1, -1, 0,
			1, -1, 0
		];

		this.indices = [
			0, 1, 2,
			0, 2, 1
		];

		this.normals = [];
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

