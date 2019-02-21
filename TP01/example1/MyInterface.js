/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        //Square and Triangle display checkboxes
        this.gui.add(this.scene, 'displayDiamond').name("Diamond");
        this.gui.add(this.scene, 'displayTriangle').name("Triangle");
        this.gui.add(this.scene, 'displaySmallTriangle').name("Small Triangle");
        this.gui.add(this.scene, 'displayBigTriangle').name("Big Triangle");
        this.gui.add(this.scene, 'displayParalelogram').name("Paralelogram");
        this.gui.add(this.scene, 'displayCircle').name("Circle");
        this.gui.add(this.scene.circle, 'n_vertices').name("Circle Vertices");

        return true;
    }
}