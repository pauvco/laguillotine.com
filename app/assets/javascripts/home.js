var done=false;

window.onload = function(){
	Guillotine.start();



	if ($("addCandidateButton")) {
		$("addCandidateButton").addEvent('click',function(){Guillotine.customize()});
		$("candidateName").addEvent('blur',function(e){checkNewCandidateFied(e)});
		$("guillotineTitle").addEvent('blur',function(e){checkNewCandidateFied(e)});
	}


}

var Guillotine = {
	guillotine:null,
	montant:null,
	mouton:null,
	condamne:null,
	tete:null,
	aumonier:null,
	titleStart:null,
	titleEnd:null,
	subtitle:null,
	storedHash:"",
	paper:null,
	URW:null,
	start:function(){
		this.initGuillotine();

		if (window.location.hash.length==0 && $('hash')) {
			Guillotine.storedHash=$('hash').className;
			window.location.hash=PelletStudio.storedHash;			
		} else {
			Guillotine.storedHash = window.location.hash;
		}
		window.setInterval(function () {
		    if (window.location.hash != Guillotine.storedHash) {
			Guillotine.storedHash = window.location.hash;
			Guillotine.hashChanged(Guillotine.storedHash);
		    }
		}, 250);
	},
	initGuillotine:function(){
		// Creates canvas 450 × 156 at 10, 50
		this.paper = Raphael('guillotineHolder', 750, 256);
		this.URW = this.paper.getFont("URWGothicL-Book")

		Guillotine.montant = this.paper.set(
			this.paper.rect(5, 5, 5, 135).attr({stroke: "none", fill: "#000"}),
			this.paper.rect(22, 5, 5, 135).attr({stroke: "none", fill: "#000"}),
			this.paper.rect(3, 0, 26, 5).attr({stroke: "none", fill: "#000"}),
			this.paper.rect(15, 5, 1, 135).attr({stroke: "none", fill: "#999"})
		);
		Guillotine.montant.transform("t200,5...");

		Guillotine.mouton = Guillotine.paper.set(
			Guillotine.paper.rect(3, 0, 2, 130).attr({stroke: "none", fill: "#fff"}),
			Guillotine.paper.path("M0 0L0 24L10 10L10 0").attr({fill: "#000"}),
			Guillotine.paper.rect(-1, 6, 12, 1).attr({stroke: "none", fill: "#fff"})
		);
		Guillotine.mouton.transform("t211,18");

		Guillotine.guillotine = this.paper.set(
			Guillotine.montant,
			Guillotine.mouton
		);


		Guillotine.tete = this.paper.print(229, 160, "o", this.URW, 64);
		//condamne[0].animate({transform: "...r90"}, 500, function () {})

		Guillotine.aumonier = this.paper.print(272, 160, "t", this.URW, 64);

		Guillotine.subtitle = this.paper.print(237, 150, "cutting edge technology", this.URW, 13);
	//	Guillotine.subtitle = paper.print(237, 150, "technologie de pointe", this.URW, 13);


		Guillotine.titleStart = this.paper.print(28, 160, "la gui", this.URW, 64);
		Guillotine.titleEnd = this.paper.print(300, 160, "ine", this.URW, 64);
	},



	customize:function(condamne,subtitle){

		Guillotine.titleStart.remove()
		Guillotine.titleEnd.remove()
		Guillotine.aumonier.remove()
		Guillotine.tete.remove()
		Guillotine.subtitle.remove()

		Guillotine.subtitle = this.paper.print(0, 150, $("guillotineTitle").value, this.URW, 13);

		Guillotine.corps = Guillotine.paper.print(0, 160, $("candidateName").value, Guillotine.URW, 64,"middle",0.5)

		var condamne = Guillotine.paper.set(
		Guillotine.corps
		);
		Guillotine.tete = Guillotine.corps[Guillotine.corps.length-1]


	}
}








	function bourreau(){
		if (done) {
			Guillotine.mouton.transform("...t0,-100")
			Guillotine.tete.transform("...t0,-350")
			done = false;

		} else {
			Guillotine.mouton.animate({transform: "...t0,100",easing: "<"}, 200, function () {decapite()})
			done=true;
		}
	}


	function decapite(){
	//condamne[0].animate({transform: "...s3,3"}, 500, function () {})

	//	condamne.animate({y: 105, easing: "bounce", callback: ready()}, 500);


		Guillotine.tete.animate({transform: "...t0,350",easing: "bounce"}, 500, function () {})



	}

	function ready(){

	}



function checkNewCandidateFied(event){
	if (event.target.value.length>0)
	switch (event.target.id){
		case "candidateName":
		case "guillotineTitle":

	/// Check if name exists
			
			event.target.set('class', 'inputText-valid');

			break;
	}
}
