//Water Data Class
function WaterData( lat, lon, length, sqrtNumPoints ) {
	//handle error cases.
	//check that lat, long are decimals within allowable data ranges
	//check that length is a decimal and that it creates a valid box within data ranges
	//check that sqrtNumPoints is an integer greater than 1

	this.className = "WaterData";
	this.lat = lat;
	this.lon = lon;
	this.len = length;
	this.depth = {};
	this.velx = {};
	this.vely = {};
	this.sqrtNumPoints = sqrtNumPoints;
	
	//initialize depth to be zero in constructor
	for ( var idx1 = 0; idx1 < sqrtNumPoints; idx1++ ) {
		//create hash-table as necessary
		var tmpLat = this.lat + delta * idx1;
		if( typeof depth[tmpLat] == "undefined" ) {
			this.depth[tmpLat] = {};
			this.velx[tmpLat] = {};
			this.vely[tmpLat] = {};
		}

		for ( var idx2 = 0; idx2 < sqrtNumPoints; idx2++ ) {
			var tmpLon = this.lon + delta * idx2;
			this.depth[tmpLat][tmpLon] = 0;
			this.velx[tmpLat][tmpLon] = 0;
			this.vely[tmpLat][tmpLon] = 0;		
		}
	}
}

// superclass method
WaterData.prototype = {

	intializeWater: function( depth ){
		if( depth.length != sqrtNumPoints ){
			return false; // must initialize to data array of same size. Return error.
		}
		
		this.depth = depth;
		return true; 
	}

	//TODO - everything
	updateWater: function () {
		//update water information by dt using local vars
	}
}