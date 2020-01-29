var breaksite = 'https://spreadsheets.google.com/feeds/cells/';

var breakid = '1Xc76qiQyelj6rCFktllOygzQCVh7KiHYEy3ImYuIOp0/';

var whatdoyouwant = '1/public/full?alt=json';

var gethere = breaksite+breakid+whatdoyouwant;

var dataFromSheet;

function postContactToGoogle() {
	var questid = $('#questid').val();
	console.log(questid);
	if (questid !== "") {
	    $.ajax({
	        url: "https://docs.google.com/forms/d/1GXUy-ZSMYId5c0I_1X87rO3O29f6uRpAtChGQZNYIVM/formResponse",
	        data:{ "entry.1638299999": questid},
	        type: "POST",
	        dataType: "xml",
	        statusCode: {
	            0: function () {
	            	// SUCCESS MESSAGE
	                window.location.replace("index.html");
	            },
	            200: function () {
	            	// ERROR MESSAGE
	                alert('Something is not working! What did you do?');
	            }
	        }
	    });
	}
	else {
		// FIELDS NOT VALID
		alert('Hmm, you have successfully wasted my time and yours. Congratulations!');
	}
}

$(document).ready(function(){
    $('#getquestid').submit(function() {
        postContactToGoogle();
        return false;
    });
});


$.ajax({
			url: gethere,
			async: false,
			dataType: 'json',
			success: function(data) {
            	
			// Hello there
			getdata =  data.feed.entry.find((entry) => entry.title.$t == 'B4').content.$t;
			}
		  
});

var makethisdatanice = JSON.parse(getdata);

 var main_data = '';
	main_data += '<tr>';
	main_data += '<td>'+makethisdatanice.a[0].code+'</td>';
	main_data += '<td>'+makethisdatanice.a[0].details+'</td>';
	main_data += '</tr>';
$('#database-table').append(main_data);