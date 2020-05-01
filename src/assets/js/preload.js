var images = new Array();

function preload(array) {
	for (var i = 0; i < array.length; i++) {
		images[i] = new Image();
		images[i].src = array[i];
	}
}
preload([
	"../assets/img/circle-66.png",
	"../assets/img/circle-75.png",
]);
