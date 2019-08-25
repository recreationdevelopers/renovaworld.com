$(function(){
	$("#nav").load("common/navyo.html");  //Navigation bar (for later)
	$("#bookDetails").load("common/booksdetails.html");  //Navigation bar (for later)
	$("#contactusyo").load("common/contactusyo.html"); // Contact us Form
	$("#newslettersignupyo").load("common/newslettersignupyo.html"); // Newsletter sign up form
	$("#giftmeyo").load("common/giftmeyo.html"); // Gift me
	$("#footer").load("common/footeryo.html"); // Footer
	$("#rnmusicplayerdetails").load("common/rnmusicplayerdetails.html"); // Music Player Details
	$("#paginatekaro").jPaginate(); // Pagination load
	$("#googleanalytics").load("common/analyticstracking.html"); // Google analytics
	
	if ( $(window).width() > 670) {     
		  //Add your javascript for large screens here
		  $("#rnmusicplayer").load("common/rnmusicplayer.html"); // MUSIC PLAYER
		}
		else {
		  //Add your javascript for small screens here
		  $("#rnmusicplayer").css("display", "none");
		}
});
