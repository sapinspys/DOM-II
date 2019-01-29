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
    alert(`Wooooooo! Congratulations. Let's get you signed up! Use the underlined link on the navigation bar after clicking OK below.`);
    links[3].style.borderBottom = '2px double black';
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

// LOAD
window.addEventListener("load", function(event) {
    console.log("This page was loaded successfully!");
});

// FOCUS and BLUR
const homeBtn = document.querySelector('.nav-link');
const logo = document.querySelector('.logo-heading');

homeBtn.addEventListener('focus', (event) => {
    logo.textContent = `Welcome home!`;
}, true);

homeBtn.addEventListener('blur', (event) => {
    logo.textContent = 'Fun Bus';
}, true);

// SCROLL
const navBox = document.querySelector('.nav');
const scrollCounter = document.createElement('a');
navBox.appendChild(scrollCounter);

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    scrollCounter.textContent = `Position: ${Math.round(scroll_pos)}`;
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

// SELECT
window.addEventListener('keydown', (event) => {
    if (event.key === 'x') {
        navBox.style.width = '70%';
        const secretInput = document.createElement('input');
        secretInput.setAttribute('value', 'Highlight Me..');
        secretInput.style.width = '20%'; 
        navBox.prepend(secretInput);

        secretInput.addEventListener('select', () => {
            console.log('You have entered the secret bus page.');
            logo.textContent = 'Secret Bus';
            const navContainer = document.querySelector('.main-navigation').style.background = getRandomColor();
            document.body.style.background = getRandomColor();
        });
    }
});





// Using preventDefault to prevent page refresh
links.forEach(link => link.addEventListener('click', function (event) {
    event.preventDefault();
}));
