
var button = document.querySelector('button');

function back() {
  window.history.back();
}

button.addEventListener('click', back);
