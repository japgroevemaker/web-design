var imgDiv = document.getElementById('gallery');

var request = new XMLHttpRequest();
request.open('GET', 'https://pixabay.com/api/?key=8636082-8f8af68a2321d1c7e2992a562&q=cars&orientation=vertical', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
   // Success!
    var data = JSON.parse(request.responseText);

    for (var i = 0; i < data.hits.length; i++) {
      var images = document.createElement('img');
      images.src = data.hits[i].previewURL;
      images.alt = data.hits[i].tags;
      imgDiv.appendChild(images);
    }
    doedeinterfacemaken();

  } else {
   // We reached our target server, but it returned an error

  }
};
request.onerror = function() {
 // There was a connection error of some sort
};
request.send();

function doedeinterfacemaken(){
  var allImages = document.querySelectorAll('#gallery img');
  console.log(allImages);


  for (var i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener('click', imgOverlay)
  }
}

function imgOverlay(e){

  var newNode = document.createElement('div');
  newNode.classList.add('overlay')

  imgDiv.appendChild(newNode);
  console.log('hallo');
};
