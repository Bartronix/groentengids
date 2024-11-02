app.services = (function() {
	"use strict";

	function getInfo(cache) {
			if(cache) {
				caches.match(app.dataUrl).then(function(response) {		
					if (response) {
						response.json().then(function updateFromCache(json) {							
									app.templates.showVegetables(json.vegetables);
									app.templates.showSeasonVegetables(json.seasonvegetables);
									app.templates.showMinerals(json.minerals);
									app.templates.showVitamins(json.vitamins);
									app.setVersion(json.version);
							});
						}
					});
			} else {
				var request = new XMLHttpRequest();
				request.onreadystatechange = function() {
					if (request.readyState === XMLHttpRequest.DONE) {
						if (request.status === 200) {
							var response = JSON.parse(request.response);
							app.templates.showVegetables(response.vegetables);
							app.templates.showSeasonVegetables(response.seasonvegetables);
							app.templates.showMinerals(response.minerals);
							app.templates.showVitamins(response.vitamins);
							app.setVersion(response.version);
						}
					}
				};
				request.open("GET", app.dataUrl);
				request.send();
			}
	}

	return {
		getInfo: getInfo
	};

}());