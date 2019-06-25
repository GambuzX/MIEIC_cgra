class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

		for (let i = 0; i < 8; i++) {

			let x = 0.5, y = 0.5, z = 0.5;
			if (i == 1 || i == 2 || i == 5 || i == 6) x *= -1;
			if (i == 2 || i == 3 || i == 6 || i == 7) y *= -1;
			if (i == 4 || i == 5 || i == 6 || i == 7) z *= -1;
			this.vertices.push(x, y, z);
			this.vertices.push(x, y, z);
			this.vertices.push(x, y, z);

			z = ( i > 3 ? -1 : 1 );
			this.normals.push(0, 0, z);

			x = ( (i == 1 || i == 2 || i == 5 || i == 6) ? -1 : 1 );
			this.normals.push(x, 0, 0);

			y = ( (i == 2 || i == 3 || i == 6 || i == 7) ? -1 : 1 );
			this.normals.push(0, y, 0);
		}

		
		this.indices = [
				// top
				0, 3, 6,
				0, 6, 3,
				0, 6, 9,
				0, 9, 6,

				//bottom
				12, 15, 18,
				12, 18, 15,
				12, 18, 21,
				12, 21, 18,

				//front
				0, 9, 12,
				0, 12, 9,
				9, 12, 21,
				9, 21, 12,

				//back
				3, 6, 15,
				3, 15, 6,
				6, 18, 15,
				6, 15, 18,

				//right
				0, 3, 15,
				0, 15, 3,
				0, 12, 15,
				0, 15, 12,

				//left
				9, 6, 18,
				9, 18, 6,
				9, 21, 18,
				9, 18, 21
		];


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

	}
}