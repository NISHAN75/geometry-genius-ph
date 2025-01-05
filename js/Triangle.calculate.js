function calculateTriangleArea(){

   const triangleBaseInput = document.getElementById("triangle-base");
   const triangleBaseText = triangleBaseInput.value;
   const base = parseFloat(triangleBaseText);
   const triangleHeightInput = document.getElementById("triangle-height");
   const triangleHeighText = triangleHeightInput.value;
   const height = parseFloat(triangleHeighText);
   if (isNaN(base) || isNaN(height)) {
        alert("Please enter valid numbers for base and height.");
        return;
    }
   const area = 0.5 * base * height;
   console.log(base , height , area)
   let triangleAreaSpan = document.getElementById("triangle-span");
   triangleAreaSpan.innerText = area;
}
