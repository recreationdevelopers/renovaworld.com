/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomTweetImage(){
	// Run the function to generate random number between 1 and 225
	var randomNumber = getRandomInt(1,232);

	// Format the randomly generated number to 00000 format
	var imageNumber = randomNumber.toString().padStart(5, "0");

	document.getElementById("rickImageHolder").src = "images/rickrubintweetimages/RickRubinTweet-" + imageNumber + ".jpg";
}