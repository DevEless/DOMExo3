let allDivs = document.getElementsByTagName("div");
let lastDiv = allDivs[allDivs.length - 1];

console.log(lastDiv.firstElementChild);


console.log(lastDiv.lastElementChild);


let firstP = lastDiv.firstElementChild;
console.log(firstP.getElementsByTagName("i")[0]);


let lastP = lastDiv.lastElementChild;
console.log(lastP.getElementsByTagName("b")[0]);


let iElement = firstP.getElementsByTagName("i")[0];
console.log(iElement.parentNode);


let bElement = lastP.getElementsByTagName("b")[0];
console.log(bElement.parentNode);


console.log(lastDiv.firstElementChild.nextElementSibling);