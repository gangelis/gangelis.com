var video = 0.00;
var bckbtnIsClicked = false;
var i = 1;
var v = 0;




function checkVideoTime() {
	video=document.getElementById('myVideo');
	console.log("checkVideoTime -> " + video.currentTime);
	
}


function bckbtnmerch() {
	
	bckbtnIsClicked = true;
	document.getElementById("video_overlays-merch").style.display = "none";
	document.getElementById("back-button").style.display = "none";
	document.getElementById("merch-bench").style.display = "none";
	document.getElementById("myVideo2").style.display = "block";
	
	
}


function bwphotos () {
	i = 1;
	document.getElementById("gallery-container-2").style.display = "none";
	document.getElementById("gallery-container-3").style.display = "none";
	document.getElementById("gallery-container-1").style.animationDelay = "0s";
	document.getElementById("gallery-container-1").style.display = "block";
	
}


 
function colorphotos () {
	i = 2;
	document.getElementById("gallery-container-1").style.display = "none";
	document.getElementById("gallery-container-3").style.display = "none";
	document.getElementById("gallery-container-2").style.animationDelay = "0s";
	document.getElementById("gallery-container-2").style.display = "block";
	
}


function worksphotos() {
	i = 3;
	document.getElementById("gallery-container-1").style.display = "none";
	document.getElementById("gallery-container-2").style.display = "none";
	document.getElementById("gallery-container-3").style.animationDelay = "0s";
	document.getElementById("gallery-container-3").style.display = "block";
	
}




function bckbtnfolio() {
	bckbtnIsClicked = true;
	document.getElementById("video_overlays-folio").style.display = "none";
	document.getElementById("back-button").style.display = "none";
	document.getElementById("gallery-container-"+[i]).style.display = "none";
	document.getElementById("header").style.display = "none";
	document.getElementById("photo-set-buttons-div").style.display = "none";
	document.getElementById("myVideo2").style.display = "block";
}



function bckbtnvideos() {
	bckbtnIsClicked = true;
	document.getElementById("video_overlays-videos").style.display = "none";
	document.getElementById("back-button").style.display = "none";
	document.getElementById("video-container").style.display = "none";
	document.getElementById("myVideo2").style.display = "block";
}


function bckbtncontact() {
	bckbtnIsClicked = true;
	document.getElementById("video_overlays-contact").style.display = "none";
	document.getElementById("back-button").style.display = "none";
	document.getElementById("contact-container").style.display = "none";
	document.getElementById("myVideo2").style.display = "block";
}



function bckbtnintro() {
	bckbtnIsClicked = true;
	document.getElementById("back-button").style.display = "none";
	document.getElementById("myVideo2").style.display = "block";
	
}


function closesubs() {
	
	document.getElementById("subs-div").style.display = "none";
}






window.addEventListener("beforeunload", function() {
  document.body.classList.add("animate-out");
});



function clickedVideo1 () {
	
	var arrayVideoThumb = ['kaloiris.png', 'ufomamut.png', 'lorn.png', 'raar.png'];

	var arrayVideoFrame = ['https://www.youtube.com/embed/Dedt9KqndUc', 'https://www.youtube.com/embed/7VFQ-_ERct0', 'https://www.youtube.com/embed/CqaAs_3azSs', 'https://www.youtube.com/embed/VshXhJJJvxc'];
	
	var currentVideo = document.getElementById("video-frame");
	
	v = 1;
	currentVideo.src = arrayVideoFrame[v];
	
}

function clickedVideo2 () {
		
	var arrayVideoThumb = ['kaloiris.png', 'ufomamut.png', 'lorn.png', 'raar.png'];

	var arrayVideoFrame = ['https://www.youtube.com/embed/Dedt9KqndUc', 'https://www.youtube.com/embed/7VFQ-_ERct0', 'https://www.youtube.com/embed/CqaAs_3azSs', 'https://www.youtube.com/embed/VshXhJJJvxc'];
	
	var currentVideo = document.getElementById("video-frame");
	v = 2;
	currentVideo.src = arrayVideoFrame[v];
	
	
}

function clickedVideo3 () {
		
	var arrayVideoThumb = ['kaloiris.png', 'ufomamut.png', 'lorn.png', 'raar.png'];

	var arrayVideoFrame = ['https://www.youtube.com/embed/Dedt9KqndUc', 'https://www.youtube.com/embed/7VFQ-_ERct0', 'https://www.youtube.com/embed/CqaAs_3azSs', 'https://www.youtube.com/embed/VshXhJJJvxc'];
	
	var currentVideo = document.getElementById("video-frame");
	v = 3;
	currentVideo.src = arrayVideoFrame[v];
	
}

function clickedVideo4 () {
		
	var arrayVideoThumb = ['kaloiris.png', 'ufomamut.png', 'lorn.png', 'raar.png'];

	var arrayVideoFrame = ['https://www.youtube.com/embed/Dedt9KqndUc', 'https://www.youtube.com/embed/7VFQ-_ERct0', 'https://www.youtube.com/embed/CqaAs_3azSs', 'https://www.youtube.com/embed/VshXhJJJvxc'];
	
	var currentVideo = document.getElementById("video-frame");
	v = 4;
	currentVideo.src = arrayVideoFrame[v-4];
	
}

