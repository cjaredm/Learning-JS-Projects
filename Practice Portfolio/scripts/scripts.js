//Flex Panels Open and close

const panel = document.querySelectorAll('.panel');
const panelOne = document.querySelector('panel1');
const panelTwo = document.querySelector('panel2');
const panelThree = document.querySelector('panel3');

//Toggle Open a new panel
function toggleOpen(e) {

    //This will close all open panels before the new one is opened
    var open = document.querySelector('.open');
    if (open) {
        open.classList.remove('open');
    }

    /*while (open.length) {
        open[0].classList.remove('open');
    }*/
    e.target.classList.toggle('open');
}
//Trying to figure out how to be able to toggle close an open panel
function reset() {
    this.classList.toggle('open');
}

//Toggles the flyin text when panel opens and closes.
function toggleActive(e) {

    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

//Event Listeners for Flex Panels
panel.forEach(panel => panel.addEventListener('dblclick', reset));
panel.forEach(panel => panel.addEventListener('click', toggleOpen));
panel.forEach(panel => panel.addEventListener('transitionend', toggleActive));



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