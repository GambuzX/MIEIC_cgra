class MyUnitCubeQuad extends CGFobject {

	constructor(scene) {
		super(scene);
		this.initBuffers();
		this.initTexture();

		this.myQuad = new MyQuad(scene);
	}

	initTexture() {
		this.mine = new CGFappearance(this.scene);
        this.mine.setAmbient(0.1, 0.1, 0.1, 1);
        this.mine.setDiffuse(0.9, 0.9, 0.9, 1);
        this.mine.setSpecular(0.1, 0.1, 0.1, 1);
        this.mine.setShininess(10.0);
        this.mine.loadTexture('images/mineSide.png');
        this.mine.setTextureWrap('REPEAT', 'REPEAT');
	}
	setMineSide() {
		this.mine.setTexture('images/mineSide.png');
	}
	setMineTop() {
		this.mine.setTexture('images/mineTop.png');
	}
	setMineBottom() {
		this.mine.setTexture('images/mineBottom.png');
	}

	display() {	
		// Front
		this.scene.pushMatrix();
		this.scene.translate(0,0,0.5);
		this.myQuad.display();
		this.scene.popMatrix();

		// Back
		this.scene.pushMatrix();
		let angle = Math.PI;
		this.scene.translate(0,0,-0.5);
		this.scene.rotate(angle, 0, 1, 0);
		this.myQuad.display();
		this.scene.popMatrix();

		//Right
		this.scene.pushMatrix();
		angle = Math.PI / 2;
		this.scene.translate(0.5, 0, 0);
		this.scene.rotate(angle, 0, 1, 0);
		this.myQuad.display();
		this.scene.popMatrix();

		//Left
		this.scene.pushMatrix();
		angle = 3 * Math.PI / 2;
		this.scene.translate(-0.5, 0, 0);
		this.scene.rotate(angle, 0, 1, 0);
		this.myQuad.display();
		this.scene.popMatrix();

		//Top
		this.scene.pushMatrix();
		angle = -Math.PI / 2;
		this.scene.translate(0, 0.5, 0);
		this.scene.rotate(angle, 1, 0, 0);
		this.myQuad.display();
		this.scene.popMatrix();

		//Bottom
		this.scene.pushMatrix();
		angle = Math.PI / 2;
		this.scene.translate(0, -0.5, 0);
		this.scene.rotate(angle, 1, 0, 0);
		this.myQuad.display();
		this.scene.popMatrix();
	}

}