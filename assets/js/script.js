    /* //Codigo Original:
        function pintar() {
        ele = document.getElementById("ele1");
        ele.style.backgroundColor = 'yellow'; 
        } 

    ele = document.getElementById("ele1"); 
    ele.addEventListener("click", pintar); 
*/

pintar = (ele, color = "green") => ele.style.backgroundColor = color;

ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele, "yellow"));