//DataPlotter Class
function DataPlotter() {
	//TODO - Constructor
	this.colorPalette = [][];
	makeColorPalette( 0.02, 0.04, 0.06, 0, 0, 0, 128, 127, 25);
}

// superclass method
DataPlotter.prototype = {
  makeColorPalette: function ( 
		frequency1, 
		frequency2,
		frequency3,
		phase1,
		phase2,
		phase3,
		center,
		width,
		len ) {
    if (center == undefined)   center = 128;
    if (width == undefined)    width = 127;
    if (len == undefined)      len = 50;

    for ( var i = 0; i < len; ++i ) {
       var red = Math.sin(frequency1*i + phase1) * width + center;
       var grn = Math.sin(frequency2*i + phase2) * width + center;
       var blu = Math.sin(frequency3*i + phase3) * width + center;
       this.colorPalette[i] = [red, grn, blu];
    }
  }

}