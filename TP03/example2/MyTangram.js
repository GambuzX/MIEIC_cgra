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

        // Green        
        this.green = new CGFappearance(this.scene);
        this.green.setAmbient(0, 1, 0, 1.0);
        this.green.setDiffuse(0, 0, 0, 1.0);
        this.green.setSpecular(1,1,1,1);
        this.green.setShininess(10.0);

        // Red        
        this.red = new CGFappearance(this.scene);
        this.red.setAmbient(1, 0, 0, 1.0);
        this.red.setDiffuse(0, 0, 0, 1.0);
        this.red.setSpecular(1,1,1,1);
        this.red.setShininess(10.0);

        // Blue
        let blue_color = this.scene.hexToRgbA("#0099ff");
        this.blue = new CGFappearance(this.scene);
        this.blue.setAmbient(blue_color[0], blue_color[1], blue_color[2], 1.0);
        this.blue.setDiffuse(0, 0, 0, 1.0);
        this.blue.setSpecular(1,1,1,1);
        this.blue.setShininess(10.0);

        // Purple
        let purple_color = this.scene.hexToRgbA("#6600cc");
        this.purple = new CGFappearance(this.scene);
        this.purple.setAmbient(purple_color[0], purple_color[1], purple_color[2], 1.0);
        this.purple.setDiffuse(0, 0, 0, 1.0);
        this.purple.setSpecular(1,1,1,1);
        this.purple.setShininess(10.0);

        // Pink
        let pink_color = this.scene.hexToRgbA("#cc99ff");
        this.pink = new CGFappearance(this.scene);
        this.pink.setAmbient(pink_color[0], pink_color[1], pink_color[2], 1.0);
        this.pink.setDiffuse(0, 0, 0, 1.0);
        this.pink.setSpecular(1,1,1,1);
        this.pink.setShininess(10.0);

        // Yellow
        let yellow_color = this.scene.hexToRgbA("#e6e600");
        this.yellow = new CGFappearance(this.scene);
        this.yellow.setAmbient(yellow_color[0], yellow_color[1], yellow_color[2], 1.0);
        this.yellow.setDiffuse(0, 0, 0, 1.0);
        this.yellow.setSpecular(1,1,1,1);
        this.yellow.setShininess(10.0);

        // Orange
        let orange_color = this.scene.hexToRgbA("#ff9900");
        this.orange = new CGFappearance(this.scene);
        this.orange.setAmbient(orange_color[0], orange_color[1], orange_color[2], 1.0);
        this.orange.setDiffuse(0, 0, 0, 1.0);
        this.orange.setSpecular(1,1,1,1);
        this.orange.setShininess(10.0);
    }

	display() {
		this.scene.pushMatrix();
        var diamond_trans = [1.0, 0.0, 0.0, 0.0,
                            0.0, 1.0, 0.0, 0.0,
                            0.0, 0.0, 1.0, 0.0,
                            -1.0, 2.0 * Math.sqrt(2), 0.0, 1.0];
        this.scene.multMatrix(diamond_trans);
        this.scene.customMaterial.apply();
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        var tri_rot_angle = -45 * Math.PI / 180;
        this.scene.translate(0, Math.sqrt(2), 0);
        this.scene.rotate(tri_rot_angle, 0, 0, 1);
        this.pink.apply();
        this.triangle.display();        
        this.scene.popMatrix();

        this.scene.pushMatrix();
        var small_tri_rot_angle = 90 * Math.PI / 180;
        this.scene.translate(0, 2*Math.sqrt(2)+1, 0);
        this.scene.rotate(small_tri_rot_angle, 0, 0, 1);
        this.purple.apply();
        this.smallTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        var paralelogram_rot_angle = 45 * Math.PI / 180;
        this.scene.translate(0, - Math.sqrt(2), 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(paralelogram_rot_angle, 0, 0, 1);
        this.yellow.apply();
        this.paralelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        var big_triangle_rot = -90 * Math.PI / 180;
        this.scene.translate(0, -Math.sqrt(2), 0);
        this.scene.rotate(big_triangle_rot, 0, 0, 1);
        this.orange.apply();
        this.bigTriangle.display();
        this.scene.popMatrix();  

        this.scene.pushMatrix();
        big_triangle_rot = (180+45) * Math.PI / 180;
        this.scene.translate(2 - Math.sqrt(2), -2*Math.sqrt(2), 0);
        this.scene.rotate(big_triangle_rot, 0, 0, 1);
        this.blue.apply();
        this.bigTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        small_tri_rot_angle = -90 * Math.PI / 180;
        this.scene.translate( 2, -3*Math.sqrt(2), 0);
        this.scene.rotate(small_tri_rot_angle, 0, 0, 1);
        this.red.apply();
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
