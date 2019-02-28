/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.diamond = new MyDiamond(this);
        this.triangle = new MyTriangle(this);
        this.smallTriangle = new MyTriangleSmall(this);
        this.bigTriangle = new MyTriangleBig(this);
        this.paralelogram = new MyParalelogram(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.scaleFactor = 1;

/*
        this.displayDiamond = true;
        this.displayTriangle = true;
        this.displaySmallTriangle = true;
        */
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        this.multMatrix(sca);

        this.pushMatrix();
        var diamond_trans = [1.0, 0.0, 0.0, 0.0,
                            0.0, 1.0, 0.0, 0.0,
                            0.0, 0.0, 1.0, 0.0,
                            -1.0, 2.0 * Math.sqrt(2), 0.0, 1.0];
        this.multMatrix(diamond_trans);
        this.diamond.display();
        this.popMatrix();

        this.pushMatrix();
        var tri_rot_angle = -45 * Math.PI / 180;
        this.translate(0, Math.sqrt(2), 0);
        this.rotate(tri_rot_angle, 0, 0, 1);
        this.triangle.display();        
        this.popMatrix();

        this.pushMatrix();
        var small_tri_rot_angle = 90 * Math.PI / 180;
        this.translate(0, 2*Math.sqrt(2)+1, 0);
        this.rotate(small_tri_rot_angle, 0, 0, 1);
        this.smallTriangle.display();
        this.popMatrix();

        this.pushMatrix();
        var paralelogram_rot_angle = 45 * Math.PI / 180;
        this.translate(0, - Math.sqrt(2), 0);
        this.scale(-1, 1, 1);
        this.rotate(paralelogram_rot_angle, 0, 0, 1);
        this.paralelogram.display();
        this.popMatrix();

        this.pushMatrix();
        var big_triangle_rot = -90 * Math.PI / 180;
        this.translate(0, -Math.sqrt(2), 0);
        this.rotate(big_triangle_rot, 0, 0, 1);
        this.bigTriangle.display();
        this.popMatrix();  

        this.pushMatrix();
        big_triangle_rot = (180+45) * Math.PI / 180;
        this.translate(2 - Math.sqrt(2), -2*Math.sqrt(2), 0);
        this.rotate(big_triangle_rot, 0, 0, 1);
        this.bigTriangle.display();
        this.popMatrix();

        this.pushMatrix();
        small_tri_rot_angle = -90 * Math.PI / 180;
        this.translate( 2, -3*Math.sqrt(2), 0);
        this.rotate(small_tri_rot_angle, 0, 0, 1);
        this.smallTriangle.display();
        this.popMatrix();

    }
}