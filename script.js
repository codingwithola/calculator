//Number Buttons

const oneButton = document.getElementById("number-one-key");
const twoButton = document.getElementById("number-two-key");
const threeButton = document.getElementById("number-three-key");
const fourButton = document.getElementById("number-four-key");
const fiveButton = document.getElementById("number-five-key");
const sixButton = document.getElementById("number-six-key");
const sevenButton = document.getElementById("number-seven-key");
const eightButton = document.getElementById("number-eight-key");
const nineButton = document.getElementById("number-nine-key");
const zeroButton = document.getElementById("zero-key");
const decimalButton = document.getElementById("decimal-key");

//Operator Buttons

const squareRootButton = document.getElementById("square-root");
const offButton = document.getElementById("off-key");
const mcButton = document.getElementById("mc-key");
const mrButton = document.getElementById("mr-key");
const mMinusButton = document.getElementById("m-minus-key");
const mPlusButton = document.getElementById("m-plus-key");
const divisionButton = document.getElementById("division-key");
const percentButton = document.getElementById("percent-key");
const equalButton = document.getElementById("equal-key");
const additionButton = document.getElementById("addition-key");
const numberButtons = document.querySelectorAll(".number .numbers");
const lastColumnButton = document.getElementById("last-column");
const authorSignatureButton = document.getElementById("author-signature");
const topHeaderButton = document.getElementById("top-header");

// Button Event Listeners

additionButton.addEventListener( "mouseover", (event) => {
additionButton.style.backgroundColor = "maroon";
additionButton.style.color = "white";
setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
additionButton.style.color = "black";
}, 700

)
}

);

squareRootButton.addEventListener( "mouseover", (event) => {
squareRootButton.style.backgroundColor = "maroon";
squareRootButton.style.color = "white";
setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
squareRootButton.style.color = "black";
}, 700)

}

);

oneButton.addEventListener( "mouseover", (event) => {
oneButton.style.backgroundColor = "maroon";
oneButton.style.color = "white";
setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
oneButton.style.color = "black";
}, 700)

}

);

twoButton.addEventListener( "mouseover", (event) => {
twoButton.style.backgroundColor = "maroon";
twoButton.style.color = "white";
setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
twoButton.style.color = "black";
}, 700)

}

);

threeButton.addEventListener( "mouseover", (event) => {
threeButton.style.backgroundColor = "maroon";
threeButton.style.color = "white";
setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
threeButton.style.color = "black";
}, 700)

}

);

fourButton.addEventListener( "mouseover", (event) => {
fourButton.style.backgroundColor = "maroon";
fourButton.style.color = "white";
setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
fourButton.style.color = "black";
}, 700)

}

);

fiveButton.addEventListener( "mouseover", (event) => {
fiveButton.style.backgroundColor = "maroon";
fiveButton.style.color = "white";
setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
fiveButton.style.color = "black";
}, 700)

}

);

sixButton.addEventListener( "mouseover", (event) => {
sixButton.style.backgroundColor = "maroon";
sixButton.style.color = "white";
setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
sixButton.style.color = "black";
}, 700)

}

);

sevenButton.addEventListener( "mouseover", (event) => {
sevenButton.style.backgroundColor = "maroon";
sevenButton.style.color = "white";
setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
sevenButton.style.color = "black";
}, 700)

}

);

eightButton.addEventListener( "mouseover", (event) => {
eightButton.style.backgroundColor = "maroon";
eightButton.style.color = "white";
setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
eightButton.style.color = "black";
}, 700)

}

);

nineButton.addEventListener( "mouseover", (event) => {
nineButton.style.backgroundColor = "maroon";
nineButton.style.color = "white";
setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
nineButton.style.color = "black";
}, 700)

}

);

zeroButton.addEventListener( "mouseover", (event) => {
zeroButton.style.backgroundColor = "maroon";
zeroButton.style.color = "white";
setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
zeroButton.style.color = "black";
}, 700)

}

);

lastColumnButton.addEventListener( "mouseover", (event) => {
lastColumnButton.style.backgroundColor = "maroon";
lastColumnButton.style.color = "white";
setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
lastColumnButton.style.color = "black";
}, 700)

}

);

authorSignatureButton.addEventListener( "mouseover", (event) => {
authorSignatureButton.style.backgroundColor = "maroon";
authorSignatureButton.style.color = "white";
setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
authorSignatureButton.style.color = "black";
}, 700)

}

);

topHeaderButton.addEventListener( "mouseover", (event) => {
topHeaderButton.style.backgroundColor = "maroon";
topHeaderButton.style.color = "white";
setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
topHeaderButton.style.color = "black";
}, 700)

}

);
/* Attempting to add a color change when hovering over number elements

Not getting the right output currently

Need more research on DOM manipulation

Do Odin Project Array methods, DOM Manipulation and Etch-a-Sketch lessons
*/

/* numberButtons.addEventListener( "mouseover", (event) => {
numberButtons.style.backgroundColor = "maroon";

setTimeout( () => {
event.target.style.backgroundColor = "lightblue"
}, 400)

}

);

*/