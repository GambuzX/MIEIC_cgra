/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
        scene.diamond = new MyDiamond(scene);
        scene.triangle = new MyTriangle(scene);
        scene.smallTriangle = new MyTriangleSmall(scene);
        scene.bigTriangle = new MyTriangleBig(scene);
        scene.paralelogram = new MyParalelogram(scene);
	}
	display(scene) {
		scene.pushMatrix();
        var diamond_trans = [1.0, 0.0, 0.0, 0.0,
                            0.0, 1.0, 0.0, 0.0,
                            0.0, 0.0, 1.0, 0.0,
                            -1.0, 2.0 * Math.sqrt(2), 0.0, 1.0];
        scene.multMatrix(diamond_trans);
        scene.diamond.display();
        scene.popMatrix();

        scene.pushMatrix();
        var tri_rot_angle = -45 * Math.PI / 180;
        scene.translate(0, Math.sqrt(2), 0);
        scene.rotate(tri_rot_angle, 0, 0, 1);
        scene.triangle.display();        
        scene.popMatrix();

        scene.pushMatrix();
        var small_tri_rot_angle = 90 * Math.PI / 180;
        scene.translate(0, 2*Math.sqrt(2)+1, 0);
        scene.rotate(small_tri_rot_angle, 0, 0, 1);
        scene.smallTriangle.display();
        scene.popMatrix();

        scene.pushMatrix();
        var paralelogram_rot_angle = 45 * Math.PI / 180;
        scene.translate(0, - Math.sqrt(2), 0);
        scene.scale(-1, 1, 1);
        scene.rotate(paralelogram_rot_angle, 0, 0, 1);
        scene.paralelogram.display();
        scene.popMatrix();

        scene.pushMatrix();
        var big_triangle_rot = -90 * Math.PI / 180;
        scene.translate(0, -Math.sqrt(2), 0);
        scene.rotate(big_triangle_rot, 0, 0, 1);
        scene.bigTriangle.display();
        scene.popMatrix();  

        scene.pushMatrix();
        big_triangle_rot = (180+45) * Math.PI / 180;
        scene.translate(2 - Math.sqrt(2), -2*Math.sqrt(2), 0);
        scene.rotate(big_triangle_rot, 0, 0, 1);
        scene.bigTriangle.display();
        scene.popMatrix();

        scene.pushMatrix();
        small_tri_rot_angle = -90 * Math.PI / 180;
        scene.translate( 2, -3*Math.sqrt(2), 0);
        scene.rotate(small_tri_rot_angle, 0, 0, 1);
        scene.smallTriangle.display();
        scene.popMatrix();
	}
}
