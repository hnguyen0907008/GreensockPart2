(()=> {

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
})();