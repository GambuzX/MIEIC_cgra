class MyBranch extends CGFobject{

	constructor(scene) {
		super(scene);
		this.cylinder = new MyCylinder(scene, 4);
	
		this.branchMat = new CGFappearance(this.scene);
        this.branchMat.setDiffuse(0.41, 0.24, 0, 1);
        }

	display() {
		this.branchMat.apply();
		this.cylinder.display();
        this.scene.setDefaultAppearance();
	}
}