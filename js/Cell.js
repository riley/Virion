var cellMap = THREE.ImageUtils.loadTexture("img/cell.png");
var cellOptions = { map: cellMap, useScreenCoordinates: false, alignment: THREE.SpriteAlignment.topLeft };

var Cell = function() {
	
	var map = THREE.ImageUtils.loadTexture("img/cell.png");
	var options = { map: map, useScreenCoordinates: false, alignment: THREE.SpriteAlignment.topLeft };
	
	THREE.Sprite.call( this, options );
	
	this.velocity = new THREE.Vector3();
	this.acceleration = new THREE.Vector3();
	this.position = new THREE.Vector3();
	this.drag = 1;
	this.scale.x = this.scale.y = 1;
	
	this.frame = 0;
};

Cell.prototype = new THREE.Sprite(cellOptions);
Cell.prototype.constructor = Cell;
Cell.prototype.updatePhysics = function() {
	
};

var Lymphocyte = function() {
	
};
Lymphocyte.prototype = new Cell();
Lymphocyte.prototype.constructor = Lymphocyte;