class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {

		this.vertices = [
			0.5, 0.5, 0.5,
			-0.5, 0.5, 0.5,
			-0.5, -0.5, 0.5,
			0.5, -0.5, 0.5,
			0.5, 0.5, -0.5,
			-0.5, 0.5, -0.5,
			-0.5, -0.5, -0.5,
			0.5, -0.5, -0.5
		];

		this.indices = [
				// top
				0, 1, 2,
				0, 2, 1,
				0, 2, 3,
				0, 3, 2,

				//bottom
				4, 5, 6,
				4, 6, 5,
				4, 6, 7,
				4, 7, 6,

				//front
				0, 3, 4,
				0, 4, 3,
				3, 4, 7,
				3, 7, 4,

				//back
				1, 2, 5,
				1, 5, 2,
				2, 6, 5,
				2, 5, 6,

				//right
				0, 1, 5,
				0, 5, 1,
				0, 4, 5,
				0, 5, 4,

				//left
				3, 2, 6,
				3, 6, 2,
				3, 7, 6,
				3, 6, 7
		];


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

	}
}