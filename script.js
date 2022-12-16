//getElementById
const demoId = document.getElementById("demo");
console.log(demoId);

demoId.style.background = "yellow";


///getByClassName
const demoClass = document.getElementsByClassName("item");
for (i = 0; i < demoClass.length; i++) {
    demoClass[i].style.border = '2px solid orange';
}