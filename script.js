// Get all image elements with class "myImg"
var images = document.querySelectorAll(".myImg");

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and caption elements inside the modal
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Loop through each image and add a click event listener
images.forEach(function(image) {
  image.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Close the modal if user clicks anywhere outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
