var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log ("auto play is set to " + video.autoplay);
	console.log ("loop is set to " + video.loop)
});

//play the video and display volume
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	displayVolumne();
});

function displayVolumne() {
	const volumeSpan = document.getElementById("volume");
	if (volumeSpan) {
		const volumePercentage = Math.round(video.volume * 100); // Calculate volume percentage
    	volumeSpan.textContent = `${volumePercentage}%`; 
	}
}

//pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

//slow the video
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate *= 0.9; //slow down the video speed by 10%
	console.log(`New video speed: ${video.playbackRate}`);

});

//increase the video speed
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Fast Video");
	video.playbackRate /= 0.9; //increase the video speed by 10%
	console.log(`New video speed: ${video.playbackRate}`);

});

//skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	let newTime = video.currentTime + 10;
	if (newTime >= video.duration) {
		newTime = 0;
	}
	video.currentTime = newTime;
	console.log(`Current video location: ${video.currentTime}`);

});

//Mute/Unmute
const muteButton = document.getElementById("mute");
muteButton.addEventListener("click", function() {
	video.muted = !video.muted;
	mute.textContent = video.muted ? "Unmute" : "Mute";
	console.log(`Video is ${video.muted ? "muted" : "unmuted"}`);
});

//Volume Slider
const volumeSlider = document.getElementById("slider");
volumeSlider.addEventListener("input", function() {
    video.volume = volumeSlider.value / 100;
    displayVolumne();
	console.log(`Video is set to ${video.volume}`);
  });

//Style the page
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log(`Video classList: ${video.classList}`);
});

//Originalize the page
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log(`Video classList: ${video.classList}`);
});


