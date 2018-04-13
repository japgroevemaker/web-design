

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

    var buttonBox = document.createElement('div');
    buttonBox.classList.add('buttonbox');

    var previousTwo = document.createElement('button');
    previousTwo.addEventListener('click', function () {
      self.previous()
    });
    previousTwo.classList.add('previoustwo');

    var bigImg = document.createElement('img');
    bigImg.classList.add('bigimg');

    var text = document.createElement('p');

    bigImg.src = this.states.current.src;
    text.alt = this.states.current.alt;

    var tags = document.createTextNode(this.states.current.alt);

    text.appendChild(tags);

    this.root.appendChild(overlay);
    overlay.appendChild(closebox);
    overlay.appendChild(imgBox);
    buttonBox.appendChild(previous);
    imgBox.appendChild(bigImg);
    imgBox.appendChild(buttonBox);
    buttonBox.appendChild(previousTwo);
    buttonBox.appendChild(next);
    imgBox.appendChild(text);

  },

  //show next image
  next: function () {
    var bigImg = document.querySelector('.overlay .bigimg');
    var buttonPrev = document.querySelector('.overlay .previous');
    var buttonNext = document.querySelector('.overlay .next');

    if (this.states.current.nextSibling.tagName == "IMG") {
      this.states.current = this.states.current.nextSibling;
      bigImg.src = this.states.current.src;
    }

    if (this.states.current.nextSibling && !this.states.current.nextSibling.nextSibling) {
      buttonNext.classList.add("disabled-arrow");
    } else {
      buttonPrev.classList.remove("disabled-arrow");
    }
  },

  //show previous image
  previous: function () {
    var bigImg = document.querySelector('.overlay .bigimg');
    var buttonPrev = document.querySelector('.overlay .previous');
    var buttonNext = document.querySelector('.overlay .next');

    if (this.states.current.previousSibling.tagName == "IMG") {
      this.states.current = this.states.current.previousSibling;
      bigImg.src = this.states.current.src;
      // buttonPrev.classList.remove('none');
    }
    console.log("yes");
    if (this.states.current.previousSibling && !this.states.current.previousSibling.previousSibling) {
      buttonPrev.classList.add("disabled-arrow");
    } else {
      buttonNext.classList.remove("disabled-arrow");
    }
  },

  // close detail
  close: function (event) {
    event.target.classList.add("close-animation");
    setTimeout(function() {
      event.target.parentNode.remove();
    }, 300);

    document.body.classList.remove('noscroll');
  }

}

gallery.init();
