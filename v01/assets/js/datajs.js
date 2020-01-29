var breaksite = 'https://spreadsheets.google.com/feeds/cells/';

var breakid = '1SkWf34ivbBXyciURv8Z6Bs766YrR54A4rSx1scykWtY/';

var whatdoyouwant = '1/public/full?alt=json';

var gethere = breaksite+breakid+whatdoyouwant;

var dataFromSheet;

function postContactToGoogle() {
	var questid = $('#questid').val();
	console.log(questid);
	if (questid !== "") {
	    $.ajax({
	        url: "https://docs.google.com/forms/d/17wocNFr2MUsj9rUkyZJZHW_L4PCBzYCp_qvwzl75Oq4/formResponse",
	        data:{ "entry.363875529": questid},
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
			getdata =  data.feed.entry.find((entry) => entry.title.$t == 'U2').content.$t;
			}
		  
});

var makethisdatanice = JSON.parse(getdata);
var count = makethisdatanice.a.length;
 var main_data = '';
 for (i=0;i<count;i++){
	main_data += '<tr>';
	main_data += '<td>'+makethisdatanice.a[i].code+'</td>';
	main_data += '<td>'+makethisdatanice.a[i].details+'</td>';
	main_data += '</tr>';
}
$('#database-table').append(main_data);
