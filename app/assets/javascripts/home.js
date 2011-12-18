var done=false;

window.onload = function(){
	Guillotine.start();
}

var Guillotine = {
	guillotine:null,
	mouton:null,
	condamne:null,
	tete:null,
	aumonier:null,
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
			Guillotine.hashChanged(PelletStudio.storedHash);
		    }
		}, 250);
	},
	initGuillotine:function(){
		// Creates canvas 450 × 156 at 10, 50
		this.paper = Raphael('guillotineHolder', 450, 256);
		this.URW = this.paper.getFont("URWGothicL-Book")

		Guillotine.guillotine = this.paper.set(
			this.paper.rect(5, 5, 5, 135).attr({stroke: "none", fill: "#000"}),
			this.paper.rect(22, 5, 5, 135).attr({stroke: "none", fill: "#000"}),
			this.paper.rect(3, 0, 26, 5).attr({stroke: "none", fill: "#000"}),
			this.paper.rect(15, 5, 1, 135).attr({stroke: "none", fill: "#999"})
		);
		Guillotine.guillotine.transform("t200,5...");

		Guillotine.mouton = this.paper.set(
			this.paper.rect(16, -135, 7, 500).attr({stroke: "none", fill: "#fff"}),
			this.paper.path("m 0.00371684,70.750591 -0.003999998,-41.75 20.000000158,0 20,0 0,9.46085 0,9.46086 -18.14872,29.28914 C 11.869207,93.320471 2.8708868,107.85059 1.8547368,109.50059 0.03957684,112.44801 0.00712684,111.76886 0.00345684,70.750591 z m -0.003999998,-56.75 0,-13.99999960019 20.000000158,0 20,0 0,13.99999960019 0,14 -20,0 -20.000000158,0 0,-14 z").attr({fill: "#000"}),
			this.paper.rect(-5, 48, 49, 3).attr({stroke: "none", fill: "#fff"})
		);
		Guillotine.mouton.transform("t196,-25s0.22...");


		Guillotine.tete = this.paper.print(229, 160, "o", this.URW, 64);
		//condamne[0].animate({transform: "...r90"}, 500, function () {})

		Guillotine.aumonier = this.paper.print(272, 160, "t", this.URW, 64);

		Guillotine.subtitle = this.paper.print(237, 150, "cutting edge technology", this.URW, 13);
	//	Guillotine.subtitle = paper.print(237, 150, "technologie de pointe", this.URW, 13);


		var gui = this.paper.print(28, 160, "la gui", this.URW, 64);
		var ine = this.paper.print(300, 160, "ine", this.URW, 64);
	}
}








	function bourreau(){
		if (done) {
			Guillotine.mouton.transform("...t0,-445")
			Guillotine.tete.transform("...t0,-350")
			done = false;

		} else {
			Guillotine.mouton.animate({transform: "...t0,445",easing: "<"}, 200, function () {decapite()})
			done=true;
		}
	}


	function decapite(){
	//condamne[0].animate({transform: "...s3,3"}, 500, function () {})

	//	condamne.animate({y: 105, easing: "bounce", callback: ready()}, 500);


	Guillotine.tete[0].animate({transform: "...t0,350",easing: "bounce"}, 500, function () {})



	}

	function ready(){

	}
