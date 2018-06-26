var scrollable = {
  scroll: function() {
    window.onscroll = function() {
      var counter = 0;
      var element = document.querySelectorAll('#container', 'section');
      var nav = document.querySelector('nav');
      var intro = document.getElementById('intro');

      // var saveButton = document.querySelector("#save-progress")

      var containerCheck = element.offsetTop;

      var scrollPosY = window.pageYOffset | document.body.scrollTop;
      console.log(scrollPosY);

      var listItems = document.querySelector('li');

      for (var i = 0; i < element.length; i++) {
        element[i].offsetHeight
        console.log(element[i].offsetHeight);

        if (element[i].offsetHeight >= 421 && scrollPosY >= 1200) {
          // counter++
          // listItems.classList.add('color')
          // saveButton.classList.add('sticky-button');
          intro.classList.add('opacity');
          nav.classList.add('sticky')
        } else {
          // counter--
          // listItems.classList.remove('color')
          // saveButton.classList.remove('sticky-button');
          intro.classList.remove('opacity');
          nav.classList.remove('sticky');
        }
      }
    }
  }
}
scrollable.scroll()

var studentWork = {
  filter: function() {
    var student = document.querySelector('.student')
    student.addEventListener('click', function() {

      var li = document.querySelectorAll('li');
      var p = document.querySelectorAll('li p');


      for (var i = 0; i < li.length; i++) {
        if (li[i].hasAttribute("data-bind") == true && student.checked == true) {
          li[i].classList.remove('none');
        } else if (li[i].hasAttribute("data-bind") == false && student.checked == true) {
          li[i].classList.add('none')
        } else {
          li[i].classList.remove('none');
        }
      }
    })
  }
}
studentWork.filter()

var readInPeace = {
  toggle: function() {
    var peaceButton = document.getElementById('peace');
    var close = document.querySelector('.close');

    function toggleText() {
      var text = document.getElementById('toggle-peace');
      text.style.display = "flex"
    }

    function closeText() {
      var text = document.getElementById('toggle-peace');
      text.style.display = "none"
    }

    peaceButton.addEventListener('click', toggleText)
    close.addEventListener('click', closeText);
  }
}
readInPeace.toggle()

var textSlider = {
  slider: function() {
    var slider = document.getElementById('slider');
    var output = document.getElementById('demo');

    output.innerHTML = "Normal"

    slider.oninput = function() {
      var myP = document.getElementById('enlarge');
      // var value = myP.getPropertyValue('font-size');
      if (slider.value < 2) {
        myP.style.fontSize = '1.2em'
        output.innerHTML = 'Normal'
      } else if (slider.value > 1 && slider.value < 3) {
        myP.style.fontSize = '2em'
        output.innerHTML = 'Large'
      } else if (slider.value > 2) {
        myP.style.fontSize = '3em';
        output.innerHTML = 'Very large'
      }
    }
  }
}
textSlider.slider()

var write = {
  written: function() {
    var y = document.getElementById("myInput");

    y.oninput = function() {
      var x = document.getElementById("myInput").value;
      document.getElementById("text").innerHTML = "You wrote: " + x;
    }
  }
}
write.written()

var draw = {
  canvas: function() {
    // create canvas element and append it to document body
    var container = document.getElementById('canvas');
    var canvas = document.createElement('canvas');
    container.appendChild(canvas);

    // some hotfixes... ( ≖_≖)
    // document.body.style.margin = 0;
    // canvas.style.position = 'fixed';

    // get canvas 2D context and set him correct size
    var ctx = canvas.getContext('2d');
    resize();

    // last known position
    var pos = {
      x: 0,
      y: 0
    };

    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', draw);
    document.addEventListener('mousedown', setPosition);
    document.addEventListener('mouseenter', setPosition);

    // new position from mouse event
    function setPosition(e) {
      pos.x = e.clientX;
      pos.y = e.clientY;
    }

    // resize canvas
    function resize() {
      ctx.canvas.width = window.outerWidth
      ctx.canvas.height = window.outerHeight
    }

    function draw(e) {
      // mouse left button must be pressed
      if (e.buttons !== 1) return;

      ctx.beginPath(); // begin

      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#c0392b';

      ctx.moveTo(pos.x, pos.y); // from
      setPosition(e);
      ctx.lineTo(pos.x, pos.y); // to

      ctx.stroke(); // draw it!
    }
  }
}
draw.canvas()

var fillInDetails = {
  details: function() {

    var huidigePagina = 0;

    var formButton = document.getElementById('overlay-form-toggle');
    var closeButton = document.getElementById('close');

    function toggleForm() {
      var form = document.getElementById('overlay-form');
      form.style.display = "block"
    }

    // function closeForm() {
    //   var form = document.getElementById('overlay-form');
    //   form.style.display = "none"
    // }

    formButton.addEventListener('click', toggleForm);
    // closeButton.addEventListener('click', closeForm);


    document.getElementById('next').addEventListener('click', function() {
      huidigePagina++
      console.log(huidigePagina);
      for (var i = 0; i < document.querySelectorAll('.section').length; i++) {
        document.querySelectorAll('.section')[i].classList.add('none')
      }

      document.getElementById(huidigePagina).classList.remove('none')
      document.getElementById(huidigePagina).classList.add('section')

    })

    document.getElementById('prev').addEventListener('click', function() {
      huidigePagina--
      for (var i = 0; i < document.querySelectorAll('.section').length; i++) {
        document.querySelectorAll('.section')[i].classList.add('none')
      }
      document.getElementById(huidigePagina).classList.remove("none")
    })

    document.getElementById('close').addEventListener('click', function() {
      huidigePagina--
      console.log(huidigePagina);
      var form = document.getElementById('overlay-form');
      form.style.display = "none"
    })
  }
}
fillInDetails.details()

var keepChecked = {
  checking: function () {

    var btn = document.getElementById('save-progress');

    function save(){
        var checkbox = document.querySelector('.check-input');
        localStorage.setItem('keepChecked', checkbox.checked);
    }

    function load(){
        var checked = JSON.parse(localStorage.getItem('keepChecked'));
        document.querySelector(".check-input").checked = checked;
    }

    function wis(){
        location.reload();
        localStorage.clear()
    }

    load();
    btn.addEventListener('click', save)
  }
}
keepChecked.checking()
