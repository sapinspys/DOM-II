// Your code goes here
// MOUSEOVER
const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('mouseover', () => {
    if (Math.round(Math.floor(Math.random() * 2) + 1) === 1) {
        funBusImg.setAttribute('src', `img/fun-bus.jpg`);
    } else {
        funBusImg.setAttribute('src', `img/fun-bus2.jpg`);
    }
});

// KEYDOWN
window.addEventListener('keydown', event => {
    if (event.key == 'c') {
        const navContainer = document.querySelector('.main-navigation').style.background = getRandomColor();
        document.body.style.background = getRandomColor();
    }
});
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
destinationBtns.forEach(btn => btn.addEventListener('click', () => {
    alert('Please contact us! Use the highlighted link on the navigation bar after clicking OK below.');
    links[3].style.borderBottom = '2px solid purple';
    links[3].style.paddingBottom = '5px';
}));

// DBLCLICK
window.addEventListener('dblclick', () => {
    const navContainer = document.querySelector('.main-navigation').style.background = 'white';
    document.body.style.background = 'white';
});

// MOUSEMOVE
links.forEach(link => link.addEventListener('mousemove', () => {
    link.style.color = getRandomColor();
}));

// Using preventDefault to prevent page refresh
links.forEach(link => link.addEventListener('click', function (event) {
    event.preventDefault();
}));
