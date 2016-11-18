//(function() {

//	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
var pictureSource;
var destinationType;
//	function onDeviceReady() {
pictureSource = navigator.camera.PictureSourceType;
destinationType = navigator.camera.DestinationType;

//		document.getElementById("capturePhoto").onclick = function() {
//			console.log("click");
//			navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
//				quality : 50,
//
//				destinationType : destinationType.DATA_URL
//			});
//		}
//
//	};


function onPhotoDataSuccess(imageData) {

	var smallImage = document.getElementById('smallImage');

	smallImage.style.display = 'block';

	smallImage.src = "data:image/jpeg;base64," + imageData;

}

function onFail(message) {

	alert('Failed because: ' + message);

}
//})();

jQuery(document).ready(function ($) {
	$('#capturePhoto').click(function (event) {
		console.log("click");
		navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
			quality : 50,

			destinationType : destinationType.DATA_URL
		});

	});
});



jQuery(document).ready(function ($) {
	$('#geo').click(function (event) {
		var options = {
			enableHighAccuracy: true,
			maximumAge: 3600000
		}
		var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

	});
});

function initMap(lat,long) {
	var myCentre = new google.maps.LatLng(lat,long);
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: myCentre,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	});

	var marker = new google.maps.Marker({
		position: myCentre,
		map: map,
	});
	marker.setMap(map);
}


function onSuccess(position) {

	var lat= position.coords.latitude ;   
	var long= position.coords.longitude ;
	initMap(lat,long);
	//alert("Latitude:"+lat+"\nLongitude:"+long);
};
function onError(error) {
	alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
}
function scan(){
	console.log("clicked");
	cordova.plugins.barcodeScanner.scan(function(result){
		//success callback
		alert(JSON.stringify(result));

	},function(error){
		//error callback
		alert(JSON.stringify(error));

	});
}

