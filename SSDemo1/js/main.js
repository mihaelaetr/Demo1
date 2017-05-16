//lightbox 
function openGallery() {
  document.getElementById('myModal').style.display = "block";
}

function closeGallery() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//map
function myMap() {
  var mapOptions = {
    center: new google.maps.LatLng(42.666091, 23.271740),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}