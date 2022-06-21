$(document).ready(function(){

    // const canvas = $('#canvas');
    var devWidth = window.innerWidth; // x = vw
    var devHeight = window.innerHeight; // y = vh

    let _devWidth = Math.round(devWidth/10);  // a = round(100vw/10)
    let _devHeight = Math.round(devHeight/10); // b = round(100vh/10)

    let _cellMax = ((devWidth * devHeight)/100)+20;

$('#canv').css({
    "display":"grid",
    "margin":"auto",
    "justify-content":"center",
    "grid-template-columns":`repeat(${_devWidth},1fr)`,
    "grid-template-rows":`repeat(${_devHeight},1fr)`
    })
// "+_devWidth+"
// "+_devHeight+"

for (let i = 0; i <= _cellMax; i++) {

    $("<div id='cell' class='"+i+"' onclick='changeColor(this);'> </div>").appendTo("#canv")

}

console.log("devWidth : "+ devWidth)
console.log("devHeight : "+ devHeight)
console.log("_devWidth : "+ _devWidth)
console.log("_devHeight : "+ _devHeight)
console.log("_cellMax : "+ _cellMax)

// ${}




})

