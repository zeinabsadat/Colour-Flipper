const body = document.getElementsByTagName("body")[0];
const explanation = document.querySelector(".explanation");

function setColor(code){
    body.style.backgroundColor = code;
    isDarkColor(code);
}
function randomColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;

    body.style.backgroundColor = color;
    body.style.backgroundColor = color;
    
    isDarkColor(color);
    
    return color;
}

function isDarkColor(color){
    let r, g, b;
    if (color.startsWith("#")) {
        r = parseInt(color.slice(1, 3), 16);
        g = parseInt(color.slice(3, 5), 16);
        b = parseInt(color.slice(5, 7), 16);
    } else if (color.startsWith("rgb")) {
        [r, g, b] = color.match(/\d+/g).map(Number);
    }

    let luminance = 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);
    if (luminance < 0.5) {
        explanation.style.color = "white";  // Light text for dark backgrounds
    } else {
        explanation.style.color = "black";  // Dark text for light backgrounds
    }
}