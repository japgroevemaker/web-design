

var gallery  = {
  root:document.getElementById('gallery'),

  states: {
    current: null
  },

  // initiliaze gallery
  init: function () {
    this.api();
  },



  // get images form api
  api: function () {
    var self = this;
    var request = new XMLHttpRequest();

    request.open('GET', 'https://pixabay.com/api/?key=8636082-8f8af68a2321d1c7e2992a562&q=Forest&per_page=100', true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
       // Success!
        var data = JSON.parse(request.responseText);

        self.overview(data)


      } else {
       // We reached our target server, but it returned an error

      }
    };
    request.onerror = function() {
     // There was a connection error of some sort
    };
    request.send();
  },

  // render overview
  overview: function (data){
    var self = this;

    for (var i = 0; i < data.hits.length; i++) {
      var image = document.createElement('img');
      // var bigImg = document.createElement('img');
      image.src = data.hits[i].largeImageURL;
      image.alt = data.hits[i].tags;
      image.addEventListener('click', self.detail.bind(this));
      image.classList.add('small');
      // images.id = data.hits[i].largeImageURL;
      self.root.appendChild(image);
    }
  },

  // show detail in overlay
  detail: function (event) {
    var self = this;
    this.states.current = event.target;

    document.body.classList.add('noscroll');

    var overlay = document.createElement('div');
    overlay.classList.add('overlay');

    var imgBox = document.createElement('section');
    imgBox.classList.add('imagebox');

    var closebox = document.createElement('div');
    closebox.classList.add('close');
    closebox.addEventListener('click', self.close);

    var next = document.createElement('button');
    next.addEventListener('click', function(){
      self.next()
    });
    next.classList.add('next');

    var previous = document.createElement('button');
    previous.addEventListener('click', function () {
      self.previous()
    });
    previous.classList.add('previous');

    var bigImg = document.createElement('img');
    bigImg.classList.add('bigimg');

    bigImg.src = this.states.current.src;

    this.root.appendChild(overlay);
    overlay.appendChild(closebox);
    overlay.appendChild(imgBox);
    imgBox.appendChild(previous);
    imgBox.appendChild(bigImg);
    imgBox.appendChild(next);

  },

  //show next image
  next: function () {
    var bigImg = document.querySelector('.overlay .bigimg');

    if (this.states.current.nextSibling) {
      this.states.current = this.states.current.nextSibling;
      bigImg.src = this.states.current.src;
    }
  },

  //show previous image
  previous: function () {
    var bigImg = document.querySelector('.overlay .bigimg');
    var buttonPrev = document.querySelector('.overlay .previous');

    if (this.states.current.previousSibling) {
      buttonPrev.classList.remove('none');
      this.states.current = this.states.current.previousSibling;
      bigImg.src = this.states.current.src;
    } else  {
      buttonPrev.classList.add('none');
    }
  },

  // close detail
  close: function (event) {
    event.target.parentNode.remove()
    document.body.classList.remove('noscroll');
  }

}

gallery.init();
