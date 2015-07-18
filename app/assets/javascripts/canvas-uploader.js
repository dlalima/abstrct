$(document).ready(function(){

	$('.save').on('click', function(event){
		console.log('saving...');
    var dataURL = document.getElementById("actualCanvas").toDataURL("image/png");
    // Pic = Pic.replace(/^data:image\/(png|jpg);base64,/, "")  
		var file = dataURLtoBlob(dataURL);
	  // Create new form data
	  var fd = new FormData();
	  // Append our Canvas image file to the form data
	  fd.append("image", file);
	  var wordID = $("#randomWord").data("word-id");
	  fd.append("word_id", wordID);
	  // And send it
	  $.ajax({
	     url: "/drawings",
	     type: "POST",
	     data: fd,
	     processData: false,
	     contentType: false,
	  });
	});
});

function dataURLtoBlob(dataURL) {
    // Decode the dataURL    
    var binary = atob(dataURL.split(',')[1]);
    // Create 8-bit unsigned array
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    // Return our Blob object
    return new Blob([new Uint8Array(array)], {type: 'image/png'});
}