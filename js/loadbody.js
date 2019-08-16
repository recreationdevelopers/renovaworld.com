$(function(){
	$("#nav").load("https://renovaworld.com/common/navyo.html");  //Navigation bar (for later)
	$("#contactusyo").load("https://renovaworld.com/common/contactusyo.html"); // Contact us Form
	$("#newslettersignupyo").load("https://renovaworld.com/common/newslettersignupyo.html"); // Newsletter sign up form
	$("#giftmeyo").load("https://renovaworld.com/common/giftmeyo.html"); // Gift me
	$("#footer").load("https://renovaworld.com/common/footeryo.html"); // Footer
	$("#rnmusicplayerdetails").load("https://renovaworld.com/common/rnmusicplayerdetails.html"); // Music Player Details
	$("#paginatekaro").jPaginate(); // Pagination load
	$("#googleanalytics").load("https://renovaworld.com/common/analyticstracking.html"); // Google analytics
	
	if ( $(window).width() > 670) {     
		  //Add your javascript for large screens here
		  $("#rnmusicplayer").load("https://renovaworld.com/common/rnmusicplayer.html"); // MUSIC PLAYER
		}
		else {
		  //Add your javascript for small screens here
		  $("#rnmusicplayer").css("display", "none");
		}
});
