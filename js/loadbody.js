$(function(){
	$("#nav").load("http://renovaworld.com/common/navyo.html");  //Navigation bar (for later)
	$("#contactusyo").load("http://renovaworld.com/common/contactusyo.html"); // Contact us Form
	$("#newslettersignupyo").load("http://renovaworld.com/common/newslettersignupyo.html"); // Newsletter sign up form
	$("#giftmeyo").load("http://renovaworld.com/common/giftmeyo.html"); // Gift me
	$("#footer").load("http://renovaworld.com/common/footeryo.html"); // Footer
	$("#rnmusicplayerdetails").load("http://renovaworld.com/common/rnmusicplayerdetails.html"); // Music Player Details
	$("#paginatekaro").jPaginate(); // Pagination load
	$("#googleanalytics").load("http://renovaworld.com/common/analyticstracking.html"); // Google analytics
	
	if ( $(window).width() > 670) {     
		  //Add your javascript for large screens here
		  $("#rnmusicplayer").load("http://renovaworld.com/common/rnmusicplayer.html"); // MUSIC PLAYER
		}
		else {
		  //Add your javascript for small screens here
		  $("#rnmusicplayer").css("display", "none");
		}
});
