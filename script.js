var screenshots = document.getElementsByClassName('screenshots')[0];

var image = screenshots.children;

for(let i = 0; i < image.length; i++) {
	setTimeout(function() {
		console.log(i);
		image[i].style.transform = 'translateX(-200px)';
		image[i].style.transition = '2s';
	}, 1000);
}