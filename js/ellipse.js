function calculateEllipseArea(){
    const aInput = document.getElementById("ellipse-a");
    const aText = aInput.value;
    const a = parseFloat(aText);

    const bInput = document.getElementById("ellipse-b");
    const bText = bInput.value;
    const b = parseFloat(bText);

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid numbers for a and b");
        return;
    }
    const area = 3.14159 * a * b;
    const ellipseSpan = document.getElementById("ellipse-span");
    ellipseSpan.innerText= area;

}