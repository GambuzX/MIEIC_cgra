/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.smallTriangle = new MyTriangleSmall(scene);
        this.bigTriangle = new MyTriangleBig(scene);
        this.paralelogram = new MyParalelogram(scene);
        this.initMaterials();
	}

    initMaterials() {
        this.tangramMaterial = new CGFappearance(this.scene);
        this.tangramMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangramMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setShininess(10.0);
        this.tangramMaterial.loadTexture('images/tangram.png');
        this.tangramMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

	display() {
        this.tangramMaterial.apply();

		this.scene.pushMatrix();
        var diamond_trans = [1.0, 0.0, 0.0, 0.0,
                            0.0, 1.0, 0.0, 0.0,
                            0.0, 0.0, 1.0, 0.0,
                            -1.0, 2.0 * Math.sqrt(2), 0.0, 1.0];
        this.scene.multMatrix(diamond_trans);
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        var tri_rot_angle = -45 * Math.PI / 180;
        this.scene.translate(0, Math.sqrt(2), 0);
        this.scene.rotate(tri_rot_angle, 0, 0, 1);
        this.triangle.display();        
        this.scene.popMatrix();

        this.scene.pushMatrix();
        var small_tri_rot_angle = 90 * Math.PI / 180;
        this.scene.translate(0, 2*Math.sqrt(2)+1, 0);
        this.scene.rotate(small_tri_rot_angle, 0, 0, 1);
        this.smallTriangle.updateTexCoords([0, 0, 0.25, 0.25, 0, 0.5]);
        this.smallTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        var paralelogram_rot_angle = 45 * Math.PI / 180;
        this.scene.translate(0, - Math.sqrt(2), 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(paralelogram_rot_angle, 0, 0, 1);
        this.paralelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        var big_triangle_rot = -90 * Math.PI / 180;
        this.scene.translate(0, -Math.sqrt(2), 0);
        this.scene.rotate(big_triangle_rot, 0, 0, 1);
        this.bigTriangle.updateTexCoords([0,0,1,0,0.5,0.5]);
        this.bigTriangle.display();
        this.scene.popMatrix();  

        this.scene.pushMatrix();
        big_triangle_rot = (180+45) * Math.PI / 180;
        this.scene.translate(2 - Math.sqrt(2), -2*Math.sqrt(2), 0);
        this.scene.rotate(big_triangle_rot, 0, 0, 1);
        this.bigTriangle.updateTexCoords([1,0,1,1,0.5,0.5]);
        this.bigTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        small_tri_rot_angle = -90 * Math.PI / 180;
        this.scene.translate( 2, -3*Math.sqrt(2), 0);
        this.scene.rotate(small_tri_rot_angle, 0, 0, 1);
        this.smallTriangle.updateTexCoords([0.25, 0.75, 0.5, 0.5, 0.75, 0.75]);
        this.smallTriangle.display();
        this.scene.popMatrix();
	}

    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.paralelogram.enableNormalViz();
        this.bigTriangle.enableNormalViz();
        this.smallTriangle.enableNormalViz();
    }
}
