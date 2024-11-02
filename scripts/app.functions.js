app.showDetails = function(d) {
	//remove visible from all descriptions
	var els = document.querySelectorAll(".visible");
	for(var i = 0; i < els.length; i++) {
		els[i].className = "description invisible";
	}
	//set selected description visible
	var id = d.getAttribute("data-id");
	document.getElementById("description"+id).className = "description visible";
}

app.setVersion = function(version) {
	console.log(app.version);
	document.getElementById("version").innerHTML = "app version: " + app.version + " - data version: " + version + " &copy;Bart Leemans";
}

//check for data in the cache and show them
//check for fresh data and overwrite if found
app.getInfo = function() {		
	if ("caches" in window) {
		app.services.getInfo(true);
	}
	app.services.getInfo(false);
}