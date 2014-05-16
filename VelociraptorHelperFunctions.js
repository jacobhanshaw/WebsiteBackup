function setSize() {
	if (document.body && document.body.offsetWidth) {
	 winW = document.body.offsetWidth;
	 winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
		document.documentElement &&
		document.documentElement.offsetWidth ) {
		winW = document.documentElement.offsetWidth;
		winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
		winW = window.innerWidth;
		winH = window.innerHeight;
	}
	screenWidth = winW - 30;
	screenHeight = winH - 30;
	document.getElementById("canvas").setAttribute("width", screenWidth);
	document.getElementById("canvas").setAttribute("height", screenHeight);

	screenHeightPerRow = Math.round(screenHeight/numRaptors);
	heightOffGround = Math.round(screenHeightPerRow/7);
	raptorDistanceFromLeft = Math.round(screenWidth/16);
	maxJumpHeight = Math.round(screenHeight/16);

	imageScaleHeight = Math.round(screenHeight/(numRaptors * 3));
	imageScaleWidth = Math.round(imageScaleHeight * (137/88));

	adjustRaptors(false);
}
