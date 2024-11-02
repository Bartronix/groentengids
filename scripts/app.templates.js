app.templates = (function() {
	"use strict";

	function showVegetables(data) {
		document.getElementById("results").innerHTML = "";
		for(var i = 0; i < data.length; i++) {
			var h3 = document.createElement("h3");
			h3.innerHTML = data[i].name;
			h3.setAttribute("data-id", (i+1));		
			h3.onclick = function() {
				app.showDetails(this);
			};
			var div = document.createElement('div');
			div.id = "description" + (i+1);
			var info = "<strong>Omschrijving</strong><br>" + data[i].description + "<br><br><strong>Gezondheid</strong><br>" + data[i].health + "<br><br><strong>Tuin</strong><br>" + data[i].garden + "<br><br><strong>Bereiding</strong><br>" + data[i].preparation + "<br><br><strong>Tuinschema</strong><br>";		
			info = info + '<table class="calendar" ><tr><td style="border: none;">&nbsp;</td><td><strong>J</strong></td><td><strong>F</strong></td><td><strong>M</strong></td><td><strong>A</strong></td><td><strong>M</strong></td><td><strong>J</strong></td><td><strong>J</strong></td><td><strong>A</strong></td><td><strong>S</strong></td><td><strong>O</strong></td><td><strong>N</strong></td><td><strong>D</strong></td></tr>';
			//sow
			info = info + '<tr><td><strong>Zaaien</strong></td><td>' + data[i].sow[0] + '</td><td>' + data[i].sow[1] + 
			"</td><td>" + data[i].sow[2] + "</td><td>" + data[i].sow[3] + "</td><td>" + data[i].sow[4] + 
			"</td><td>" + data[i].sow[5] + "</td><td>" + data[i].sow[6] + "</td><td>" + data[i].sow[7] + 
			"</td><td>" + data[i].sow[8] + "</td><td>" + data[i].sow[9] + "</td><td>" + data[i].sow[10] + 
			"</td><td>" + data[i].sow[11] + "</td></tr>";
			//plant
			info = info + "<tr><td><strong>Planten</strong></td><td>" + data[i].plant[0] + "</td><td>" + data[i].plant[1] + 
			"</td><td>" + data[i].plant[2] + "</td><td>" + data[i].plant[3] + "</td><td>" + data[i].plant[4] + 
			"</td><td>" + data[i].plant[5] + "</td><td>" + data[i].plant[6] + "</td><td>" + data[i].plant[7] + 
			"</td><td>" + data[i].plant[8] + "</td><td>" + data[i].plant[9] + "</td><td>" + data[i].plant[10] + 
			"</td><td>" + data[i].plant[11] + "</td></tr>";
			//harvest
			info = info + "<tr><td><strong>Oogsten</strong></td><td>" + data[i].harvest[0] + "</td><td>" + data[i].harvest[1] + 
			"</td><td>" + data[i].harvest[2] + "</td><td>" + data[i].harvest[3] + "</td><td>" + data[i].harvest[4] + 
			"</td><td>" + data[i].harvest[5] + "</td><td>" + data[i].harvest[6] + "</td><td>" + data[i].harvest[7] + 
			"</td><td>" + data[i].harvest[8] + "</td><td>" + data[i].harvest[9] + "</td><td>" + data[i].harvest[10] + 
			"</td><td>" + data[i].harvest[11] + "</td></tr>";
			info = info + '</table>';
			info = info + '<br><br><img src="images/vegetables/' + data[i].name.toLowerCase().replace(" ", "-") + '.jpg" />';
			div.innerHTML = info;
			div.className = "description invisible";
			document.getElementById("results").appendChild(h3);
			document.getElementById("results").appendChild(div);
		}
	}

	function showSeasonVegetables(data) {
		var h3 = document.createElement("h3");
		h3.id = "seasonvegetables";
		h3.innerHTML = "Groente per seizoen";
		h3.setAttribute("data-id", "seasonvegetables");		
		h3.onclick = function() {
			app.showDetails(this);
		};
		var div = document.createElement('div');
		div.id = "descriptionseasonvegetables";
		var output = "";
		for(var i = 0; i < data.length; i++) {
			output = output + "<strong>" + data[i].name + "</strong><br><br>" + data[i].description + "<br><br>";
		}
		div.innerHTML = output;
		div.className = "description invisible";
		document.getElementById("results").appendChild(h3);
		document.getElementById("results").appendChild(div);
	}

	function showMinerals(data) {
		var h3 = document.createElement("h3");
		h3.id = "minerals";
		h3.innerHTML = "Mineralen";
		h3.setAttribute("data-id", "minerals");		
		h3.onclick = function() {
			app.showDetails(this);
		};
		var div = document.createElement('div');
		div.id = "descriptionminerals";
		var info = "";
		for(var i = 0; i < data.length; i++) {
			info = info + "<strong>" + data[i].name + "</strong><br>" + data[i].description + "<br><br>";
		}
		div.innerHTML = info;
		div.className = "description invisible";
		document.getElementById("results").appendChild(h3);
		document.getElementById("results").appendChild(div);
	}

	function showVitamins(data) {
		var h3 = document.createElement("h3");
		h3.id = "vitamins";
		h3.innerHTML = "Vitaminen";
		h3.setAttribute("data-id", "vitamins");		
		h3.onclick = function() {
			app.showDetails(this);
		};
		var div = document.createElement('div');
		div.id = "descriptionvitamins";
		var info = "";
		for(var i = 0; i < data.length; i++) {
			info = info + "<strong>" + data[i].name + "</strong><br>" + data[i].description + "<br><br>";
		}
		div.innerHTML = info;
		div.className = "description invisible";
		document.getElementById("results").appendChild(h3);
		document.getElementById("results").appendChild(div);
	}

	return {
		showVegetables: showVegetables,
		showSeasonVegetables: showSeasonVegetables,
		showMinerals: showMinerals,
		showVitamins: showVitamins
	};

}());