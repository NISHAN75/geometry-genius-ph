function calculatePentagonArea(){
    const pInput = document.getElementById("pentagon-p");
    const pText = pInput.value;
    const p = parseFloat(pText);
    const baseInput = document.getElementById("pentagon-b");
    const bText = baseInput.value;
    const b = parseFloat(bText);
    if (isNaN(p) || isNaN(b)) {
        alert("Please enter valid numbers for p and b");
        return;
    }
    const area = 0.5 * p * b;
    const pentagogSpan = document.getElementById("pentagon-span");
    pentagogSpan.innerText = area;
        
}