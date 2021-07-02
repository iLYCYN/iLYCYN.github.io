document.addEventListener("DOMContentLoaded", function(event) {
    let targetImage = document.querySelector("#smart-image");
	targetImage.addEventListener("click", function() {
	    alert(targetImage.classList.remove("small"))
	});
	
});
