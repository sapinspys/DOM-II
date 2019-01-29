// Your code goes here
// MOUSEOVER
const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('mouseover', function() {
    if (Math.round(Math.floor(Math.random() * 2) + 1) === 1) {
        funBusImg.setAttribute('src', `img/fun-bus.jpg`);
    } else {
        funBusImg.setAttribute('src', `img/fun-bus2.jpg`);
    }
});

// KEYDOWN
window.addEventListener('keydown',setRandomColor);
function setRandomColor(e) {
    if (e.keyCode == '13') {
        const navContainer = document.querySelector('.main-navigation').style.background = getRandomColor();
    }
};
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

//  CLICK
const destinationBtns = document.querySelectorAll('.destination .btn');
const links = Array.from(document.querySelectorAll('.nav-link'));
destinationBtns.forEach(btn => btn.addEventListener('click', function (e) {
    alert('Please contact us! Use the highlighted link on the navigation bar after clicking OK below.');
    links[3].style.borderBottom = '2px solid purple';
    links[3].style.paddingBottom = '5px';
}));

// Using preventDefault to prevent page refresh
links.forEach(link => link.addEventListener('click', function (event) {
    event.preventDefault();
}));