// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var track = 0;
var volLevels = [];
var vol = 3;
const vol_max = 6;
var myInterval;

function init() {

	volLevels.push(document.getElementById("vl0"))
	volLevels.push(document.getElementById("vl1"))
	volLevels.push(document.getElementById("vl2"))
	volLevels.push(document.getElementById("vl3"))
	volLevels.push(document.getElementById("vl4"))
	volLevels.push(document.getElementById("vl5"))

	for (let i = 0; i < volLevels.length; i++) {    
		if (i < vol) {
			volLevels[i].style.backgroundColor = '#9f5cc4';
		} else {
			volLevels[i].style.backgroundColor = 'white';
		}
	}

};

function volUp() {
	vol = Math.min(vol+1, vol_max);

	for (let i = 0; i < volLevels.length; i++) {    
		if (i < vol) {
			volLevels[i].style.backgroundColor = '#9f5cc4';
		} else {
			volLevels[i].style.backgroundColor = 'white';
		}
	}
}

function volDown() {
	vol = Math.max(vol-1, 0);
	for (let i = 0; i < volLevels.length; i++) {    
		if (i < vol) {
			volLevels[i].style.backgroundColor = '#9f5cc4';
		} else {
			volLevels[i].style.backgroundColor = 'white';
		}
	}
}

function switchPlay() {
	
	
//'<i class="material-icons" id="play">play_arrow</i>'
	
	//var icon = document.getElementsByClassName("ply").innerHTML.innerHTML;
	

	var icon = document.getElementById("play").innerHTML;
	if (icon == "play_arrow") {
		document.getElementById("play").innerHTML = "pause_arrow";
		myInterval = window.setInterval(playback, 1000);
		
		
	} else {
		document.getElementById("play").innerHTML = "play_arrow";
		window.clearInterval(myInterval);
	}
}

function playback() {
	if (document.getElementById("myRange").value == 180) {
		nextSong();
	}
	document.getElementById("myRange").stepUp();
	document.getElementsByClassName("time0").innerHTML = secondsToMs(document.getElementById("myRange").value)
}

function nextSong() {
	document.getElementById("myRange").value = 0;
	track = (track + 1) % 10;
	document.getElementById("player-song-name").innerHTML = tracklist[track];
}

function prevSong() {
	track = (10 + track - 1) % 10;
	document.getElementById("player-song-name").innerHTML = tracklist[track];
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();