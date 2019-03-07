class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

		/*this.vertices = [
			0.5, 0.5, 0.5, //top
			0.5, 0.5, 0.5, //front
			0.5, 0.5, 0.5, //right

			-0.5, 0.5, 0.5, //top
			-0.5, 0.5, 0.5, //right
			-0.5, 0.5, 0.5, //back

			-0.5, -0.5, 0.5, //top
			-0.5, -0.5, 0.5, //back
			-0.5, -0.5, 0.5, //left

			0.5, -0.5, 0.5, //top
			0.5, -0.5, 0.5, //front
			0.5, -0.5, 0.5, //left

			0.5, 0.5, -0.5, //bottom
			0.5, 0.5, -0.5, //front
			0.5, 0.5, -0.5, //right

			-0.5, 0.5, -0.5, //bottom
			-0.5, 0.5, -0.5, //right
			-0.5, 0.5, -0.5, //back

			-0.5, -0.5, -0.5, //bottom
			-0.5, -0.5, -0.5, //back
			-0.5, -0.5, -0.5, //left

			0.5, -0.5, -0.5, //bottom
			0.5, -0.5, -0.5, //front
			0.5, -0.5, -0.5 //left
		];*/

		for (let i = 0; i < 8; i++) {

			let x = 0.5, y = 0.5, z = 0.5;
			if (i == 1 || i == 2 || i == 5 || i == 6) x *= -1;
			if (i == 2 || i == 3 || i == 6 || i == 7) y *= -1;
			if (i == 4 || i == 5 || i == 6 || i == 7) y *= -1;
			this.vertices.push(x, y, z);
			this.vertices.push(x, y, z);
			this.vertices.push(x, y, z);

			// HEEEEEEEEEEEEEEEEEEEEEEEEELP
			x = 0, y = 0, z = 0;
			if (i == 1 || i == 2 || i == 5 || i == 6) x *= -1;
			if (i == 2 || i == 3 || i == 6 || i == 7) y *= -1;
			if (i == 4 || i == 5 || i == 6 || i == 7) y *= -1;
			this.normals.push(x, y, z);
			this.normals.push(x, y, z);
			this.normals.push(x, y, z);
		}

		this.indices = [
				// top
				0, 3, 6,
				0, 6, 9,

				//bottom
				12, 15, 18,
				12, 18, 21,

				//front
				0, 9, 16,
				9, 12, 21,

				//back
				3, 6, 15,
				6, 18, 15,

				//right
				0, 3, 15,
				0, 12, 15,

				//left
				9, 6, 18,
				9, 21, 18,
		];


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

	}
}