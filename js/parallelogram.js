function calculateParallelogramArea(){
    const baseInput = document.getElementById("parallelogram-base");
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    const heightInput = document.getElementById("parallelogram-height");
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    if (isNaN(base) || isNaN(height)) {
        alert("Please enter valid numbers for base and height.");
        return;
    }
    const area = 0.5 * base * height;
   console.log(base , height , area)
   let triangleAreaSpan = document.getElementById("parallelogram-span");
   triangleAreaSpan.innerText = area;

    
}