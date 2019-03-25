(()=> {

	//JPG
	let badge = document.querySelector('img');

	//(element, time, {property})
	function animImage() {
		TweenMax.to(badge, 0.7, {scaleX: 1.025, scaleY: 1.025, rotation: 50, ease:Bounce.easeOut, onComplete: animFooterText});
		//ease: Elastic.easeInOut

	}

	function animFooterText(){
		TweenMax.to('h3', 0.7, {scaleX: 2, scaleY: 2, ease: Elastic.easeInOut})
	}

	//animImage();

	badge.addEventListener('mouseover', animImage);


	//SVG
	let myTL = new TimelineLite();

	//put transform to make the image stay in the middle 
	myTL.to("#background", 0.5, {rotation: 100, scaleX: 1.1, scaleY: 1.1, transfrormOrigin: "50% 70%"}).to("#small_type", 1, {rotation: -360, transfrormOrigin: "50% 70%"});
})();