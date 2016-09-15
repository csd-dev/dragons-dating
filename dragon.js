var selectedGender;
var currentDragon;
$(function(){
	$("#dragon").hide();
	
	$("#boy").click(function() {
		$("#genders").hide();
		selectedGender = "boy";
		loadDragon();
		//$("#dragon").show();
	});
	
	$("#girl").click(function() {
		$("#genders").hide();
		
		selectedGender = "girl";
		loadDragon();

	});
	
	$("#like").click(function() {
		if(currentDragon.likesYou == true) {
			alert("Match with " + currentDragon.name);
		}
		
		loadDragon();

	});
	
	$("#not").click(function() {
		
		loadDragon();

	});
});

function loadDragon() {
	
	$.ajax({
	  method: "GET",
	  dataType: "json",
	  url: "http://www.dragonsofmugloar.com/dating/api/profile/random?gender="+selectedGender,
	})
	  .done(function( mJson ) {
		console.log(mJson);
		currentDragon = mJson;
		$("#name").text(mJson.name);
		$("#profileimg").attr("src",mJson.image);
		$("#description").text(mJson.description);
		$("#dragon").show();

	  });
	
}