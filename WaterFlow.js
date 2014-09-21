//Water Solver Class
function WaterFlow( elev, water, timeInterval ) {
	this.className = "WaterFlow";
	this.elev = elev;
	this.water = water;
	this.dt = timeInterval;
}

// superclass method
WaterFlow.prototype = {

	//TODO - everything
	updateWater: function () {
		//update water information by dt using local vars
	}
}