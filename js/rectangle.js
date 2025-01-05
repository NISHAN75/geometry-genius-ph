function calculateReatAngleArea(){

    const lengthInput = document.getElementById("rectangle-length");
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    const widthInput = document.getElementById("rectangle-width");
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    if (isNaN(length) || isNaN(width)) {
        alert("Please enter valid numbers for length and width.");
        return;
    }
    const area = length * width;
    const rectangleSpan = document.getElementById("rectangle-span");
    rectangleSpan.innerText = area;

}