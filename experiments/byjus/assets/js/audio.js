/*

This Audio App is written by Prashant Mishra as part of BYJU'S K3 App - Learnign Map - Web Audio API Sample.

The code is NOT to be used outside of Think and Learn Pvt. Ltd.

Contact at prashant.mishra@byjus.com for further queries

*/


/* DRAG AND DROP AUDIO PLAYER BEINGS HERE */

// reading drag and dropped file after checking if the browser supports

if (window.File && window.FileReader && window.FileList && window.Blob) {


    // checking browser for compatibility with Web Audio API
    function audioContextCheck() {
        if (typeof AudioContext !== "undefined") {
            return new AudioContext();
        } else if (typeof webkitAudioContext !== "undefined") {
            return new webkitAudioContext();
        } else if (typeof mozAudioContext !== "undefined") {
            return new mozAudioContext();
        } else {
            throw new Error('AudioContext not supported');
        }
    }

    // Creating an AudioContext at GLOBAL LEVEL
    var audioContext = audioContextCheck();

    // Creating an AudioBuffer at GLOBAL LEVEL
    var audioBuffer;

    // Reading the dropped or selected audio file at the HTML <input> ID of '#chooseAudio'
    function fileLoader(){

        var file = document.getElementById('chooseAudio').files[0];
        
        var reader = new FileReader();

        reader.readAsArrayBuffer(file);

        reader.onload = function() {

            var getSound = reader.result;

            audioContext.decodeAudioData(getSound, function(buffer) {

                    var sampleRate = buffer.sampleRate;

                    audioBuffer = buffer;

                });

        }

    }

    //To play the dropped sound
    function playLMSFX() {

        console.log('hello');

        var playSound = audioContext.createBufferSource();
        playSound.buffer = audioBuffer;
        playSound.connect(audioContext.destination);
        playSound.start(audioContext.currentTime);
    }

}

// If the browser does not support the File Reader API
else {
    alert("Oh no! Your browser is too old to support HTML5 File API");
}

/* DRAG AND DROP AUDIO PLAYER ENDS HERE */