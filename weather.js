// Step 2: Ask students what kinds of information they need to start with:
//  -- Since this is a "Map API" - we probably need a map.
//  -- We also need to specify where to center the map!
//     Have the students go to Google and find out the
//     longitude and latitude of the SIP location.
//  -- In order to "see" the map and interact with it, we need
//     a view. A view is like a computer screen. The computer
//     can do processes without it, but we won't be able to see.
var ourLoc;
var view;
var map;

// Step 3: We should initalize our variables!
function init() {
	// Initalize things here
	ourLoc = ol.proj.fromLonLat([41.043316, 28.862457]);

	view = new ol.View({
		center: ourLoc,
		zoom: 6 // Students can play around with the starting zoom.
	});

	map = new ol.Map({
		target: 'map', // The "Target" is our <div> name.
		layers: [
		  new ol.layer.Tile({
		    source: new ol.source.OSM() // Explain: this is a required variable.
		  })
		  // Explain: Open Layer offers different types of layers. Layers are like
		  // different brushes used to make the same image. They look different.
		  // Some might take more time than others.
		],
		// Note from the View Animation website:
		// Improve user experience by loading tiles while animating. Will make
		// animations stutter on mobile or slow devices.
		loadTilesWhileAnimating: true,
		view: view
	});
}

function panHome() {
	view.animate({
		center: ourLoc, // "Home" Location
		duration: 1000  // Two seconds
	});
}
function panToLocation() {
	// Step 2: add the basic values we know we'll need
	var countryName = document.getElementById("country-name").value;

	if(countryName === "") {
	 	alert("You didn't enter a country name!");
	 	return;
}

		var query = "https://restcountries.eu/rest/v2/name/"+countryName;

		var lon = 0.0;
			var lat = 0.0;
			var location = ol.proj.fromLonLat([lon, lat]);

			view.animate({
		center: location, // Location
		duration: 2050  // Two seconds
	});
}


// Step 4: We can run the init function when the window loads.
window.onload = init;
