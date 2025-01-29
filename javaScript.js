// Select the text section to apply font changes
const testFont = document.querySelector(".testFont");

// Function to set the background color
function setColor(name) {
    document.body.style.backgroundColor = name;
}

// Function to generate and set a random background color
function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = color;
}

// Function to set the font family for the 'testFont' section
function setFont(name) {
    if (testFont) {
        testFont.style.fontFamily = name; // Change the font family
    } else {
        console.error("Element with class 'testFont' not found.");
    }
}

// Function to set a random font from a predefined list
function randomFont() {
    const fonts = ['PTSerif', 'Beba', 'Open', 'Play']; // Add font family names here
    const randomIndex = Math.floor(Math.random() * fonts.length);
    setFont(fonts[randomIndex]);
}
