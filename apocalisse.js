
////VARIABILI CONTENUTI RANDOM
var pickedProtoClade;
var pickedClade;
var pickedFenotipoUno;
var pickedFenotipoDue;
var pickedFenotipoTre;
var pickedCarnagione;
var pickedCapelli;
var pickedOcchi;
var pickedCorporatura;
var pickedStatura;
var pickedEta;
var pickedFenotipo;
var pickedInsediamento;
var pickedStatus;
var pickedClasseSociale;
var mutazione1;
var mutazione2;
var mutazione3;
var mutazione4;
var mutazioneClade1;
var mutazioneClade2;
var pickedSex;
var pickedAttribuzione;
var pickedPronome;
var pickedStatusGenitori;
var pickedFratelliSorelle;
var pickedPrimoNome;
var pickedSecondoNome;


//CREAZIONE ARRAY WEIGHTED + PICK RANDOM

function pickRandom (obj) {

	var weightedArray = [];

	for (var i = 0; i < obj.length; i++) {
		for (var n = 0; n < obj[i].weight; n++){
			weightedArray.push(i);
		}
	}

	return(obj[weightedArray[Math.floor(Math.random() * weightedArray.length)]]);
}

//FUNZIONAMENTO PULSANTE

$("#pulsanteGenera").click(function () {
	$("#generato").slideDown(1000, function() {
		// $("#pulsanteStampa").fadeIn(0);
		// $("p").fadeIn(0);
	});

	var toggle = 1;

$(".fa-plus").click(function () {
	if (toggle == 1) {
		$(".perChiNarra").fadeIn();
		toggle = 0;
	} else {
		$(".perChiNarra").fadeOut();
		toggle = 1;
	}
	});

	printProtoClade();
	printClade();
	printFenotipo();
	printCarnagione();
	printCapelli();
	printOcchi();
	printCorporatura();
	printStatura();
	printEta();
	printInsediamento();
	printStatus();
	printClasseSociale();
	printMutazioni();
	printSex();
	printSessoGenitori();
	printStatusGenitori();
	printFratelliSorelle();
	printCarte();
	printPronome();
	printPrimoNome();
	printSecondoNome();
});

$("#pulsanteStampa").click(function () {
	window.print()
});

//DEFINIZIONE CARTE

function printCarte() {
	$("#fanteCuori").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#fanteQuadri").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#fanteFiori").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#fantePicche").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#donnaCuori").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#donnaQuadri").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#donnaFiori").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#donnaPicche").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#reCuori").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#reQuadri").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#reFiori").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#rePicche").text(carte[Math.floor(Math.random() * carte.length)]);
}


//DEFINIZIONE CLADE

function printProtoClade () {
	pickedProtoClade = pickRandom(protoClade).name;
	$("#protoClade").text(pickedProtoClade);
}

//DEFINIZIONE PROTOCLADE

function printClade () {
	if (pickedProtoClade === 'Sud') {
		pickedClade = pickRandom(cladeSud).name;
		$("#clade").text(pickedClade);
	} else if (pickedProtoClade === 'Venezia') {
		pickedClade = pickRandom(cladeVenezia).name;
		$("#clade").text(pickedClade);
	} else if (pickedProtoClade === 'Vaticano') {
		pickedClade = pickRandom(cladeVaticano).name;
		$("#clade").text(pickedClade);
	} else if (pickedProtoClade === 'Fiorenza di Frontiera') {
		pickedClade = pickRandom(cladeFiorenzaFrontiera).name;
		$("#clade").text(pickedClade);
	} else if (pickedProtoClade === 'Antica Fiorenza') {
		pickedClade = pickRandom(cladeAnticaFiorenza).name;
		$("#clade").text(pickedClade);
	} else if (pickedProtoClade === 'Clade Slave') {
		pickedClade = pickRandom(cladeSlave).name;
		$("#clade").text(pickedClade);
	} else if (pickedProtoClade === 'Napoli') {
		pickedClade = pickRandom(cladeNapoli).name;
		$("#clade").text(pickedClade);
	} else if (pickedProtoClade === 'Pianura del Gemito') {
		pickedClade = pickRandom(cladePianuraGemito).name;
		$("#clade").text(pickedClade);
	} else if (pickedProtoClade === 'Clade Alpine') {
		pickedClade = pickRandom(cladeAlpine).name;
		$("#clade").text(pickedClade);
	} else if (pickedProtoClade === 'Veljutria') {
		pickedClade = pickRandom(cladeVeljutria).name;
		$("#clade").text(pickedClade);
	} else if (pickedProtoClade === 'Adriatica') {
		pickedClade = pickRandom(cladeAdriatica).name;
		$("#clade").text(pickedClade);
	} else if (pickedProtoClade === 'Nuova Milano') {
		pickedClade = pickRandom(cladeNuovaMilano).name;
		$("#clade").text(pickedClade);
	} else {
		$("#clade").text("");
	}

	if (pickedClade === 'Special Clade') {
		pickedClade = pickRandom(specialClade).name;
		$("#clade").text(pickedClade);
	}
}

//DEFINIZIONE FENOTIPO

function printFenotipo () {
	if (pickedClade === 'Adriatica') {
		pickedFenotipoUno = pickRandom(fenotipoAdriatica).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoAdriatica).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoAdriatica).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Affamati') {
		pickedFenotipoUno = pickRandom(fenotipoAffamati).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoAffamati).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoAffamati).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Antonica') {
		pickedFenotipoUno = pickRandom(fenotipoAntonica).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoAntonica).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoAntonica).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Arcologica') {
		pickedFenotipoUno = pickRandom(fenotipoArcologica).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoArcologica).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoArcologica).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Senza-Clade, Solar Punk') {
		pickedFenotipoUno = pickRandom(fenotipoArcologica).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoArcologica).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoArcologica).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Balalaika') {
		pickedFenotipoUno = pickRandom(fenotipoBalalaika).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoBalalaika).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoBalalaika).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Bios') {
		pickedFenotipoUno = pickRandom(fenotipoBios).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoBios).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoBios).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Black Doctors') {
		pickedFenotipoUno = pickRandom(fenotipoBlackDoctors).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoBlackDoctors).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoBlackDoctors).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Butteri') {
		pickedFenotipoUno = pickRandom(fenotipoButteri).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoButteri).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoButteri).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Chianura') {
		pickedFenotipoUno = pickRandom(fenotipoChianura).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoChianura).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoChianura).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Chrome') {
		pickedFenotipoUno = pickRandom(fenotipoChrome).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoChrome).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoChrome).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Chup Lay') {
		pickedFenotipoUno = pickRandom(fenotipoChupLay).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoChupLay).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoChupLay).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Ciurma di Mr. Whang') {
		pickedFenotipoUno = pickRandom(fenotipoCiurmaDiMrWhang).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoCiurmaDiMrWhang).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoCiurmaDiMrWhang).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Dégagé') {
		pickedFenotipoUno = pickRandom(fenotipoDegage).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoDegage).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoDegage).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Darbón') {
		pickedFenotipoUno = pickRandom(fenotipoDarbon).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoDarbon).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoDarbon).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'De Lauzi') {
		pickedFenotipoUno = pickRandom(fenotipoDeLauzi).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoDeLauzi).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoDeLauzi).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'De Medici') {
		pickedFenotipoUno = pickRandom(fenotipoDeMedici).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoDeMedici).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoDeMedici).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Eleuthera Nike') {
		pickedFenotipoUno = pickRandom(fenotipoEleutheraNike).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoEleutheraNike).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoEleutheraNike).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Enclave Sanakee') {
		pickedFenotipoUno = pickRandom(fenotipoEnclaveSanakee).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoEnclaveSanakee).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoEnclaveSanakee).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Favelas') {
		pickedFenotipoUno = pickRandom(fenotipoFavelas).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoFavelas).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoFavelas).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Fermiorrí') {
		pickedFenotipoUno = pickRandom(fenotipoFermiorri).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoFermiorri).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoFermiorri).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Garta') {
		pickedFenotipoUno = pickRandom(fenotipoGarta).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoGarta).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoGarta).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Senza-Clade, Rosari') {
		pickedFenotipoUno = pickRandom(fenotipoGarta).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoGarta).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoGarta).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Grimaldi-Kunna') {
		pickedFenotipoUno = pickRandom(fenotipoGrimaldiKunna).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoGrimaldiKunna).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoGrimaldiKunna).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Gondolieri United') {
		pickedFenotipoUno = pickRandom(fenotipoGondolieriUnited).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoGondolieriUnited).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoGondolieriUnited).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Il Branco') {
		pickedFenotipoUno = pickRandom(fenotipoIlBranco).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoIlBranco).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoIlBranco).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Il Comune') {
		pickedFenotipoUno = pickRandom(fenotipoIlComune).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoIlComune).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoIlComune).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Il Valico') {
		pickedFenotipoUno = pickRandom(fenotipoIlValico).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoIlValico).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoIlValico).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Kaisha') {
		pickedFenotipoUno = pickRandom(fenotipoKaisha).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoKaisha).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoKaisha).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Limes') {
		pickedFenotipoUno = pickRandom(fenotipoLimes).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoLimes).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoLimes).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Lucente') {
		pickedFenotipoUno = pickRandom(fenotipoLucente).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoLucente).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoLucente).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Maglio-Grugno o Empatori') {
		pickedFenotipoUno = pickRandom(fenotipoMaglioGrugno).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoMaglioGrugno).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoMaglioGrugno).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Mercandé') {
		pickedFenotipoUno = pickRandom(fenotipoMercande).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoMercande).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoMercande).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Napadači') {
		pickedFenotipoUno = pickRandom(fenotipoNapadaci).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoNapadaci).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoNapadaci).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Nobili') {
		pickedFenotipoUno = pickRandom(fenotipoNobili).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoNobili).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoNobili).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Clade Nomadi') {
		pickedFenotipoUno = pickRandom(fenotipoCladeNomadi).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoCladeNomadi).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoCladeNomadi).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Officina 52') {
		pickedFenotipoUno = pickRandom(fenotipoOfficina52).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoOfficina52).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoOfficina52).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Ottieri') {
		pickedFenotipoUno = pickRandom(fenotipoOttieri).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoOttieri).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoOttieri).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Pavan') {
		pickedFenotipoUno = pickRandom(fenotipoPavan).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoPavan).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoPavan).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Pirati del Cielo') {
		pickedFenotipoUno = pickRandom(fenotipoPiratiDelCielo).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoPiratiDelCielo).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoPiratiDelCielo).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Potujo') {
		pickedFenotipoUno = pickRandom(fenotipoPotujo).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoPotujo).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoPotujo).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Proxima') {
		pickedFenotipoUno = pickRandom(fenotipoProxima).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoProxima).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoProxima).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Rarama') {
		pickedFenotipoUno = pickRandom(fenotipoRarama).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoRarama).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoRarama).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Revicto') {
		pickedFenotipoUno = pickRandom(fenotipoRevicto).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoRevicto).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoRevicto).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Senza-Clade') {
		pickedFenotipoUno = pickRandom(fenotipoSenzaClade).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoSenzaClade).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoSenzaClade).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Enea') {
		pickedFenotipoUno = pickRandom(fenotipoOttieri).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoOttieri).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoOttieri).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Morgana') {
		pickedFenotipoUno = pickRandom(fenotipoOttieri).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoOttieri).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoOttieri).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Leonardo') {
		pickedFenotipoUno = pickRandom(fenotipoOttieri).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoOttieri).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoOttieri).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Seizon-sha (Extraparlamentari)') {
		pickedFenotipoUno = pickRandom(fenotipoSeizonSha).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoSeizonSha).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoSeizonSha).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Sepulcrea') {
		pickedFenotipoUno = pickRandom(fenotipoSepulcrea).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoSepulcrea).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoSepulcrea).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Será') {
		pickedFenotipoUno = pickRandom(fenotipoSera).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoSera).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoSera).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Sguscia-Spina o Adombrati') {
		pickedFenotipoUno = pickRandom(fenotipoSgusciaSpina).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoSgusciaSpina).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoSgusciaSpina).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Sotho') {
		pickedFenotipoUno = pickRandom(fenotipoSotho).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoSotho).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoSotho).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Steamkiller') {
		pickedFenotipoUno = pickRandom(fenotipoSteamkiller).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoSteamkiller).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoSteamkiller).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Total Arcology 13') {
		pickedFenotipoUno = pickRandom(fenotipoTotalArcology13).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoTotalArcology13).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoTotalArcology13).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Trojka') {
		pickedFenotipoUno = pickRandom(fenotipoTrojka).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoTrojka).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoTrojka).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Waste Recovery') {
		pickedFenotipoUno = pickRandom(fenotipoWasteRecovery).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoWasteRecovery).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoWasteRecovery).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else if (pickedClade === 'Whitecollar') {
		pickedFenotipoUno = pickRandom(fenotipoWhiteCollar).name;
		$("#fenotipoUno").text(pickedFenotipoUno);
		pickedFenotipoDue = pickRandom(fenotipoWhiteCollar).name;
		$("#fenotipoDue").text(pickedFenotipoDue);
		pickedFenotipoTre = pickRandom(fenotipoWhiteCollar).name;
		$("#fenotipoTre").text(pickedFenotipoTre);
	} else {
		$("#fenotipoUno").text("");
		$("#fenotipoDue").text("");
		$("#fenotipoTre").text("");
	}
}

//DEFINIZIONE CARNAGIONE

function printCarnagione () {
	if (pickedFenotipoUno === 'Afroamericano-Afroeuropeo') {
		pickedCarnagione = pickRandom(carnagioneAfroamericanoAfroeuropeo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Anglosassone') {
		pickedCarnagione = pickRandom(carnagioneAnglosassone).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Arabo') {
		pickedCarnagione = pickRandom(carnagioneArabo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Bantu') {
		pickedCarnagione = pickRandom(carnagioneBantu).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Basotho') {
		pickedCarnagione = pickRandom(carnagioneBasotho).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Berbero') {
		pickedCarnagione = pickRandom(carnagioneBerbero).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Bisaya (Filippine)') {
		pickedCarnagione = pickRandom(carnagioneBisaya).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Cafuzo-Lobo-Garifuna') {
		pickedCarnagione = pickRandom(carnagioneCafuzo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Centroamericano Nativo') {
		pickedCarnagione = pickRandom(carnagioneCentroamericano).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Creolo') {
		pickedCarnagione = pickRandom(carnagioneCreolo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Curdo-Armeno') {
		pickedCarnagione = pickRandom(carnagioneCurdoArmeno).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Germanico-Tedesco') {
		pickedCarnagione = pickRandom(carnagioneGermanicoTedesco).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Giapponese') {
		pickedCarnagione = pickRandom(carnagioneGiapponese).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Franco-Catalano') {
		pickedCarnagione = pickRandom(carnagioneFrancoCatalano).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Gaelico-Gallego') {
		pickedCarnagione = pickRandom(carnagioneGaelicoGallego).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Han-Zhuang') {
		pickedCarnagione = pickRandom(carnagioneHanZhuang).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Kazako-Uzbeko') {
		pickedCarnagione = pickRandom(carnagioneKazakoUzbeko).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Lao') {
		pickedCarnagione = pickRandom(carnagioneLao).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Manciù') {
		pickedCarnagione = pickRandom(carnagioneManciu).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Malese') {
		pickedCarnagione = pickRandom(carnagioneMalese).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Mediterraneo-Anatolico-Semitico') {
		pickedCarnagione = pickRandom(carnagioneMediterraneo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Oromo (Kenya e Etiopia)') {
		pickedCarnagione = pickRandom(carnagioneOromo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Pashtun') {
		pickedCarnagione = pickRandom(carnagionePashtun).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Persiano') {
		pickedCarnagione = pickRandom(carnagionePersiano).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Rom Sinti') {
		pickedCarnagione = pickRandom(carnagioneRomSinti).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Scandinavo') {
		pickedCarnagione = pickRandom(carnagioneScandinavo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Sahrawi') {
		pickedCarnagione = pickRandom(carnagioneSahrawi).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Pashtun') {
		pickedCarnagione = pickRandom(carnagionePashtun).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Slavo Occidentale') {
		pickedCarnagione = pickRandom(carnagioneSlavoOccidentale).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Slavo Orientale') {
		pickedCarnagione = pickRandom(carnagioneSlavoOrientale).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Slavo Meridionale') {
		pickedCarnagione = pickRandom(carnagioneSlavoMeridionale).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Siberiano') {
		pickedCarnagione = pickRandom(carnagioneSiberiano).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Somalo') {
		pickedCarnagione = pickRandom(carnagioneSomalo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Sudamericano Nativo') {
		pickedCarnagione = pickRandom(carnagioneSudamericanoNativo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Thai') {
		pickedCarnagione = pickRandom(carnagioneThai).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Tigrino (Eritrea)') {
		pickedCarnagione = pickRandom(carnagioneTigrino).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Việt') {
		pickedCarnagione = pickRandom(carnagioneViet).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Tamil') {
		pickedCarnagione = pickRandom(carnagioneTamil).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Tibeto-Birmano') {
		pickedCarnagione = pickRandom(carnagioneTibetoBirmano).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Turco-Oghuz') {
		pickedCarnagione = pickRandom(carnagioneTurcoOghuz).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Uralico') {
		pickedCarnagione = pickRandom(carnagioneUralico).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Wolof') {
		pickedCarnagione = pickRandom(carnagioneWolof).name;
		$("#carnagione").text(pickedCarnagione);
	} else {
		$("#carnagione").text("");
	}
}

//DEFINIZIONE CAPELLI

function printCapelli () {
	if (pickedFenotipoDue === 'Afroamericano-Afroeuropeo') {
		pickedCapelli = pickRandom(capelliAfroamericanoAfroeuropeo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Anglosassone') {
		pickedCapelli = pickRandom(capelliAnglosassone).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Arabo') {
		pickedCapelli = pickRandom(capelliArabo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Bantu') {
		pickedCapelli = pickRandom(capelliBantu).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Basotho') {
		pickedCapelli = pickRandom(capelliBasotho).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Berbero') {
		pickedCapelli = pickRandom(capelliBerbero).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Bisaya (Filippine)') {
		pickedCapelli = pickRandom(capelliBisaya).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Cafuzo-Lobo-Garifuna') {
		pickedCapelli = pickRandom(capelliCafuzo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Centroamericano Nativo') {
		pickedCapelli = pickRandom(capelliCentroamericanoNativo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Creolo') {
		pickedCapelli = pickRandom(capelliCreolo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Curdo-Armeno') {
		pickedCapelli = pickRandom(capelliCurdoArmeno).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Germanico-Tedesco') {
		pickedCapelli = pickRandom(capelliGermanicoTedesco).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Giapponese') {
		pickedCapelli = pickRandom(capelliGiapponese).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Franco-Catalano') {
		pickedCapelli = pickRandom(capelliFrancoCatalano).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Gaelico-Gallego') {
		pickedCapelli = pickRandom(capelliGaelicoGallego).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Han-Zhuang') {
		pickedCapelli = pickRandom(capelliHanZhuang).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Kazako-Uzbeko') {
		pickedCapelli = pickRandom(capelliKazakoUzbeko).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Lao') {
		pickedCapelli = pickRandom(capelliLao).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Manciù') {
		pickedCapelli = pickRandom(capelliManciu).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Malese') {
		pickedCapelli = pickRandom(capelliMalese).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Mediterraneo-Anatolico-Semitico') {
		pickedCapelli = pickRandom(capelliMediterraneo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Oromo (Kenya e Etiopia)') {
		pickedCapelli = pickRandom(capelliOromo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Pashtun') {
		pickedCapelli = pickRandom(capelliPashtun).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Persiano') {
		pickedCapelli = pickRandom(capelliPersiano).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Rom Sinti') {
		pickedCapelli = pickRandom(capelliRomSinti).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Scandinavo') {
		pickedCapelli = pickRandom(capelliScandinavo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Sahrawi') {
		pickedCapelli = pickRandom(capelliSahrawi).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Pashtun') {
		pickedCapelli = pickRandom(capelliPashtun).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Slavo Occidentale') {
		pickedCapelli = pickRandom(capelliSlavoOccidentale).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Slavo Orientale') {
		pickedCapelli = pickRandom(capelliSlavoOrientale).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Slavo Meridionale') {
		pickedCapelli = pickRandom(capelliSlavoMeridionale).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Siberiano') {
		pickedCapelli = pickRandom(capelliSiberiano).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Somalo') {
		pickedCapelli = pickRandom(capelliSomalo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Sudamericano Nativo') {
		pickedCapelli = pickRandom(capelliSudamericano).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Thai') {
		pickedCapelli = pickRandom(capelliThai).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Tigrino (Eritrea)') {
		pickedCapelli = pickRandom(capelliTigrino).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Việt') {
		pickedCapelli = pickRandom(capelliViet).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Tamil') {
		pickedCapelli = pickRandom(capelliTamil).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Tibeto-Birmano') {
		pickedCapelli = pickRandom(capelliTibetoBirmano).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Turco-Oghuz') {
		pickedCapelli = pickRandom(capelliTurcoOghuz).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Uralico') {
		pickedCapelli = pickRandom(capelliUralico).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Wolof') {
		pickedCapelli = pickRandom(capelliWolof).name;
		$("#capelli").text(pickedCapelli);
	} else {
		$("#capelli").text("");
	}
}

//DEFINIZIONE OCCHI

function printOcchi () {
	if (pickedFenotipoTre === 'Afroamericano-Afroeuropeo') {
		pickedOcchi = pickRandom(occhiAfroamericanoAfroeuropeo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Anglosassone') {
		pickedOcchi = pickRandom(occhiAnglosassone).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Arabo') {
		pickedOcchi = pickRandom(occhiArabo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Bantu') {
		pickedOcchi = pickRandom(occhiBantu).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Basotho') {
		pickedOcchi = pickRandom(occhiBasotho).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Berbero') {
		pickedOcchi = pickRandom(occhiBerbero).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Bisaya (Filippine)') {
		pickedOcchi = pickRandom(occhiBisaya).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Cafuzo-Lobo-Garifuna') {
		pickedOcchi = pickRandom(occhiCafuzo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Centroamericano Nativo') {
		pickedOcchi = pickRandom(occhiCentroamericanoNativo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Creolo') {
		pickedOcchi = pickRandom(occhiCreolo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Curdo-Armeno') {
		pickedOcchi = pickRandom(occhiCurdoArmeno).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Germanico-Tedesco') {
		pickedOcchi = pickRandom(occhiGermanicoTedesco).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Giapponese') {
		pickedOcchi = pickRandom(occhiGiapponese).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Franco-Catalano') {
		pickedOcchi = pickRandom(occhiFrancoCatalano).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Gaelico-Gallego') {
		pickedOcchi = pickRandom(occhiGaelicoGallego).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Han-Zhuang') {
		pickedOcchi = pickRandom(occhiHanZhuang).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Kazako-Uzbeko') {
		pickedOcchi = pickRandom(occhiKazakoUzbeko).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Lao') {
		pickedOcchi = pickRandom(occhiLao).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Manciù') {
		pickedOcchi = pickRandom(occhiManciu).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Malese') {
		pickedOcchi = pickRandom(occhiMalese).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Mediterraneo-Anatolico-Semitico') {
		pickedOcchi = pickRandom(occhiMediterraneo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Oromo (Kenya e Etiopia)') {
		pickedOcchi = pickRandom(occhiOromo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Pashtun') {
		pickedOcchi = pickRandom(occhiPashtun).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Persiano') {
		pickedOcchi = pickRandom(occhiPersiano).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Rom Sinti') {
		pickedOcchi = pickRandom(occhiRomSinti).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Scandinavo') {
		pickedOcchi = pickRandom(occhiScandinavo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Sahrawi') {
		pickedOcchi = pickRandom(occhiSahrawi).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Pashtun') {
		pickedOcchi = pickRandom(occhiPashtun).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Slavo Occidentale') {
		pickedOcchi = pickRandom(occhiSlavoOccidentale).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Slavo Orientale') {
		pickedOcchi = pickRandom(occhiSlavoOrientale).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Slavo Meridionale') {
		pickedOcchi = pickRandom(occhiSlavoMeridionale).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Siberiano') {
		pickedOcchi = pickRandom(occhiSiberiano).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Somalo') {
		pickedOcchi = pickRandom(occhiSomalo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Sudamericano Nativo') {
		pickedOcchi = pickRandom(occhiSudamericanoNativo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Thai') {
		pickedOcchi = pickRandom(occhiThai).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Tigrino (Eritrea)') {
		pickedOcchi = pickRandom(occhiTigrino).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Việt') {
		pickedOcchi = pickRandom(occhiViet).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Tamil') {
		pickedOcchi = pickRandom(occhiTamil).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Tibeto-Birmano') {
		pickedOcchi = pickRandom(occhiTibetoBirmano).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Turco-Oghuz') {
		pickedOcchi = pickRandom(occhiTurcoOghuz).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Uralico') {
		pickedOcchi = pickRandom(occhiUralico).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Wolof') {
		pickedOcchi = pickRandom(occhiWolof).name;
		$("#occhi").text(pickedOcchi);
	} else {
		$("#occhi").text("");
	}
}

//DEFINIZIONE CORPORATURA

function printCorporatura () {
	if  (
		(pickedFenotipoUno === 'Anglosassone') ||
		(pickedFenotipoUno === 'Bantu') ||
		(pickedFenotipoUno === 'Berbero') ||
		(pickedFenotipoUno === 'Cafuzo-Lobo-Garifuna') ||
		(pickedFenotipoUno === 'Curdo-Armeno') ||
		(pickedFenotipoUno === 'Germanico-Tedesco') ||
		(pickedFenotipoUno === 'Franco-Catalano') ||
		(pickedFenotipoUno === 'Gaelico-Gallego') ||
		(pickedFenotipoUno === 'Mediterraneo-Anatolico-Semitico') ||
		(pickedFenotipoUno === 'Scandinavo') ||
		(pickedFenotipoUno === 'Slavo Occidentale') ||
		(pickedFenotipoUno === 'Slavo Orientale') ||
		(pickedFenotipoUno === 'Slavo Meridionale')) {
		pickedCorporatura = pickRandom(corporaturaA).name;
		$("#corporatura").text(pickedCorporatura);

	} else if (
		(pickedFenotipoUno === 'Afroamericano-Afroeuropeo') ||
		(pickedFenotipoUno === 'Creolo') ||
		(pickedFenotipoUno === 'Wolof')) {
		pickedCorporatura = pickRandom(corporaturaB).name;
		$("#corporatura").text(pickedCorporatura);

	} else if (
		(pickedFenotipoUno === 'Arabo') ||
		(pickedFenotipoUno === 'Bisaya (Filippine)') ||
		(pickedFenotipoUno === 'Kazako-Uzbeko') ||
		(pickedFenotipoUno === 'Pashtun') ||
		(pickedFenotipoUno === 'Persiano') ||
		(pickedFenotipoUno === 'Rom Sinti') ||
		(pickedFenotipoUno === 'Turco-Oghuz'))  {
		pickedCorporatura = pickRandom(corporaturaC).name;
		$("#corporatura").text(pickedCorporatura);

	} else if (
		(pickedFenotipoUno === 'Basotho') ||
		(pickedFenotipoUno === 'Oromo (Kenya e Etiopia)') ||
		(pickedFenotipoUno === 'Sahrawi') ||
		(pickedFenotipoUno === 'Somalo') ||
		(pickedFenotipoUno === 'Tigrino (Eritrea)'))  {
		pickedCorporatura = pickRandom(corporaturaD).name;
		$("#corporatura").text(pickedCorporatura);

	} else if (
		(pickedFenotipoUno === 'Centroamericano Nativo') ||
		(pickedFenotipoUno === 'Siberiano') ||
		(pickedFenotipoUno === 'Sudamericano Nativo') ||
		(pickedFenotipoUno === 'Uralico'))  {
		pickedCorporatura = pickRandom(corporaturaE).name;
		$("#corporatura").text(pickedCorporatura);

	} else if (
		(pickedFenotipoUno === 'Anglosassone') ||
		(pickedFenotipoUno === 'Giapponese') ||
		(pickedFenotipoUno === 'Han-Zhuang') ||
		(pickedFenotipoUno === 'Lao') ||
		(pickedFenotipoUno === 'Manciù') ||
		(pickedFenotipoUno === 'Malese') ||
		(pickedFenotipoUno === 'Thai') ||
		(pickedFenotipoUno === 'Việt') ||
		(pickedFenotipoUno === 'Tamil') ||
		(pickedFenotipoUno === 'Tibeto-Birmano'))  {
		pickedCorporatura = pickRandom(corporaturaF).name;
		$("#corporatura").text(pickedCorporatura);
	} else {
		$("#corporatura").text("");
	}
}

//DEFINIZIONE STATURA

function printStatura () {
	pickedStatura = pickRandom(statura).name;
	$("#statura").text(pickedStatura);
}

//DEFINIZIONE ALTEZZA



//DEFINIZIONE ETà

function printEta () {
	pickedEta = pickRandom(eta).name;
	$("#eta").text(pickedEta);
}

//DEFINIZIONE INSEDIAMENTO

function printInsediamento () {
	if (pickedClade === 'Adriatica') {
		pickedInsediamento = pickRandom(insediamentoAdriatica).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Affamati') {
		pickedInsediamento = pickRandom(insediamentoAffamati).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Antonica') {
		pickedInsediamento = pickRandom(insediamentoAntonica).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Arcologica') {
		pickedInsediamento = pickRandom(insediamentoArcologica).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Balalaika') {
		pickedInsediamento = pickRandom(insediamentoBalalaika).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Bios') {
		pickedInsediamento = pickRandom(insediamentoBios).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Black Doctors') {
		pickedInsediamento = pickRandom(insediamentoBlackDoctors).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Butteri') {
		pickedInsediamento = pickRandom(insediamentoButteri).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Chianura') {
		pickedInsediamento = pickRandom(insediamentoChianura).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Chrome') {
		pickedInsediamento = pickRandom(insediamentoChrome).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Chup Lay') {
		pickedInsediamento = pickRandom(insediamentoChupLay).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Ciurma di Mr. Whang') {
		pickedInsediamento = pickRandom(insediamentoCiurmaDiMrWang).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Dégagé') {
		pickedInsediamento = pickRandom(insediamentoDegage).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Darbón') {
		pickedInsediamento = pickRandom(insediamentoDarbon).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'De Lauzi') {
		pickedInsediamento = pickRandom(insediamentoDeLauzi).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'De Medici') {
		pickedInsediamento = pickRandom(insediamentoDeMedici).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Eleuthera Nike') {
		pickedInsediamento = pickRandom(insediamentoEleutheraNike).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Enclave Sanakee') {
		pickedInsediamento = pickRandom(insediamentoEnclaveSanakee).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Favelas') {
		pickedInsediamento = pickRandom(insediamentoFavelas).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Fermiorrí') {
		pickedInsediamento = pickRandom(insediamentoFermiorri).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Garta') {
		pickedInsediamento = pickRandom(insediamentoGarta).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Grimaldi-Kunna') {
		pickedInsediamento = pickRandom(insediamentoGrimaldiKunna).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Gondolieri United') {
		pickedInsediamento = pickRandom(insediamentoGondolieriUnited).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Il Branco') {
		pickedInsediamento = pickRandom(insediamentoIlBranco).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Il Comune') {
		pickedInsediamento = pickRandom(insediamentoIlComune).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Il Valico') {
		pickedInsediamento = pickRandom(insediamentoIlValico).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Kaisha') {
		pickedInsediamento = pickRandom(insediamentoKaisha).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Limes') {
		pickedInsediamento = pickRandom(insediamentoLimes).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Lucente') {
		pickedInsediamento = pickRandom(insediamentoLucente).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Maglio-Grugno o Empatori') {
		pickedInsediamento = pickRandom(insediamentoMaglioGrugno).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Mercandé') {
		pickedInsediamento = pickRandom(insediamentoMercande).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Napadači') {
		pickedInsediamento = pickRandom(insediamentoNapadaci).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Nobili') {
		pickedInsediamento = pickRandom(insediamentoNobili).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Clade Nomadi') {
		pickedInsediamento = pickRandom(insediamentoCladeNomadi).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Senza-Clade, Solar Punk') {
		pickedInsediamento = pickRandom(insediamentoSolarPunk).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Senza-Clade, Rosari') {
		pickedInsediamento = pickRandom(insediamentoRosari).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Officina 52') {
		pickedInsediamento = pickRandom(insediamentoOfficina52).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Ottieri') {
		pickedInsediamento = pickRandom(insediamentoOttieri).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Pavan') {
		pickedInsediamento = pickRandom(insediamentoPavan).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Pirati del Cielo') {
		pickedInsediamento = pickRandom(insediamentoPiratiDelCielo).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Potujo') {
		pickedInsediamento = pickRandom(insediamentoPotujo).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Proxima') {
		pickedInsediamento = pickRandom(insediamentoProxima).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Rarama') {
		pickedInsediamento = pickRandom(insediamentoRarama).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Revicto') {
		pickedInsediamento = pickRandom(insediamentoRevicto).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Senza-Clade') {
		pickedInsediamento = pickRandom(insediamentoSenzaClade).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Enea') {
		pickedInsediamento = pickRandom(insediamentoNuovaMilano).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Morgana') {
		pickedInsediamento = pickRandom(insediamentoNuovaMilano).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Leonardo') {
		pickedInsediamento = pickRandom(insediamentoNuovaMilano).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Seizon-sha (Extraparlamentari)') {
		pickedInsediamento = pickRandom(insediamentoSeizonSha).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Sepulcrea') {
		pickedInsediamento = pickRandom(insediamentoSepulcrea).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Será') {
		pickedInsediamento = pickRandom(insediamentoSera).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Sguscia-Spina o Adombrati') {
		pickedInsediamento = pickRandom(insediamentoSgusciaSpina).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Sotho') {
		pickedInsediamento = pickRandom(insediamentoSotho).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Steamkiller') {
		pickedInsediamento = pickRandom(insediamentoSteamkiller).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Total Arcology 13') {
		pickedInsediamento = pickRandom(insediamentoTotalArcology13).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Trojka') {
		pickedInsediamento = pickRandom(insediamentoTrojka).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Waste Recovery') {
		pickedInsediamento = pickRandom(insediamentoWasteRecovery).name;
		$("#insediamento").text(pickedInsediamento);
	} else if (pickedClade === 'Whitecollar') {
		pickedInsediamento = pickRandom(insediamentoWhiteCollar).name;
		$("#insediamento").text(pickedInsediamento);
	} else {
		$("#insediamento").text("");
	}
}

//DEFINIZIONE STATUS ECONOMICO

function printStatus () {
	if  (
		(pickedClade === 'Adriatica') ||
		(pickedClade === 'Antonica') ||
		(pickedClade === 'Balalaika') ||
		(pickedClade === 'Butteri') ||
		(pickedClade === 'Ciurma di Mr. Whang') ||
		(pickedClade === 'Darbón') ||
		(pickedClade === 'De Lauzi') ||
		(pickedClade === 'Fermiorrí') ||
		(pickedClade === 'Gondolieri United') ||
		(pickedClade === 'Il Branco') ||
		(pickedClade === 'Il Comune') ||
		(pickedClade === 'Kaisha') ||
		(pickedClade === 'Limes') ||
				(pickedClade === 'Senza-Clade, Solar Punk') ||
								(pickedClade === 'Senza-Clade, Rosari') ||
		(pickedClade === 'Clade Nomadi') ||
		(pickedClade === 'Ottieri') ||
		(pickedClade === 'Pavan') ||
		(pickedClade === 'Pirati del Cielo') ||
		(pickedClade === 'Proxima') ||
		(pickedClade === 'Rarama') ||
		(pickedClade === 'Será') ||
		(pickedClade === 'Sotho') ||
		(pickedClade === 'Steamkiller') ||
		(pickedClade === 'Total Arcology 13') ||
		(pickedClade === 'Trojka')) {
		pickedStatus = pickRandom(statusA).name;
		$("#status").text(pickedStatus);
	} else if (
		(pickedClade === 'Affamati') ||
		(pickedClade === 'Chup Lay') ||
		(pickedClade === 'Eleuthera Nike') ||
		(pickedClade === 'Enclave Sanakee') ||
		(pickedClade === 'Garta') ||
		(pickedClade === 'Maglio-Grugno o Empatori') ||
		(pickedClade === 'Potujo') ||
		(pickedClade === 'Sguscia-Spina o Adombrati') ||
		(pickedClade === 'Waste Recovery')) {
		pickedStatus = pickRandom(statusB).name;
		$("#status").text(pickedStatus);
	} else if (
		(pickedClade === 'Arcologica') ||
		(pickedClade === 'Chianura') ||
		(pickedClade === 'Chrome') ||
		(pickedClade === 'Dégagé') ||
		(pickedClade === 'Favelas') ||
		(pickedClade === 'Grimaldi-Kunna') ||
		(pickedClade === 'Il Valico') ||
		(pickedClade === 'Lucente') ||
		(pickedClade === 'Napadači') ||
		(pickedClade === 'Officina 52') ||
		(pickedClade === 'Revicto') ||
		(pickedClade === 'Senza-Clade') ||
				(pickedClade === 'Enea') ||
						(pickedClade === 'Morgana') ||
								(pickedClade === 'Leonardo') ||
		(pickedClade === 'Seizon-sha (Extraparlamentari)') ||
		(pickedClade === 'Sepulcrea')) {
		pickedStatus = pickRandom(statusC).name;
		$("#status").text(pickedStatus);
	} else if (
		(pickedClade === 'Bios') ||
		(pickedClade === 'Mercandé') ||
		(pickedClade === 'Whitecollar')) {
		pickedStatus = pickRandom(statusD).name;
		$("#status").text(pickedStatus);
	} else if (
		(pickedClade === 'Black Doctors') ||
		(pickedClade === 'De Medici') ||
		(pickedClade === 'Nobili') ||
		(pickedClade === 'Senza-Clade di Nuova Milano')) {
		pickedStatus = pickRandom(statusE).name;
		$("#status").text(pickedStatus);
	} else {
		$("#status").text("");
	}
}

//DEFINIZIONE CLASSE SOCIALE

function printClasseSociale () {
	if  (
		(pickedClade === 'Mercandé') ||
		(pickedClade === 'Whitecollar')||
		(pickedClade === 'Adriatica') ||
		(pickedClade === 'Antonica') ||
		(pickedClade === 'Balalaika') ||
		(pickedClade === 'Butteri') ||
		(pickedClade === 'Ciurma di Mr. Whang') ||
		(pickedClade === 'Darbón') ||
		(pickedClade === 'De Lauzi') ||
		(pickedClade === 'Fermiorrí') ||
		(pickedClade === 'Gondolieri United') ||
		(pickedClade === 'Il Branco') ||
		(pickedClade === 'Il Comune') ||
		(pickedClade === 'Kaisha') ||
		(pickedClade === 'Limes') ||
		(pickedClade === 'Senza-Clade, Solar Punk') ||
						(pickedClade === 'Senza-Clade, Rosari') ||
		(pickedClade === 'Clade Nomadi') ||
		(pickedClade === 'Enea') ||
				(pickedClade === 'Morgana') ||
						(pickedClade === 'Leonardo') ||
		(pickedClade === 'Ottieri') ||
		(pickedClade === 'Pavan') ||
		(pickedClade === 'Pirati del Cielo') ||
		(pickedClade === 'Proxima') ||
		(pickedClade === 'Rarama') ||
		(pickedClade === 'Será') ||
		(pickedClade === 'Sotho') ||
		(pickedClade === 'Trojka')) {
		pickedClasseSociale = pickRandom(classeSocialeA).name;
		$("#classeSociale").text(pickedClasseSociale);
	} else if (
		(pickedClade === 'Affamati') ||
		(pickedClade === 'Chup Lay') ||
		(pickedClade === 'Eleuthera Nike') ||
		(pickedClade === 'Enclave Sanakee') ||
		(pickedClade === 'Garta') ||
		(pickedClade === 'Maglio-Grugno o Empatori') ||
		(pickedClade === 'Potujo') ||
		(pickedClade === 'Sguscia-Spina o Adombrati') ||
		(pickedClade === 'Waste Recovery')) {
		pickedClasseSociale = pickRandom(classeSocialeB).name;
		$("#classeSociale").text(pickedClasseSociale);
	} else if (
		(pickedClade === 'Total Arcology 13') ||
		(pickedClade === 'Steamkiller') ||
		(pickedClade === 'Arcologica') ||
		(pickedClade === 'Chianura') ||
		(pickedClade === 'Chrome') ||
		(pickedClade === 'Dégagé') ||
		(pickedClade === 'Favelas') ||
		(pickedClade === 'Grimaldi-Kunna') ||
		(pickedClade === 'Il Valico') ||
		(pickedClade === 'Lucente') ||
		(pickedClade === 'Napadači') ||
		(pickedClade === 'Officina 52') ||
		(pickedClade === 'Revicto') ||
		(pickedClade === 'Senza-Clade') ||
		(pickedClade === 'Seizon-sha (Extraparlamentari)') ||
		(pickedClade === 'Sepulcrea')) {
		pickedClasseSociale = pickRandom(classeSocialeC).name;
		$("#classeSociale").text(pickedClasseSociale);
	} else if (
		(pickedClade === 'Bios') ||
		(pickedClade === 'Senza-Clade di Nuova Milano')) {
		pickedClasseSociale = pickRandom(classeSocialeD).name;
		$("#classeSociale").text(pickedClasseSociale);
	} else if (
		(pickedClade === 'Black Doctors') ||
		(pickedClade === 'De Medici') ||
		(pickedClade === 'Nobili')) {
		pickedClasseSociale = pickRandom(classeSocialeE).name;
		$("#classeSociale").text(pickedClasseSociale);
	} else {
		$("#status").text("");
	}
}

//DEFINIZIONE MUTAZIONI

function printMutazioni () {
	if  (
		(pickedProtoClade === 'Clade Alpine') ||
		(pickedProtoClade === 'Nuova Milano') ||
		(pickedProtoClade === 'Sud') ||
		(pickedProtoClade === 'Antica Fiorenza') ||
		(pickedProtoClade === 'Vaticano') ||
		(pickedProtoClade === 'Fiorenza di Frontiera') ||
		(pickedProtoClade === 'Clade Slave') ||
		(pickedProtoClade === 'Napoli') ||
		(pickedProtoClade === 'Pianura del Gemito') ||
		(pickedProtoClade === 'Veljutria') ||
		(pickedProtoClade === 'Adriatica') ||
		(pickedProtoClade === 'Venezia')) {
		mutazione1 = pickRandom(mutazioniLivello1).name;
		$('#mutazione1').text(mutazione1);
	} else {
		mutazione1 = false;
		$('#mutazione1').text("nope");
	}

	if  (
		(pickedProtoClade === 'Sud') ||
		(pickedProtoClade === 'Antica Fiorenza') ||
		(pickedProtoClade === 'Vaticano') ||
		(pickedProtoClade === 'Fiorenza di Frontiera') ||
		(pickedProtoClade === 'Clade Slave') ||
		(pickedProtoClade === 'Napoli') ||
		(pickedProtoClade === 'Pianura del Gemito') ||
		(pickedProtoClade === 'Veljutria') ||
		(pickedProtoClade === 'Adriatica') ||
		(pickedProtoClade === 'Venezia')) {
		mutazione2 = pickRandom(mutazioniLivello2).name;
		$('#mutazione2').text(mutazione2);
	} else {
		mutazione2 = false;
		$('#mutazione2').text("nope");
	}

	if  (
		(pickedProtoClade === 'Vaticano') ||
		(pickedProtoClade === 'Fiorenza di Frontiera') ||
		(pickedProtoClade === 'Clade Slave') ||
		(pickedProtoClade === 'Napoli') ||
		(pickedProtoClade === 'Pianura del Gemito') ||
		(pickedProtoClade === 'Veljutria') ||
		(pickedProtoClade === 'Adriatica') ||
		(pickedProtoClade === 'Venezia')) {
		mutazione3 = pickRandom(mutazioniLivello3).name;
		$('#mutazione3').text(mutazione3);
	} else {
		mutazione3 = false;
		$('#mutazione3').text("nope");
	}

	if  (pickedProtoClade === 'Venezia') {
		mutazione4 = pickRandom(mutazioniLivello4).name;
		$('#mutazione4').text(mutazione4);
	} else {
		mutazione4 = false;
		$('#mutazione4').text("nope");
	}


	//disturbi gravi

	if (mutazione1 === 'Disturbi Gravi') {
		mutazione1 = pickRandom(disturbiGravi).name;
		$('#mutazione1').text(mutazione1);
	}

	if (mutazione2 === 'Disturbi Gravi') {
		mutazione2 = pickRandom(disturbiGravi).name;
		$('#mutazione2').text(mutazione2);
	}

	if (mutazione3 === 'Disturbi Gravi') {
		mutazione3 = pickRandom(disturbiGravi).name;
		$('#mutazione3').text(mutazione2);
	}

	if (mutazione4 === 'Disturbi Gravi') {
		mutazione4 = pickRandom(disturbiGravi).name;
		$('#mutazione4').text(mutazione4);
	}


	//mutazioni a seconda del sesso

	if ((mutazione4 === 'A seconda del sesso') && (pickedSex === 'Femmina')) {
		$('#mutazione4').text("Triplo Seno");
	} else 	if ((mutazione4 === 'A seconda del sesso') && (pickedSex === 'Maschio')) {
		$('#mutazione4').text("Pene Biforcuto");
	}

	if ((mutazione4 === 'A seconda del sesso') && (pickedAttribuzione === 'Attribuito Maschio')) {
		$('#mutazione4').text("Pene Biforcuto");
	} else 	if ((mutazione4 === 'A seconda del sesso') && (pickedSex === 'Attribuita Femmina')) {
		$('#mutazione4').text("Triplo Seno");
	}

	//mutazioni albinismo neri

	if ((mutazione1 === 'Albinismo') && (pickedCarnagione === 'Nera')) {
		$('#mutazione1').text('Albinismo Rubio');
	}

	if ((mutazione2 === 'Albinismo') && (pickedCarnagione === 'Nera')) {
		$('#mutazione2').text('Albinismo Rubio');
	}

	if ((mutazione3 === 'Albinismo') && (pickedCarnagione === 'Nera')) {
		$('#mutazione3').text('Albinismo Rubio');
	}

	if ((mutazione4 === 'Albinismo') && (pickedCarnagione === 'Nera')) {
		$('#mutazione4').text('Albinismo Rubio');
	}



	if ((mutazione1 === 'Gigantismo')) {
		$('#statura').text('Gigantesca');
	}

	if ((mutazione2 === 'Gigantismo')) {
		$('#statura').text('Gigantesca');
	}

	if ((mutazione3 === 'Gigantismo')) {
		$('#statura').text('Gigantesca');
	}

	if ((mutazione4 === 'Gigantismo')) {
		$('#statura').text('Gigantesca');
	}


	if ((mutazione1 === 'Nanismo')) {
		$('#statura').text('Nanica');
	}

	if ((mutazione2 === 'Nanismo')) {
		$('#statura').text('Nanica');
	}

	if ((mutazione3 === 'Nanismo')) {
		$('#statura').text('Nanica');
	}

	if ((mutazione4 === 'Nanismo')) {
		$('#statura').text('Nanica');
	}




	// mutazione albinismo scuri

	if ((mutazione1 === 'Albinismo') && (pickedCarnagione === 'Scura')) {
		$('#mutazione1').text('Albinismo Rubio');
	}

	if ((mutazione2 === 'Albinismo') && (pickedCarnagione === 'Scura')) {
		$('#mutazione2').text('Albinismo Rubio');
	}

	if ((mutazione3 === 'Albinismo') && (pickedCarnagione === 'Scura')) {
		$('#mutazione3').text('Albinismo Rubio');
	}

	if ((mutazione4 === 'Albinismo') && (pickedCarnagione === 'Scura')) {
		$('#mutazione4').text('Albinismo Rubio');
	}

	//mutazioni di clade

	if  (pickedClade === 'Maglio-Grugno o Empatori') {
		mutazioneClade1 = pickRandom(mutazioniMaglioGrugno1).name;
		$('#mutazioneClade1').text(mutazioneClade1);
		mutazioneClade2 = pickRandom(mutazioniMaglioGrugno2).name;
		$('#mutazioneClade2').text(mutazioneClade2);
	} else 	if  (pickedClade === 'Sguscia-Spina o Adombrati') {
		mutazioneClade1 = pickRandom(mutazioniSgusciaSpina1).name;
		$('#mutazioneClade1').text(mutazioneClade1);
		$('#mutazioneClade2').text("nope");
	} else {
		$('#mutazioneClade1').text("nope");
		$('#mutazioneClade2').text("nope");
	}

	$(".slot").addClass('slotSemiAccesa')
	$(".slot").addClass('slotAccesa')
	$("td:contains('Nessuna Mutazione') .cerchio").removeClass('slotAccesa')
	$("td:contains('Nessuna Mutazione') .cerchio").addClass('slotSemiAccesa')
	$("td:contains('nope') .cerchio").removeClass('slotAccesa')
	$("td:contains('nope') .cerchio").removeClass('slotSemiAccesa')
	$("p1:contains('nope')").html(' &nbsp ')
}

//DEFINIZIONE SESSO

function printSex () {

	if ((mutazione1 === "Ermafrodita") || (mutazione2 === "Ermafrodita") || (mutazione3 === "Ermafrodita") || (mutazione4 === "Ermafrodita")) {
		pickedAttribuzione = pickRandom(attribuzione).name;
		$("#sex").text(pickedAttribuzione);
		pickedSex = false;
	} else {
		pickedSex = pickRandom(sex).name;
		$("#sex").text(pickedSex);
		pickedAttribuzione = false;
	}
}

//DEFINIZIONE PRONOME

function printPronome () {
		if ((pickedSex === 'Femmina') || (pickedAttribuzione === 'Attribuita Femmina')) {
			pickedPronome = 'Femminile'
			$("#pronome").text(pickedPronome);
		} else if ((pickedSex === 'Maschio') || (pickedAttribuzione === 'Attribuito Maschio')) {
			pickedPronome = 'Maschile'
			$("#pronome").text(pickedPronome);
		} else {
			pickedPronome = ''
			$("#pronome").text(pickedPronome);
		}
}

//DEFINIZIONE SESSO GENITORI
function printSessoGenitori () {
	if (pickedClade === 'Enclave Sanakee') {
		var pickedSessoGenitore1 = pickRandom(sessoGenitoreSanakee1).name;
		$("#sessoGenitore1").text(pickedSessoGenitore1);

		var pickedSessoGenitore2 = pickRandom(sessoGenitoreSanakee2).name;
		$("#sessoGenitore2").text(pickedSessoGenitore2);

		var pickedSessoGenitore3 = pickRandom(sessoGenitoreSanakee3).name;
		$("#sessoGenitore3").text(pickedSessoGenitore3);

		if (pickedSessoGenitore3 !== 'Falso') {
			var pickedSessoGenitore4 = pickRandom(sessoGenitoreSanakee4).name;
			$("#sessoGenitore4").text(pickedSessoGenitore4);
		} else {
			var pickedSessoGenitore4 = 'Falso';
		}

		if (pickedSessoGenitore4 !== 'Falso') {
			var pickedSessoGenitore5 = pickRandom(sessoGenitoreSanakee5).name;
			$("#sessoGenitore5").text(pickedSessoGenitore5);
		} else {
			var pickedSessoGenitore5 = 'Falso';
		}

		if (pickedSessoGenitore5 !== 'Falso') {
			var pickedSessoGenitore6 = pickRandom(sessoGenitoreSanakee6).name;
			$("#sessoGenitore6").text(pickedSessoGenitore6);
		} else {
			var pickedSessoGenitore6 = 'Falso';
		}

	} else {
		var pickedSessoGenitore1 = pickRandom(sessoGenitore1).name;
		$("#sessoGenitore1").text(pickedSessoGenitore1);

		var pickedSessoGenitore2 = pickRandom(sessoGenitore2).name;
		$("#sessoGenitore2").text(pickedSessoGenitore2);

		var pickedSessoGenitore3 = pickRandom(sessoGenitore3).name;
		$("#sessoGenitore3").text(pickedSessoGenitore3);

		if (pickedSessoGenitore3 !== 'Falso') {
			var pickedSessoGenitore4 = pickRandom(sessoGenitore4).name;
			$("#sessoGenitore4").text(pickedSessoGenitore4);
		} else {
			var pickedSessoGenitore4 = 'Falso';
		}

		if (pickedSessoGenitore4 !== 'Falso') {
			var pickedSessoGenitore5 = pickRandom(sessoGenitore5).name;
			$("#sessoGenitore5").text(pickedSessoGenitore5);
		} else {
			var pickedSessoGenitore5 = 'Falso';
		}

		if (pickedSessoGenitore5 !== 'Falso') {
			var pickedSessoGenitore6 = pickRandom(sessoGenitore6).name;
			$("#sessoGenitore6").text(pickedSessoGenitore6);
		} else {
			var pickedSessoGenitore6 = 'Falso';
		}
	}

	if (pickedSessoGenitore3 === 'Falso') {
		$('#casellaGenitore3').fadeOut(0);
	} else {
		$('#casellaGenitore3').fadeIn(0);
	}

	if (pickedSessoGenitore4 === 'Falso') {
		$('#casellaGenitore4').fadeOut(0);
	} else {
		$('#casellaGenitore4').fadeIn(0);
	}

	if (pickedSessoGenitore5 === 'Falso') {
		$('#casellaGenitore5').fadeOut(0);
	} else {
		$('#casellaGenitore5').fadeIn(0);
	}

	if (pickedSessoGenitore6 === 'Falso') {
		$('#casellaGenitore6').fadeOut(0);
	} else {
		$('#casellaGenitore6').fadeIn(0);
	}
}

//DEFINIZIONE STATUS GENITORI

function printStatusGenitori () {

	if ((pickedClade === 'De Medici') ||
		(pickedClade === 'Maglio-Grugno o Empatori') ||
		(pickedClade === 'Nobili') ||
		(pickedClade === 'Senza-Clade di Nuova Milano')) {
		pickedStatusGenitori = pickRandom(statusGenitoreG1).name;
		$("#statusGenitore1").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG1).name;
		$("#statusGenitore2").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG1).name;
		$("#statusGenitore3").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG1).name;
		$("#statusGenitore4").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG1).name;
		$("#statusGenitore5").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG1).name;
		$("#statusGenitore6").text(pickedStatusGenitori);
	} else if ((pickedClade === 'Adriatica') ||
		(pickedClade === 'Antonica') ||
		(pickedClade === 'Bios') ||
		(pickedClade === 'Butteri') ||
		(pickedClade === 'Chup Lay') ||
		(pickedClade === 'Darbón') ||
		(pickedClade === 'De Lauzi') ||
		(pickedClade === 'Fermiorrí') ||
		(pickedClade === 'Garta') ||
		(pickedClade === 'Il Comune') ||
		(pickedClade === 'Kaisha') ||
		(pickedClade === 'Limes') ||
		(pickedClade === 'Mercandé') ||
		(pickedClade === 'Ottieri') ||
		(pickedClade === 'Proxima') ||
		(pickedClade === 'Rarama') ||
		(pickedClade === 'Será') ||
		(pickedClade === 'Trojka') ||
		(pickedClade === 'Whitecollar')) {
		pickedStatusGenitori = pickRandom(statusGenitoreG2).name;
		$("#statusGenitore1").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG2).name;
		$("#statusGenitore2").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG2).name;
		$("#statusGenitore3").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG2).name;
		$("#statusGenitore4").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG2).name;
		$("#statusGenitore5").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG2).name;
		$("#statusGenitore6").text(pickedStatusGenitori);
	} else if ((pickedClade === 'Affamati') ||
		(pickedClade === 'Arcologica') ||
		(pickedClade === 'Balalaika') ||
		(pickedClade === 'Eleuthera Nike') ||
		(pickedClade === 'Favelas') ||
		(pickedClade === 'Grimaldi-Kunna') ||
		(pickedClade === 'Gondolieri United') ||
		(pickedClade === 'Il Valico') ||
		(pickedClade === 'Clade Nomadi') ||
		(pickedClade === 'Officina 52') ||
		(pickedClade === 'Pavan') ||
		(pickedClade === 'Pirati del Cielo') ||
		(pickedClade === 'Potujo') ||
		(pickedClade === 'Revicto') ||
		(pickedClade === 'Sguscia-Spina o Adombrati') ||
		(pickedClade === 'Sotho') ||
		(pickedClade === 'Waste Recovery')) {
		pickedStatusGenitori = pickRandom(statusGenitoreG3).name;
		$("#statusGenitore1").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG3).name;
		$("#statusGenitore2").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG3).name;
		$("#statusGenitore3").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG3).name;
		$("#statusGenitore4").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG3).name;
		$("#statusGenitore5").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG3).name;
		$("#statusGenitore6").text(pickedStatusGenitori);
	} else if ((pickedClade === 'Black Doctors') ||
		(pickedClade === 'Chianura') ||
		(pickedClade === 'Chrome') ||
		(pickedClade === 'Ciurma di Mr. Whang') ||
		(pickedClade === 'Dégagé') ||
		(pickedClade === 'Il Branco') ||
		(pickedClade === 'Lucente') ||
		(pickedClade === 'Enea') ||
				(pickedClade === 'Morgana') ||
						(pickedClade === 'Leonardo') ||
						(pickedClade === 'Senza-Clade, Solar Punk') ||
										(pickedClade === 'Senza-Clade, Rosari') ||
		(pickedClade === 'Napadači') ||
		(pickedClade === 'Senza-Clade') ||
		(pickedClade === 'Seizon-sha (Extraparlamentari)') ||
		(pickedClade === 'Sepulcrea') ||
		(pickedClade === 'Steamkiller') ||
		(pickedClade === 'Total Arcology 13')) {
		pickedStatusGenitori = pickRandom(statusGenitoreG4).name;
		$("#statusGenitore1").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG4).name;
		$("#statusGenitore2").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG4).name;
		$("#statusGenitore3").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG4).name;
		$("#statusGenitore4").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG4).name;
		$("#statusGenitore5").text(pickedStatusGenitori);
		pickedStatusGenitori = pickRandom(statusGenitoreG4).name;
		$("#statusGenitore6").text(pickedStatusGenitori);
	} else {
		$("#statusGenitore1").text('');
	}
}


//DEFINIZIONE FRATELLI E SORELLE

function printFratelliSorelle () {

	if ((pickedClade === 'Bios') ||
		(pickedClade === 'Black Doctors') ||
		(pickedClade === 'De Medici') ||
		(pickedClade === 'Maglio-Grugno o Empatori') ||
		(pickedClade === 'Enea') ||
				(pickedClade === 'Morgana') ||
						(pickedClade === 'Leonardo') ||
						(pickedClade === 'Senza-Clade, Solar Punk') ||
										(pickedClade === 'Senza-Clade, Rosari') ||
		(pickedClade === 'Senza-Clade di Nuova Milano') ||
		(pickedClade === 'Sguscia-Spina o Adombrati') ||
		(pickedClade === 'Whitecollar')) {
		pickedFratelliSorelle = pickRandom(fratelliSorelleG1).name;
		$("#fratelliSorelle").text(pickedFratelliSorelle);
	} else if ((pickedClade === 'Adriatica') ||
		(pickedClade === 'Balalaika') ||
		(pickedClade === 'Chianura') ||
		(pickedClade === 'Chrome') ||
		(pickedClade === 'Ciurma di Mr. Whang') ||
		(pickedClade === 'Darbón') ||
		(pickedClade === 'Eleuthera Nike') ||
		(pickedClade === 'Enclave Sanakee') ||
		(pickedClade === 'Kaisha') ||
		(pickedClade === 'Limes') ||
		(pickedClade === 'Mercandé') ||
		(pickedClade === 'Napadači') ||
		(pickedClade === 'Nobili') ||
		(pickedClade === 'Potujo') ||
		(pickedClade === 'Proxima') ||
		(pickedClade === 'Será') ||
		(pickedClade === 'Trojka') ||
		(pickedClade === 'Waste Recovery')) {
		pickedFratelliSorelle = pickRandom(fratelliSorelleG2).name;
		$("#fratelliSorelle").text(pickedFratelliSorelle);
	} else if ((pickedClade === 'Affamati') ||
		(pickedClade === 'Antonica') ||
		(pickedClade === 'Butteri') ||
		(pickedClade === 'Dégagé') ||
		(pickedClade === 'De Lauzi') ||
		(pickedClade === 'Fermiorrí') ||
		(pickedClade === 'Garta') ||
		(pickedClade === 'Grimaldi-Kunna') ||
		(pickedClade === 'Gondolieri United') ||
		(pickedClade === 'Il Comune') ||
		(pickedClade === 'Il Valico') ||
		(pickedClade === 'Lucente') ||
		(pickedClade === 'Clade Nomadi') ||
		(pickedClade === 'Ottieri') ||
		(pickedClade === 'Pavan') ||
		(pickedClade === 'Pirati del Cielo') ||
		(pickedClade === 'Rarama') ||
		(pickedClade === 'Senza-Clade') ||
		(pickedClade === 'Sepulcrea') ||
		(pickedClade === 'Sotho') ||
		(pickedClade === 'Senza-Clade di Nuova Milano') ||
		(pickedClade === 'Steamkiller') ||
		(pickedClade === 'Total Arcology 13')) {
		pickedFratelliSorelle = pickRandom(fratelliSorelleG3).name;
		$("#fratelliSorelle").text(pickedFratelliSorelle);
	} else if ((pickedClade === 'Arcologica') ||
		(pickedClade === 'Chup Lay') ||
		(pickedClade === 'Favelas') ||
		(pickedClade === 'Il Branco') ||
		(pickedClade === 'Officina 52') ||
		(pickedClade === 'Revicto')) {
		pickedFratelliSorelle = pickRandom(fratelliSorelleG4).name;
		$("#fratelliSorelle").text(pickedFratelliSorelle);
	} else {
		$("#fratelliSorelle").text('');
	}
}

//DEFINIZIONE NOME

var nomi = [];
function printPrimoNome () {

	// Vaticano & Revicto / Nobili / Sepulcrea

	if ((pickedPronome === 'Femminile')
		&& ((pickedClade === 'Revicto') || (pickedClade === 'Nobili') || (pickedClade === 'Sepulcrea'))) {

		nomi = nomi.concat(nome30VaticanoRevictoNobiliSepulcreaFemminile, nome30VaticanoRevictoNobiliSepulcreaFemminile, nome30VaticanoRevictoNobiliSepulcreaFemminile, nome30VaticanoRevictoNobiliSepulcreaFemminile, nome70VaticanoRevictoNobiliSepulcreaFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& ((pickedClade === 'Revicto') || (pickedClade === 'Nobili') || (pickedClade === 'Sepulcrea'))) {

		nomi = nomi.concat(nome30VaticanoRevictoNobiliSepulcreaMaschile, nome30VaticanoRevictoNobiliSepulcreaMaschile, nome30VaticanoRevictoNobiliSepulcreaMaschile, nome30VaticanoRevictoNobiliSepulcreaMaschile, nome70VaticanoRevictoNobiliSepulcreaMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per insediamenti gruppo 1 (Territorio Potatoes Acchiove, ...)

	else if ((
		(pickedInsediamento === 'Territorio Potatoes Acchiove') ||
		(pickedInsediamento === 'Sede della Coppering Spa') ||
		(pickedInsediamento === 'Sede Biloba Rice Corp.') ||
		(pickedInsediamento === 'Cererea') ||
		(pickedInsediamento === 'QG della Hayadesu Colza') ||
		(pickedInsediamento === 'Sede della Felce Felice Corp.') ||
		(pickedInsediamento === 'Ranch Qaspe&Choombatta') ||
		(pickedInsediamento === 'Venezia – Isola di Sant\'Erasmo, Brodetto Corp.')) &&
		(pickedPronome === 'Femminile')
	   ) {
		pickedPrimoNome = nomePerInsediamentiFemminile1[Math.floor(Math.random() * nomePerInsediamentiFemminile1.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	} else 	if ((
		(pickedInsediamento === 'Territorio Potatoes Acchiove') ||
		(pickedInsediamento === 'Sede della Coppering Spa') ||
		(pickedInsediamento === 'Sede Biloba Rice Corp.') ||
		(pickedInsediamento === 'Cererea') ||
		(pickedInsediamento === 'QG della Hayadesu Colza') ||
		(pickedInsediamento === 'Sede della Felce Felice Corp.') ||
		(pickedInsediamento === 'Ranch Qaspe&Choombatta') ||
		(pickedInsediamento === 'Venezia – Isola di Sant\'Erasmo, Brodetto Corp.')) &&
		(pickedPronome === 'Maschile')
		) {
		pickedPrimoNome = nomePerInsediamentiMaschile1[Math.floor(Math.random() * nomePerInsediamentiMaschile1.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per insediamenti gruppo 2 (Accampamento Predonico de Il Branco nella Veljutria, ...)

	else if ((
		(pickedInsediamento === 'Accampamento Predonico de Il Branco nella Veljutria') ||
		(pickedInsediamento === 'Accampamento Predonico de Il Branco nella PianaMagna') ||
		(pickedInsediamento === 'Accampamento Predonico de Il Branco nella SfiataPiana') ||
		(pickedInsediamento === 'Accampamento Predonico de Il Branco nell\'Entroterra Adriatico') ||
		(pickedInsediamento === 'Accampamento Predonico de Il Branco nell\'UrboStesa') ||
		(pickedInsediamento === 'Accampamento Predonico de Il Branco nel BrulBreccia') ||
		(pickedInsediamento === 'Accampamento Predonico ne I Feudi dell\'Ovest') ||
		(pickedInsediamento === 'Accampamento Predonico nel Dominio Trojka') ||
		(pickedInsediamento === 'Accampamento Predonico nella Veljutria') ||
		(pickedInsediamento === 'Accampamento Predonico nella SfiataPiana') ||
		(pickedInsediamento === 'Accampamento Predonico nell\'UrboStesa, Appartamento Occupato') ||
		(pickedInsediamento === 'Accampamento Predonico nella PianaMagna') ||
		(pickedInsediamento === 'Accampamento Predonico nel BrulBreccia') ||
		(pickedInsediamento === 'Accampamento Predonico sulla FondaCosta') ||
		(pickedInsediamento === 'Accampamento Predonico in Adriatica, Arcologia Occupata') ||
		(pickedInsediamento === 'Carovana Predonica nella SfiataPiana') ||
		(pickedInsediamento === 'Carovana Predonica nella PianaMagna') ||
		(pickedInsediamento === 'Carovana Predonica nel BrulBreccia') ||
		(pickedInsediamento === 'Carovana Predonica nell\'UrboStesa') ||
		(pickedInsediamento === 'Accampamento Predonico nell\'Entroterra Adriatico')) &&
		(pickedPronome === 'Femminile')
	   ) {
		pickedPrimoNome = nomePerInsediamentiFemminile2[Math.floor(Math.random() * nomePerInsediamentiFemminile2.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	} else 	if ((
		(pickedInsediamento === 'Accampamento Predonico de Il Branco nella Veljutria') ||
		(pickedInsediamento === 'Accampamento Predonico de Il Branco nella PianaMagna') ||
		(pickedInsediamento === 'Accampamento Predonico de Il Branco nella SfiataPiana') ||
		(pickedInsediamento === 'Accampamento Predonico de Il Branco nell\'Entroterra Adriatico') ||
		(pickedInsediamento === 'Accampamento Predonico de Il Branco nell\'UrboStesa') ||
		(pickedInsediamento === 'Accampamento Predonico de Il Branco nella BrulBreccia') ||
		(pickedInsediamento === 'Accampamento Predonico ne I Giupa dell\'Ovest') ||
		(pickedInsediamento === 'Accampamento Predonico nel Dominio Trojka') ||
		(pickedInsediamento === 'Accampamento Predonico nella Veljutria') ||
		(pickedInsediamento === 'Accampamento Predonico nella SfiataPiana') ||
		(pickedInsediamento === 'Accampamento Predonico nell\'UrboStesa, Appartamento Occupato') ||
		(pickedInsediamento === 'Accampamento Predonico nella PianaMagna') ||
		(pickedInsediamento === 'Accampamento Predonico nel BrulBreccia') ||
		(pickedInsediamento === 'Accampamento Predonico sulla FondaCosta') ||
		(pickedInsediamento === 'Accampamento Predonico in Adriatica, Arcologia Occupata') ||
		(pickedInsediamento === 'Carovana Predonica nella SfiataPiana') ||
		(pickedInsediamento === 'Carovana Predonica nella PianaMagna') ||
		(pickedInsediamento === 'Carovana Predonica nel BrulBreccia') ||
		(pickedInsediamento === 'Carovana Predonica nell\'UrboStesa') ||
		(pickedInsediamento === 'Accampamento Predonico nell\'Entroterra Adriatico')) &&
		(pickedPronome === 'Maschile')
		) {
		pickedPrimoNome = nomePerInsediamentiMaschile2[Math.floor(Math.random() * nomePerInsediamentiMaschile2.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per insediamenti gruppo 3 (Nei pressi degli Storage – Nato/a per Mare, ...)

	else if ((
		(pickedInsediamento === 'Nei pressi degli Storage di Adriatica – Nato/a per Mare') ||
		(pickedInsediamento === 'Nei pressi della Costa Slava – Nato/a per Mare') ||
		(pickedInsediamento === 'Nei pressi della Costa Adriatica – Nato/a per Mare') ||
		(pickedInsediamento === 'Nei pressi degli Insediamenti Eleuthera – Nato/a per Mare') ||
		(pickedInsediamento === 'Nei pressi di Venezia – Nato/a per Mare')) &&
		(pickedPronome === 'Femminile')
	   ) {
		pickedPrimoNome = nomePerInsediamentiFemminile3[Math.floor(Math.random() * nomePerInsediamentiFemminile3.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	} else 	if ((
		(pickedInsediamento === 'Nel Canal Grande – Nato/a in Rio') ||
		(pickedInsediamento === 'Nello Spacco-Rio – Nato/a in Rio') ||
		(pickedInsediamento === 'Nei pressi della Laguna – Nato/a in Laguna')) &&
		(pickedPronome === 'Maschile')
		) {
		pickedPrimoNome = nomePerInsediamentiMaschile3[Math.floor(Math.random() * nomePerInsediamentiMaschile3.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per insediamenti gruppo 4 (Nel Canal Grande - Nato/a in Rio, ...)

	else if ((
		(pickedInsediamento === 'Nel Canal Grande – Nato/a in Rio') ||
		(pickedInsediamento === 'Nello Spacco-Rio – Nato/a in Rio') ||
		(pickedInsediamento === 'Nei pressi della Laguna – Nato/a in Laguna')) &&
		(pickedPronome === 'Femminile')
	   ) {
		pickedPrimoNome = nomePerInsediamentiFemminile4[Math.floor(Math.random() * nomePerInsediamentiFemminile4.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	} else 	if ((
		(pickedInsediamento === 'Nel Canal Grande – Nato/a in Rio') ||
		(pickedInsediamento === 'Nello Spacco-Rio – Nato/a in Rio') ||
		(pickedInsediamento === 'Nei pressi della Laguna – Nato/a in Laguna')) &&
		(pickedPronome === 'Maschile')
		) {
		pickedPrimoNome = nomePerInsediamentiMaschile4[Math.floor(Math.random() * nomePerInsediamentiMaschile4.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// per insediamenti (Pordeno - Campi di prigionia, ...)

	else if ((
		(pickedInsediamento === 'Pordeno – Campi di Prigionia Pavan') ||
		(pickedInsediamento === 'Sossàn – Campi di Prigionia Pavan')) &&
		(pickedPronome === 'Femminile')
	   ) {
		pickedPrimoNome = 'Foresta' + [Math.floor(Math.random() * 1000000)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	} else 	if ((
		(pickedInsediamento === 'Pordeno – Campi di Prigionia Pavan') ||
		(pickedInsediamento === 'Sossàn – Campi di Prigionia Pavan')) &&
		(pickedPronome === 'Maschile')
	   ) {
		pickedPrimoNome = 'Foresto' + [Math.floor(Math.random() * 1000000)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per insediamenti gruppo 5 (Su un Dirigibile Pirata nella Veljutria – Nato/a in Volo, ...)

	else if ((
		(pickedInsediamento === 'Su un Dirigibile Pirata nella Veljutria – Nato/a in Volo') ||
		(pickedInsediamento === 'Su un Dirigibile Pirata nella Pianura del Gemito – Nato/a in Volo') ||
		(pickedInsediamento === 'Su un Dirigibile Pirata a Fiorenza di Frontiera – Nato/a in Volo') ||
		(pickedInsediamento === 'Su un Dirigibile Pirata nella Regione Adriatica – Nato/a in Volo') ||
		(pickedInsediamento === 'Su un Dirigibile Pirata nelle Clade Slave – Nato/a in Volo')) &&
		(pickedPronome === 'Femminile')
	   ) {
		pickedPrimoNome = nomePerInsediamentiFemminile5[Math.floor(Math.random() * nomePerInsediamentiFemminile5.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	} else 	if ((
		(pickedInsediamento === 'Su un Dirigibile Pirata nella Veljutria – Nato/a in Volo') ||
		(pickedInsediamento === 'Su un Dirigibile Pirata nella Pianura del Gemito – Nato/a in Volo') ||
		(pickedInsediamento === 'Su un Dirigibile Pirata a Fiorenza di Frontiera – Nato/a in Volo') ||
		(pickedInsediamento === 'Su un Dirigibile Pirata nella Regione Adriatica – Nato/a in Volo') ||
		(pickedInsediamento === 'Su un Dirigibile Pirata nelle Clade Slave – Nato/a in Volo')) &&
		(pickedPronome === 'Maschile')
		) {
		pickedPrimoNome = nomePerInsediamentiMaschile5[Math.floor(Math.random() * nomePerInsediamentiMaschile5.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per insediamenti gruppo 6 (Nato/a tra i Vassoura – Nei pressi de Il Casteo, ...)

	else if ((
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi de Il Casteo') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi de La Muraglia') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi de La Forra') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi dell\'Isola d\'Ariano') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi dell\'Isola della Donzella') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Codigoro') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi della Morgana Arcology 76') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi della Google Arcology 6') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Mission') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Project') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Goal') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Gorcio') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Dynamo') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Diggin City') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Cuor Metano') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Springfield Private') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Aqui Nove') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Alba Nova') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nella SfiataPiana') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nella Veljutria') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nell\'UrboStesa') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nel BrulBreccia') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nella PianaMagna')) &&
		(pickedPronome === 'Femminile')
	   ) {
		pickedPrimoNome = nomePerInsediamentiFemminile6[Math.floor(Math.random() * nomePerInsediamentiFemminile6.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	} else 	if ((
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi de Il Casteo') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi de La Muraglia') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi de La Forra') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi dell\'Isola d\'Ariano') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi dell\'Isola della Donzella') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Codigoro') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi della Morgana Arcology 76') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi della Google Arcology 6') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Mission') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Project') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Goal') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Gorcio') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Dynamo') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Diggin City') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Cuor Metano') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Springfield Private') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Aqui Nove') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nei pressi di Alba Nova') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nella SfiataPiana') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nella Veljutria') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nell\'UrboStesa') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nel BrulBreccia') ||
		(pickedInsediamento === 'Nato/a tra i Vassoura – Nella PianaMagna')) &&
		(pickedPronome === 'Maschile')
		) {
		pickedPrimoNome = nomePerInsediamentiMaschile6[Math.floor(Math.random() * nomePerInsediamentiMaschile6.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

// -------------------------------------------FINE ECCEZIONI-------------------------------------------------------
	// Per clade Adriatica

	else if ((pickedClade === 'Adriatica') &&
		(pickedPronome === 'Femminile')
	   ) {
		pickedPrimoNome = nomeAdriaticaFemminile[Math.floor(Math.random() * nomeAdriaticaFemminile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	} else 	if ((pickedClade === 'Adriatica') &&
		(pickedPronome === 'Maschile')
	   ) {
		pickedPrimoNome = nomeAdriaticaMaschile[Math.floor(Math.random() * nomeAdriaticaMaschile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per clade Affamati

	else if ((pickedClade === 'Affamati') &&
		(pickedPronome === 'Femminile')
	   ) {
		pickedPrimoNome = nomeAffamatiFemminile[Math.floor(Math.random() * nomeAffamatiFemminile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	} else 	if ((pickedClade === 'Affamati') &&
		(pickedPronome === 'Maschile')
	   ) {
		pickedPrimoNome = nomeAffamatiMaschile[Math.floor(Math.random() * nomeAffamatiMaschile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per clade Antonica

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Antonica')) {

		nomi = nomi.concat(nome30AntonicaFemminile, nome30AntonicaFemminile, nome30AntonicaFemminile, nome70AntonicaFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'Antonica')) {

		nomi = nomi.concat(nome30AntonicaMaschile, nome30AntonicaMaschile, nome30AntonicaMaschile, nome70AntonicaMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Arcologica/Ottieri/Whitecollar

	else if ((pickedPronome === 'Femminile')
		&& ((pickedClade === 'Arcologica') ||
		(pickedClade === 'Senza-Clade, Solar Punk') ||
						(pickedClade === 'Senza-Clade, Rosari') ||
			(pickedClade === 'Ottieri') ||
			(pickedClade === 'Whitecollar'))) {

		nomi = nomi.concat(nome30ArcologicaOttieriWhitecollarFemminile, nome30ArcologicaOttieriWhitecollarFemminile, nome30ArcologicaOttieriWhitecollarFemminile, nome30ArcologicaOttieriWhitecollarFemminile, nome70ArcologicaOttieriWhitecollarFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& ((pickedClade === 'Arcologica') ||
			(pickedClade === 'Ottieri') ||
			(pickedClade === 'Senza-Clade, Solar Punk') ||
				(pickedClade === 'Senza-Clade, Rosari') ||
			(pickedClade === 'Whitecollar'))) {

		nomi = nomi.concat(nome30ArcologicaOttieriWhitecollarMaschile, nome30ArcologicaOttieriWhitecollarMaschile, nome30ArcologicaOttieriWhitecollarMaschile, nome30ArcologicaOttieriWhitecollarMaschile, nome70ArcologicaOttieriWhitecollarMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Balalaika/Trojka/Napadači/Sguscia-Spina o Adombrati

	else if ((pickedPronome === 'Femminile')
		&& ((pickedClade === 'Balalaika') ||
			(pickedClade === 'Trojka') ||
			(pickedClade === 'Napadači') ||
			(pickedClade === 'Sguscia-Spina o Adombrati'))) {

		nomi = nomi.concat(nome30BalalaikaTrojkaNapadaciSgusciaFemminile, nome30BalalaikaTrojkaNapadaciSgusciaFemminile, nome30BalalaikaTrojkaNapadaciSgusciaFemminile, nome30BalalaikaTrojkaNapadaciSgusciaFemminile, nome70BalalaikaTrojkaNapadaciSgusciaFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& ((pickedClade === 'Balalaika') ||
			(pickedClade === 'Trojka') ||
			(pickedClade === 'Napadači') ||
			(pickedClade === 'Sguscia-Spina o Adombrati'))) {

		nomi = nomi.concat(nome30BalalaikaTrojkaNapadaciSgusciaMaschile, nome30BalalaikaTrojkaNapadaciSgusciaMaschile, nome30BalalaikaTrojkaNapadaciSgusciaMaschile, nome30BalalaikaTrojkaNapadaciSgusciaMaschile, nome70BalalaikaTrojkaNapadaciSgusciaMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Black Doctors

	else if ((pickedClade === 'Black Doctors')
		&& (pickedPronome === 'Femminile')) {

		pickedPrimoNome = nomeBlackDoctorsFemminile[Math.floor(Math.random() * nomeBlackDoctorsFemminile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	} else 	if ((pickedClade === 'Black Doctors')
				&& (pickedPronome === 'Maschile')) {

		pickedPrimoNome = nomeBlackDoctorsMaschile[Math.floor(Math.random() * nomeBlackDoctorsMaschile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per clade Butteri / Limes

	else if ((pickedPronome === 'Femminile')
		&& ((pickedClade === 'Butteri') ||
			(pickedClade === 'Limes'))) {

		nomi = nomi.concat(nome30ButteriLimesFemminile, nome30ButteriLimesFemminile, nome30ButteriLimesFemminile, nome30ButteriLimesFemminile, nome70ButteriLimesFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& ((pickedClade === 'Butteri') ||
			(pickedClade === 'Limes'))) {

		nomi = nomi.concat(nome30ButteriLimesMaschile, nome30ButteriLimesMaschile, nome30ButteriLimesMaschile, nome30ButteriLimesMaschile, nome70ButteriLimesMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Chianura / Il Comune

	else if ((pickedPronome === 'Femminile')
		&& ((pickedClade === 'Chianura') ||
		(pickedClade === 'Il Comune'))) {

		nomi = nomi.concat(nome30ChianuraIlComuneFemminile, nome30ChianuraIlComuneFemminile, nome30ChianuraIlComuneFemminile, nome30ChianuraIlComuneFemminile, nome70ChianuraIlComuneFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& ((pickedClade === 'Chianura') ||
		(pickedClade === 'Il Comune'))) {

		nomi = nomi.concat(nome30ChianuraIlComuneMaschile, nome30ChianuraIlComuneMaschile, nome30ChianuraIlComuneMaschile, nome30ChianuraIlComuneMaschile, nome70ChianuraIlComuneMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Chup Lay

	else if ((pickedClade === 'Chup Lay') &&
		(pickedPronome === 'Femminile')) {
		pickedPrimoNome = nomeChupLayFemminile[Math.floor(Math.random() * nomeChupLayFemminile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;

	} else 	if ((pickedClade === 'Chup Lay') &&
		(pickedPronome === 'Maschile')) {
		pickedPrimoNome = nomeChupLayMaschile[Math.floor(Math.random() * nomeChupLayMaschile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per clade Ciurma di Mr. Whang

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Ciurma di Mr. Whang')) {

		nomi = nomi.concat(nome30CiurmaFemminile, nome30CiurmaFemminile, nome30CiurmaFemminile, nome30CiurmaFemminile, nome70CiurmaFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'Ciurma di Mr. Whang')) {

		nomi = nomi.concat(nome30CiurmaMaschile, nome30CiurmaMaschile, nome30CiurmaMaschile, nome30CiurmaMaschile, nome70CiurmaMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade De Lauzi

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'De Lauzi')) {

		nomi = nomi.concat(nome30DeLauziFemminile, nome30DeLauziFemminile, nome30DeLauziFemminile, nome30DeLauziFemminile, nome70DeLauziFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'De Lauzi')) {

		nomi = nomi.concat(nome30DeLauziMaschile, nome30DeLauziMaschile, nome30DeLauziMaschile, nome30DeLauziMaschile, nome70DeLauziMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade De Medici

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'De Medici')) {

		pickedPrimoNome = nomeDeMediciFemminile[Math.floor(Math.random() * nomeDeMediciFemminile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;

	} else 	if ((pickedClade === 'De Medici') &&
		(pickedPronome === 'Maschile')) {
		pickedPrimoNome = nomeDeMediciMaschile[Math.floor(Math.random() * nomeDeMediciMaschile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per clade Eleuthera Nike

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Eleuthera Nike')) {
		pickedPrimoNome = nomeEleutheraFemminile[Math.floor(Math.random() * nomeEleutheraFemminile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;

	} else 	if ((pickedClade === 'Eleuthera Nike') &&
		(pickedPronome === 'Maschile')) {
		pickedPrimoNome = nomeEleutheraMaschile[Math.floor(Math.random() * nomeEleutheraMaschile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per clade Favelas

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Favelas')) {

		nomi = nomi.concat(nome30FavelasFemminile, nome30FavelasFemminile, nome30FavelasFemminile, nome30FavelasFemminile, nome70FavelasFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'Favelas')) {

		nomi = nomi.concat(nome30FavelasMaschile, nome30FavelasMaschile, nome30FavelasMaschile, nome30FavelasMaschile, nome70FavelasMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Fermiorrí, Será, Darbón, Mercandé

	else if ((pickedPronome === 'Femminile')
		&& ((pickedClade === 'Fermiorrí') ||
		(pickedClade === 'Será') ||
		(pickedClade === 'Darbón') ||
		(pickedClade === 'Mercandé'))) {

		nomi = nomi.concat(nome30FermiorriSeraDarbonMercandeFemminile, nome30FermiorriSeraDarbonMercandeFemminile, nome30FermiorriSeraDarbonMercandeFemminile, nome30FermiorriSeraDarbonMercandeFemminile, nome70FermiorriSeraDarbonMercandeFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& ((pickedClade === 'Fermiorrí') ||
		(pickedClade === 'Será') ||
		(pickedClade === 'Darbón') ||
		(pickedClade === 'Mercandé'))) {

		nomi = nomi.concat(nome30FermiorriSeraDarbonMercandeMaschile, nome30FermiorriSeraDarbonMercandeMaschile, nome30FermiorriSeraDarbonMercandeMaschile, nome30FermiorriSeraDarbonMercandeMaschile, nome70FermiorriSeraDarbonMercandeMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Garta

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Garta')) {

		nomi = nomi.concat(nome30GartaFemminile, nome30GartaFemminile, nome30GartaFemminile, nome30GartaFemminile, nome70GartaFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'Garta')) {

		nomi = nomi.concat(nome30GartaMaschile, nome30GartaMaschile, nome30GartaMaschile, nome30GartaMaschile, nome70GartaMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Grimaldi-Kunna

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Grimaldi-Kunna')) {

		nomi = nomi.concat(nome30GrimaldiFemminile, nome30GrimaldiFemminile, nome30GrimaldiFemminile, nome30GrimaldiFemminile, nome70GrimaldiFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'Grimaldi-Kunna')) {

		nomi = nomi.concat(nome30GrimaldiMaschile, nome30GrimaldiMaschile, nome30GrimaldiMaschile, nome30GrimaldiMaschile, nome70GrimaldiMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Godfather

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Godfather')) {
		pickedPrimoNome = nomeGodfatherFemminile[Math.floor(Math.random() * nomeGodfatherFemminile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;

	} else 	if ((pickedClade === 'Godfather') &&
		(pickedPronome === 'Maschile')) {
		pickedPrimoNome = nomeGodfatherMaschile[Math.floor(Math.random() * nomeGodfatherMaschile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per clade Gondolieri United

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Gondolieri United')) {

		nomi = nomi.concat(nome30GondolieriFemminile, nome30GondolieriFemminile, nome30GondolieriFemminile, nome30GondolieriFemminile, nome70GondolieriFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'Gondolieri United')) {

		nomi = nomi.concat(nome30GondolieriMaschile, nome30GondolieriMaschile, nome30GondolieriMaschile, nome30GondolieriMaschile, nome70GondolieriMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Il Branco

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Il Branco')) {

		nomi = nomi.concat(nome30IlBrancoFemminile, nome30IlBrancoFemminile, nome30IlBrancoFemminile, nome30IlBrancoFemminile, nome70IlBrancoFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'Il Branco')) {

		nomi = nomi.concat(nome30IlBrancoMaschile, nome30IlBrancoMaschile, nome30IlBrancoMaschile, nome30IlBrancoMaschile, nome70IlBrancoMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Il Valico

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Il Valico')) {

		nomi = nomi.concat(nome30IlValicoFemminile, nome30IlValicoFemminile, nome30IlValicoFemminile, nome30IlValicoFemminile, nome70IlValicoFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'Il Valico')) {

		nomi = nomi.concat(nome30IlValicoMaschile, nome30IlValicoMaschile, nome30IlValicoMaschile, nome30IlValicoMaschile, nome70IlValicoMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Kaisha

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Kaisha')) {

		nomi = nomi.concat(nome30KaishaFemminile, nome30KaishaFemminile, nome30KaishaFemminile, nome30KaishaFemminile, nome70KaishaFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'Kaisha')) {

		nomi = nomi.concat(nome30KaishaMaschile, nome30KaishaMaschile, nome30KaishaMaschile, nome30KaishaMaschile, nome70KaishaMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Lucente

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Lucente')) {
		pickedPrimoNome = nomeLucenteFemminile[Math.floor(Math.random() * nomeLucenteFemminile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;

	} else 	if ((pickedClade === 'Lucente') &&
		(pickedPronome === 'Maschile')) {
		pickedPrimoNome = nomeLucenteMaschile[Math.floor(Math.random() * nomeLucenteMaschile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per clade Maglio-Grugno o Empatori

	else if (((pickedPronome === 'Femminile') || (pickedPronome === 'Maschile'))
		&& (pickedClade === 'Maglio-Grugno o Empatori')) {
		pickedPrimoNome = nomeEmpatoriFemminileMaschile[Math.floor(Math.random() * nomeEmpatoriFemminileMaschile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;

	}

	// Per clade Officina 52 / Pavan

	else if ((pickedPronome === 'Femminile')
		&& ((pickedClade === 'Officina 52') ||
		(pickedClade === 'Pavan'))) {

		nomi = nomi.concat(nome30OfficinaPavanFemminile, nome30OfficinaPavanFemminile, nome30OfficinaPavanFemminile, nome30OfficinaPavanFemminile, nome70OfficinaPavanFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& ((pickedClade === 'Officina 52') ||
		(pickedClade === 'Pavan'))) {

		nomi = nomi.concat(nome30OfficinaPavanMaschile, nome30OfficinaPavanMaschile, nome30OfficinaPavanMaschile, nome30OfficinaPavanMaschile, nome70OfficinaPavanMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Pirati del Cielo

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Pirati del Cielo')) {

		nomi = nomi.concat(nome30PiratiFemminile, nome30PiratiFemminile, nome30PiratiFemminile, nome30PiratiFemminile, nome70PiratiFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'Pirati del Cielo')) {

		nomi = nomi.concat(nome30PiratiMaschile, nome30PiratiMaschile, nome30PiratiMaschile, nome30PiratiMaschile, nome70PiratiMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Proxima

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Proxima')) {
		pickedPrimoNome = nomeProximaFemminile[Math.floor(Math.random() * nomeProximaFemminile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;

	} else 	if ((pickedClade === 'Proxima') &&
		(pickedPronome === 'Maschile')) {
		pickedPrimoNome = nomeProximaMaschile[Math.floor(Math.random() * nomeProximaMaschile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per clade Rarama / Sotho

	else if ((pickedPronome === 'Femminile')
		&& ((pickedClade === 'Rarama') ||
		(pickedClade === 'Sotho'))) {

		nomi = nomi.concat(nome30RaramaSothoFemminile, nome30RaramaSothoFemminile, nome30RaramaSothoFemminile, nome30RaramaSothoFemminile, nome70RaramaSothoFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& ((pickedClade === 'Rarama') ||
		(pickedClade === 'Sotho'))) {

		nomi = nomi.concat(nome30RaramaSothoMaschile, nome30RaramaSothoMaschile, nome30RaramaSothoMaschile, nome30RaramaSothoMaschile, nome70RaramaSothoMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade della Pa-tuh

	else if ((pickedPronome === 'Femminile')
		&& ((pickedClade === 'Senza-Clade Antisolazionisti della Pa-tuh') ||
		(pickedClade === 'Senza-Clade Filogovernativi della Pa-tuh') ||
		(pickedClade === 'Senza-Clade della Salaf – Pa-tuh'))) {

		nomi = nomi.concat(nome30PatuhFemminile, nome30PatuhFemminile, nome30PatuhFemminile, nome30PatuhFemminile, nome70PatuhFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
	&& ((pickedClade === 'Senza-Clade Antisolazionisti della Pa-tuh') ||
	(pickedClade === 'Senza-Clade Filogovernativi della Pa-tuh') ||
	(pickedClade === 'Senza-Clade della Salaf – Pa-tuh'))) {

		nomi = nomi.concat(nome30PatuhMaschile, nome30PatuhMaschile, nome30PatuhMaschile, nome30PatuhMaschile, nome70PatuhMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade della Seizon-sha / Total Arcology 13 / Steamkiller

	else if ((pickedPronome === 'Femminile')
		&& ((pickedClade === 'Seizon-sha (Extraparlamentari)') ||
		(pickedClade === 'Total Arcology 13') ||
		(pickedClade === 'Steamkiller'))) {

		nomi = nomi.concat(nome30SeizonTotalSteamkillerFemminile, nome30SeizonTotalSteamkillerFemminile, nome30SeizonTotalSteamkillerFemminile, nome30SeizonTotalSteamkillerFemminile, nome70SeizonTotalSteamkillerFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
	&& ((pickedClade === 'Seizon-sha (Extraparlamentari)') ||
	(pickedClade === 'Total Arcology 13') ||
	(pickedClade === 'Steamkiller'))) {

		nomi = nomi.concat(nome30SeizonTotalSteamkillerMaschile, nome30SeizonTotalSteamkillerMaschile, nome30SeizonTotalSteamkillerMaschile, nome30SeizonTotalSteamkillerMaschile, nome70SeizonTotalSteamkillerMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Waste Recovery

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Waste Recovery')) {

		nomi = nomi.concat(nome30WasteFemminile, nome30WasteFemminile, nome30WasteFemminile, nome30WasteFemminile, nome70WasteFemminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'Waste Recovery')) {

		nomi = nomi.concat(nome30WasteMaschile, nome30WasteMaschile, nome30WasteMaschile, nome30WasteMaschile, nome70WasteMaschile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}

	// Per clade Chrome

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Chrome')) {
		pickedPrimoNome = nomeChromeFemminile[Math.floor(Math.random() * nomeChromeFemminile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;

	} else 	if ((pickedClade === 'Chrome') &&
		(pickedPronome === 'Maschile')) {
		pickedPrimoNome = nomeChromeMaschile[Math.floor(Math.random() * nomeChromeMaschile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per clade Enclave Sanakee

	else if (pickedClade === 'Enclave Sanakee') {
		pickedPrimoNome = nomeEnclaveFemminileMaschile[Math.floor(Math.random() * nomeEnclaveFemminileMaschile.length)];
		$("#primoNome").text(pickedPrimoNome);
		pickedPrimoNome = false;
	}

	// Per clade  Bios / Dégagé / Clade Nomadi / Potujo / Regno di Mithrill / Senza-Clade / Senza-Clade di Nuova Milano

	else if ((pickedPronome === 'Femminile')
		&& ((pickedClade === 'Bios') ||
		(pickedClade === 'Dégagé') ||
		(pickedClade === 'Clade Nomadi') ||
		(pickedClade === 'Potujo') ||
		(pickedClade === 'Enea') ||
				(pickedClade === 'Morgana') ||
						(pickedClade === 'Leonardo') ||
		(pickedClade === 'Senza-Clade') ||
		(pickedClade === 'Senza-Clade di Nuova Milano'))) {

			pickedPrimoNome = nomeMixFemminile[Math.floor(Math.random() * nomeMixFemminile.length)];
			$("#primoNome").text(pickedPrimoNome);
			pickedPrimoNome = false;

		} else 	if ((pickedPronome === 'Maschile')
		&& ((pickedClade === 'Bios') ||
		(pickedClade === 'Dégagé') ||
		(pickedClade === 'Clade Nomadi') ||
		(pickedClade === 'Potujo') ||
		(pickedClade === 'Enea') ||
				(pickedClade === 'Morgana') ||
						(pickedClade === 'Leonardo') ||
		(pickedClade === 'Senza-Clade') ||
		(pickedClade === 'Senza-Clade di Nuova Milano'))) {

			pickedPrimoNome = nomeMixMaschile[Math.floor(Math.random() * nomeMixMaschile.length)];
			$("#primoNome").text(pickedPrimoNome);
			pickedPrimoNome = false;
		}
	else {
		$("#primoNome").text('');
	}
}

//DEFINIZIONE SECONDO NOME

function printSecondoNome () {

	// Antonica

	if (pickedClade === 'Antonica') {
		pickedSecondoNome = patronimicoAntonica[Math.floor(Math.random() * patronimicoAntonica.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	}

	// Arcologica

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Arcologica')) {
		pickedSecondoNome = patronimicoArcologicaFemminile[Math.floor(Math.random() * patronimicoArcologicaFemminile.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	} else if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'Arcologica')) {
		pickedSecondoNome = patronimicoArcologicaMaschile[Math.floor(Math.random() * patronimicoArcologicaMaschile.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	}

	// Butteri

	else if (pickedClade === 'Butteri') {
		pickedSecondoNome = patronimicoButteri[Math.floor(Math.random() * patronimicoButteri.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	}

	// Chianura

	else if (pickedClade === 'Chianura') {
		pickedSecondoNome = patronimicoChianura[Math.floor(Math.random() * patronimicoChianura.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	}

	// Chup Lay

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Chup Lay')) {
		pickedSecondoNome = patronimicoChupLayTamilFemminile[Math.floor(Math.random() * patronimicoChupLayTamilFemminile.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	} else if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'Chup Lay')) {
		pickedSecondoNome = patronimicoChupLayTamilMaschile[Math.floor(Math.random() * patronimicoChupLayTamilMaschile.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	}

	// Ciurma di Mr. Whang, Limes

	else if ((pickedPronome === 'Femminile')
		&& ((pickedClade === 'Ciurma di Mr. Whang') || (pickedClade === 'Limes'))) {
		pickedSecondoNome = patronimicoCiurmaLimesFemminile[Math.floor(Math.random() * patronimicoCiurmaLimesFemminile.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	} else if ((pickedPronome === 'Maschile')
		&& ((pickedClade === 'Ciurma di Mr. Whang') || (pickedClade === 'Limes'))) {
		pickedSecondoNome = patronimicoCiurmaLimesMaschile[Math.floor(Math.random() * patronimicoCiurmaLimesMaschile.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	}

	// Darbon

	else if (pickedClade === 'Darbon') {
		pickedSecondoNome = patronimicoDarbon[Math.floor(Math.random() * patronimicoDarbon.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	}

	// De Lauzi

	else if (pickedClade === 'De Lauzi') {
		if ((pickedStatus === 'Borghesia') || (pickedStatus === 'Classe Dominante')) {
			$("#secondoNome").text('De Lauzi');
		} else {
		$("#secondoNome").text('De Lauzi');

		}
	}

	// De Medici

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'De Medici')) {
		pickedSecondoNome = patronimicoDeMediciFemminile[Math.floor(Math.random() * patronimicoDeMediciFemminile.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	} else if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'De Medici')) {
		pickedSecondoNome = patronimicoDeMediciMaschile[Math.floor(Math.random() * patronimicoDeMediciMaschile.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	}

	// Fermiorrí, Será

	else if ((pickedClade === 'Fermiorrí') || (pickedClade === 'Será')) {
		pickedSecondoNome = patronimicoFermiorriSera[Math.floor(Math.random() * patronimicoFermiorriSera.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	}

	// Mercandé

	else if (pickedClade === 'Mercandé') {
		pickedSecondoNome = patronimicoMercande[Math.floor(Math.random() * patronimicoMercande.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	}

	// Grimaldi-Kunna

	else if ((pickedPronome === 'Femminile')
		&& (pickedClade === 'Grimaldi-Kunna')) {
		pickedSecondoNome = patronimicoGrimaldiKunnaFemminile[Math.floor(Math.random() * patronimicoGrimaldiKunnaFemminile.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	} else if ((pickedPronome === 'Maschile')
		&& (pickedClade === 'Grimaldi-Kunna')) {
		pickedSecondoNome = patronimicoGrimaldiKunnaMaschile[Math.floor(Math.random() * patronimicoGrimaldiKunnaMaschile.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	}

	// Il Comune

	else if (pickedClade === 'Il Comune') {
		pickedSecondoNome = patronimicoIlComune[Math.floor(Math.random() * patronimicoIlComune.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	}

	// Nobili

	else if (pickedClade === 'Nobili') {
		if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Borghese, Fazione Fidelis') {
			$("#secondoNome").text('Borghese');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei D\'Alema, Fazione Fidelis') {
			$("#secondoNome").text('D\'Alema');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Doria, Fazione Fidelis') {
			$("#secondoNome").text('Doria');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Del Drago, Fazione Fidelis') {
			$("#secondoNome").text('Del Drago');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Giovannelli, Fazione Fidelis') {
			$("#secondoNome").text('Giovannelli');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare degli Ortega, Fazione Fidelis') {
			$("#secondoNome").text('Ortega');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare degli Oxylene, Fazione Fidelis') {
			$("#secondoNome").text('Oxylene');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Monti, Fazione Fidelis') {
			$("#secondoNome").text('Monti');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Santoro, Fazione Fidelis') {
			$("#secondoNome").text('Santoro');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Waston, Fazione Fidelis') {
			$("#secondoNome").text('Waston');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare degli Alfano, Fazione Imperia') {
			$("#secondoNome").text('Alfano');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Barberini, Fazione Imperia') {
			$("#secondoNome").text('Barberini');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Fiore, Fazione Imperia') {
			$("#secondoNome").text('Fiore');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Goldmen Sacks, Fazione Imperia') {
			$("#secondoNome").text('Goldmen Sacks');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Santacroce, Fazione Imperia') {
			$("#secondoNome").text('Santacroce');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Testa, Fazione Imperia') {
			$("#secondoNome").text('Testa');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare degli Ingroia, Fazione Servus') {
			$("#secondoNome").text('Ingroia');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare degli Knaus , Fazione Servus') {
			$("#secondoNome").text('Knaus');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare degli Odescalchi, Fazione Servus') {
			$("#secondoNome").text('Odescalchi');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare degli Orsini, Fazione Servus') {
			$("#secondoNome").text('Orsini');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Pallavicini, Fazione Servus') {
			$("#secondoNome").text('Pallavicini');
		} else  if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Torlonia, Fazione Servus') {
			$("#secondoNome").text('Torlonia');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Veltroni, Fazione Servus') {
			$("#secondoNome").text('Veltroni');
		} else  if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare degli Amezzon, Fazione Liena') {
			$("#secondoNome").text('Amezzon');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare dei Filangeri, Fazione Liena') {
			$("#secondoNome").text('Filangeri');
		} else  if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare degli Spada, Fazione Liena') {
			$("#secondoNome").text('Spada');
		} else if (pickedInsediamento === 'Città del Vaticano – Torre Nobiliare degli Zaibaroke, Fazione Liena') {
			$("#secondoNome").text('Zaibaroke');
		}
	}

	// Ottieri

	else if (pickedClade === 'Ottieri') {
		if ((pickedClasseSociale === 'Borghesia') || (pickedClasseSociale === 'Classe Dominante')) {
			$("#secondoNome").text('From Managers');
		} else if (pickedClasseSociale === 'Classe Media') {
			$("#secondoNome").text('From Security');
		} else if ((pickedClasseSociale === 'Proletariato') || (pickedClasseSociale === 'Sotto Proletariato')) {
			$("#secondoNome").text('From Labour');
		}
	}

	// Pavan

	else if (pickedClade === 'Pavan') {
		if (pickedInsediamento === 'Il Casteo') {
			$("#secondoNome").text('Castello');
		} else if (pickedInsediamento === 'La Muraglia') {
			$("#secondoNome").text('Muraro');
		} else if (pickedInsediamento === 'La Forra') {
			$("#secondoNome").text('Forrense');
		} else if (pickedInsediamento === 'Sede della Caneva Corp.') {
			$("#secondoNome").text('Caneva');
		} else if (pickedInsediamento === 'Pordeno') {
			$("#secondoNome").text('Pordense');
		} else if (pickedInsediamento === 'Sossàn') {
			$("#secondoNome").text('Sossà');
		} else if (pickedInsediamento === 'Venezia – Dorsoduro, Ca\' Rezzonico') {
			$("#secondoNome").text('Rezzo');
		} else if (pickedInsediamento === 'Venezia – Cannaregio') {
			$("#secondoNome").text('Cannaro');
		}
	}

	// Proxima

	else if (pickedClade === 'Proxima') {
		if ((pickedClasseSociale === 'Borghesia') || (pickedClasseSociale === 'Classe Dominante') || (pickedClasseSociale === 'Classe Media')) {
			pickedSecondoNome = patronimicoProximaBorghesia[Math.floor(Math.random() * patronimicoProximaBorghesia.length)];
			$("#secondoNome").text(pickedSecondoNome);
			pickedSecondoNome = false;
		} else if ((pickedPronome === 'Femminile') && ((pickedClasseSociale === 'Proletariato') || (pickedClasseSociale === 'Sotto Proletariato')))  {
			pickedSecondoNome = patronimicoProximaProletariatoFemminile[Math.floor(Math.random() * patronimicoProximaProletariatoFemminile.length)];
			$("#secondoNome").text(pickedSecondoNome);
			pickedSecondoNome = false;			}
		else if ((pickedPronome === 'Maschile') && ((pickedClasseSociale === 'Proletariato') || (pickedClasseSociale === 'Sotto Proletariato'))) {
			pickedSecondoNome = patronimicoProximaProletariatoMaschile[Math.floor(Math.random() * patronimicoProximaProletariatoMaschile.length)];
			$("#secondoNome").text(pickedSecondoNome);
			pickedSecondoNome = false;
		}
	}

	// Senza-Clade Anti-Isolazionisti della Pa-tuh, Senza-Clade Filo-Governativi della Pa-tuh, Senza-Clade della Salaf – Pa-tuh

	else if ((pickedPronome === 'Femminile')
		&& ((pickedClade === 'Senza-Clade Anti-Isolazionisti della Pa-tuh') ||
			(pickedClade === 'Senza-Clade Filo-Governativi della Pa-tuh') ||
			(pickedClade === 'Senza-Clade della Salaf – Pa-tuh'))) {
		pickedSecondoNome = patronimicoSenzaCladeAntiFemminile[Math.floor(Math.random() * patronimicoSenzaCladeAntiFemminile.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	} else if ((pickedPronome === 'Maschile')
		&& ((pickedClade === 'Senza-Clade Anti-Isolazionisti della Pa-tuh') ||
			(pickedClade === 'Senza-Clade Filo-Governativi della Pa-tuh') ||
			(pickedClade === 'Senza-Clade della Salaf – Pa-tuh'))) {
		pickedSecondoNome = patronimicoSenzaCladeAntiMaschile[Math.floor(Math.random() * patronimicoSenzaCladeAntiMaschile.length)];
		$("#secondoNome").text(pickedSecondoNome);
		pickedSecondoNome = false;
	}

	else {
		$("#secondoNome").text('');
	}
}
