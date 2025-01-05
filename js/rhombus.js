function calculateRhombusArea(){
    const d1Input = document.getElementById("rhombus-d1");
    const d1Text = d1Input.value;
    const d1 = parseFloat(d1Text);
    const d2Input = document.getElementById("rhombus-d2");
    const d2Text = d2Input.value;
    const d2 = parseFloat(d2Text);
    if (isNaN(d1) || isNaN(d2)) {
        alert("Please enter valid numbers for d1 and d2.");
        return;
    }
    const area = 0.5 * d1 * d2;
    const rhombusSpan = document.getElementById("rhombus-span");
    rhombusSpan.innerText = area;
}