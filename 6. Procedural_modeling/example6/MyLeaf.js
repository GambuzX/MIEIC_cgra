class MyLeaf extends CGFobject {

	constructor(scene) {
		super(scene);
		this.triangle = new MyTriangle(scene);
	
		this.leafMat = new CGFappearance(this.scene);
        this.leafMat.setDiffuse(0, 1, 0, 1);
	}

	display() {
		this.scene.pushMatrix();
		this.leafMat.apply();
		this.scene.scale(1, 1, 1);
		this.triangle.display();
		this.scene.popMatrix();
        this.scene.setDefaultAppearance();
	}

}