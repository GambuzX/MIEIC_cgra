/**
 * MyCircle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCircle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.n_vertices = 100;
		this.initBuffers();
	}
	initBuffers() {
		let radius = 2;

		this.vertices = [
			0,0,0,
		];

		for (let i = 0; i < this.n_vertices; i++) {
			let angle = 2*Math.PI/this.n_vertices * i;

			let x = radius * Math.cos(angle);
			let y = radius * Math.sin(angle);

			this.vertices.push(x);
			this.vertices.push(y);
			this.vertices.push(0);
		}

		//Counter-clockwise reference of vertices
		this.indices = [
		];

		for (let i = 0; i < this.n_vertices; i++) {
			this.indices.push(0);
			this.indices.push((i % this.n_vertices) + 1);
			this.indices.push(((i+1) % this.n_vertices) + 1);
		}


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

