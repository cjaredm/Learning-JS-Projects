//Flex Panels Open and close
const panels = document.querySelectorAll('.panel');

//Toggle Open a new panel
function toggleOpen(e) {
    //This will close all open panels before the new one is opened
    const open = document.querySelector('.open');
    if (open) {
        open.classList.remove('open');
    }
    e.target.classList.toggle('open');
}

//Toggles the fly-in text when panel opens and closes.
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

//Event Listeners for Flex Panels
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));



//Konami Code Fun thing
const pressed = [];
const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-konami.length - 1, pressed.length - konami.length);
    console.log(pressed);

    if (pressed.join('') == konami.join('')) {
        console.log('Komani Code entered successfully!');

        //Add Something in here that would be fun.
        window.location.href = "https://en.wikipedia.org/wiki/Konami_Code";
    }

});

// NEXT SECTION
// Radial Animation //http://jsfiddle.net/loktar/uhVj6/4/

const canvas = document.querySelector('#radialOne');
const context = canvas.getContext('2d');

//Starting coordinates
const x = canvas.width / 2; //middle of canvas
const y = canvas.height / 2; //middle of canvas
const radius = 90; //Radius of circle in pixels
const endPercent = 77; //Ending % of circle
let curPerc = 0; //Compared to endPercent so it knows to end.
const fullCircle = Math.PI * 2; //= 360 degrees in radians
const quarterClock = Math.PI / 2; //This equals 25% of a circle used later to move start point from 3 o'clock to 12.

context.lineWidth = 10; // Line width
context.strokeStyle = '#ad2323'; //Line Color


function animate(current) {
    context.clearRect(0, 0, canvas.width, canvas.height); //Clear Canvas to empty
    context.beginPath();
    //https://www.w3schools.com/tags/canvas_arc.asp
    context.arc(x, y, radius, -(quarterClock), ((fullCircle) * current) - quarterClock, false);
    context.stroke(); //Draw the line
    curPerc++; // +1%

    if (curPerc < endPercent) { //If the +1 didn't put it to the endPercent then do it again, starting at the current percentage
        requestAnimationFrame(() => {
            animate(curPerc / 100)
        });
    }
}

animate();