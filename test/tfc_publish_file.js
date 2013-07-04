(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.tfc_publish_file = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.root_mc();
	this.instance.setTransform(158,130,1,1,0,0,0,158,130);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,120);


// symbols:
(lib.futta0531s = function() {
	this.initialize(img.futta0531s);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,120);


(lib.futta0735s = function() {
	this.initialize(img.futta0735s);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,120);


(lib.futta1379s = function() {
	this.initialize(img.futta1379s);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,120);


(lib.futta1534s = function() {
	this.initialize(img.futta1534s);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,120);


(lib.futta2473s = function() {
	this.initialize(img.futta2473s);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,120);


(lib.futta2675s = function() {
	this.initialize(img.futta2675s);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,120);


(lib.white_out_mc = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMgpXIAASvI4/AAIAAyvIY/AA").cp();
	this.shape.setTransform(80,60);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,120);


(lib.root_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 2
	this.instance = new lib.white_out_mc();
	this.instance.setTransform(80,60,1,1,0,0,0,80,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14,cjs.Ease.get(1)).wait(72).to({alpha:1},14,cjs.Ease.get(1)).to({alpha:0},14,cjs.Ease.get(1)).wait(72).to({alpha:1},14,cjs.Ease.get(1)).to({alpha:0},14,cjs.Ease.get(1)).wait(72).to({alpha:1},14,cjs.Ease.get(1)).to({alpha:0},14,cjs.Ease.get(1)).wait(72).to({alpha:1},14,cjs.Ease.get(1)).to({alpha:0},14,cjs.Ease.get(1)).wait(72).to({alpha:1},14,cjs.Ease.get(1)).to({alpha:0},14,cjs.Ease.get(1)).wait(71).to({alpha:1},14,cjs.Ease.get(1)).wait(1));

	// レイヤー 1
	this.instance_1 = new lib.futta1534s();

	this.instance_2 = new lib.futta2675s();

	this.instance_3 = new lib.futta1379s();

	this.instance_4 = new lib.futta2473s();

	this.instance_5 = new lib.futta0531s();

	this.instance_6 = new lib.futta0735s();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},100).to({state:[{t:this.instance_3}]},100).to({state:[{t:this.instance_4}]},100).to({state:[{t:this.instance_5}]},100).to({state:[{t:this.instance_6}]},100).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,120);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;