// JavaScript Document
window.onload = initRollLink;

var thisAd = 0;

function initRollLink() {
	if (document.getElementById("roll").parentNode.tagName == "A") {
		document.getElementById("roll").parentNode.onclick = newLocation;
	}
	document.getElementById("prevLink").onclick = processPrevious;
	document.getElementById("nextLink").onclick = processNext;
	rotate();
}

function newLocation() {
	var adURL = new Array("haosou.com","baidu.com","hao123.com","easou.com");
	document.location.href = "http://www." + adURL[thisAd];
	return false;
}

var adImages = new Array("images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg");

function rotate() {

	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	document.getElementById("roll").src = adImages[thisAd];

	setTimeout(rotate, 2 * 1000);
}

function processPrevious() {
	if (thisAd == 0) {
		thisAd = adImages.length;
	}
	thisAd--;
	document.getElementById("roll").src = adImages[thisAd];
	return false;
}

function processNext() {
	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	document.getElementById("roll").src = adImages[thisAd];
	return false;
}