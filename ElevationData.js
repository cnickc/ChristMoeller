//ElevationData Class
function ElevationData( lat, lon, length, sqrtNumPoints ) {
	//handle error cases.
	//check that lat, long are decimals within allowable data ranges
	//check that length is a decimal and that it creates a valid box within data ranges
	//check that sqrtNumPoints is an integer greater than 1

	this.className = "ElevationData";
	this.lat = lat;
	this.lon = lon;
	this.len = length;
	this.sqrtNumPoints = sqrtNumPoints;

	var delta = length / (sqrtNumPoints - 1);
	this.elevation = {};
	
	//TODO - refactor this into local functions.  Constructor is too long.
	for ( var idx1 = 0; idx1 < sqrtNumPoints; idx1++ ) {
		//create hash-table as necessary
		var tmpLat = this.lat + delta * idx1;
		if( typeof elevation[tmpLat] == "undefined" ) {
			elevation[tmpLat] = {};
		}

		for ( var idx2 = 0; idx2 < sqrtNumPoints; idx2++ ) {
			var tmpLon = this.lon + delta * idx2;

			//TODO - this is just a placeholder.  Need to get data from files to place
			// in here.
			elevation[tmpLat][tmpLon] = 100 + 50*Math.cos(tmpLat)*Math.cos(tmpLon);		
		}
	}

}

// superclass method
ElevationData.prototype = {

	//TODO - this is just placeholder API.  Need to figure out what functions this 
	// class will need to perform
	
	getElevation: function ( lat, lon ) {
		return 0;
	},
	
	getCoordinateArray: function () {
		return new Array();
	},
	
	max2D: function ( data ) {
		var tempVals = [];
		for (var row=0; row < data.length; row++) {
			tempVals[row] = Math.max.apply(null,data[row]);
		}
		return Math.max.apply(null, tempVals);    		
	},
	
	min2D: function ( data ) {
		var tempVals = [];
		for (var row=0; row < data.length; row++) {
			tempVals[row] = Math.min.apply(null,data[row]);
		}
		return Math.min.apply(null, tempVals);    
	}
}