alert("Je staat voor de poort.");

answer = prompt("1. Open de poort, en ga door? 2. Ga met je grijphaak over de poort?");

if(answer == "1"){
	alert("Langzaam duw je de poort open. Zodra je binnen bent draaien er meteen twee wachters jou kant op.");
	alert("Naast je ligt een omgevalle boom die schuin tegen een huis leunt.");

	answer = prompt("1. Spring op de omgevallen boom en klim op het huis? 2. Gooi een rookbom naar de wachters en sprint erlangs");

	if(answer == "1"){
		alert("Je springt op de boom en klimt op het huis.");
		alert("Je hoort de wachters schreuwen en er gaat een alarm af");
		alert("Voor je zijn nog een aantal huizen waar je over kan. Naast het huis hoor je geritsel, je ziet een wachter staan. Hij lijkt niks door te hebben.")

		answer = prompt("1. Ren verder over de daken? 2. Land achter de wachter en haal hem neer?");

		if(answer == "1"){
			alert("Je rent verder over de daken. Terwijl je het laatste dak bereikt hoor je een man met een bulderende stem roepen.")
			alert("Vind hem en breng hem bij mij!");
			alert("Je kijkt de binnenplaats op en ziet een grote man met een goud pantser. Tijd om dit te beindigen.");
			alert("Je springt van het dak op de leider zijn schouders en met een snelle uithaal haal je je zwaard uit");

			alert("Gewonnen");
		}
		else {
			alert("Je land stilletjes achter de wachter en pakt de grootste steen die je ziet. Hij gaat zonder geluid tegen de grond.");
			alert("Je kijkt om je heen zo te zien heeft niemand het gehoord.");
			alert("Je sprint op de binnenplaats af. Uit het niets sta je oog in oog met 3 wachters. Er komt er een met opgeheven zwaard op je af. Jou eigen zwaard raakt om net onder zijn helm.")
			alert("De tweede wachter kijkt je geschrokken aan. Vliegensvlug raak je hem op zijn knieschijf");
			alert("De laatste wachter laat zijn wapen vallen en rent weg.");

			alert("Achter je hoor je een man schreuwn. Dat moet de leider zijn, denk je.");
			alert("Je haalt je mes tevoorschijn en gooit hem richting de leider. Met een doffe klap komt deze in zijn nek. Hij valt met een harde kreet tegen de grond.");

			alert("Gewonnen");
		}
	}
	else{
		alert("Je gooit een rookbom naar de wachters. Nu ze verblind zijn sprint je erlangs. Je kijkt nog een keer achterom.");
		alert("Terwijl je je hoofd terugdraait krijg je een klap op je achterhoofd. Alles word zwart.");

		alert("Game Over");
	}
}
else{
	alert("Je gooit je grijphaak over de poort. je klimt op de rechtermuur. Terwijl je bezig bent hoor je een boogschutter boven je lopen")
	alert("Terwijl je aan de rand hangt tik je de soldaat op zijn enkel. Met schrik in zijn ogen kijkt hij je aan. Je trekt hem aan zijn been naar beneden schreuwend valt hij.");

	alert("Nu je op de muur staat heb je een perfect zicht van de buitenpost. Verderop zie je een man in goud pantser een speech geven.");

	answer = prompt("1. Gebruik je pijl en boog. 2. Ren verder over de daken?");

	if(answer == "1"){
		alert("Je spant je boog aan, je richt op de leider. Je laat los, de pijl raakt de leider in een open stuk onder zijn pantser!");
		alert("Met een zucht van opluchting laat je je boog zakken. Opeens hoor je een fluitend geluid. 3 pijlen treffen in je borst.");

		alert("Gewonnen (soort van)");
	}
	else{
		alert("Je rent verder over de daken. Je bereikt stilletjes het laatste dak.")
		alert("Je kijkt de binnenplaats op en ziet een grote man met een goud pantser. Dit moet de leider zijn. Tijd om dit te beindigen.");
		alert("Je springt van het dak op de leider zijn schouders. Maar hij hoorde je aankomen, hij vangt je op en slaat je met een rake klap op je hoofd.");
		alert("Alles word zwart.");

		alert("Game over");
	}
}