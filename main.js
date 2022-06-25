$(document).ready(function(){

    var devWidth = Math.round(window.innerWidth/10);
    let devHeight = Math.round(window.innerHeight/10);

    let _cellMax = ((devWidth * devHeight))+20;

$('#canv').css({
    "display":"grid",
    "margin":"auto",
    "justify-content":"center",
    "grid-template-columns":`repeat(${devWidth},1fr)`,
    "grid-template-rows":`repeat(${devHeight},1fr)`
    })

for (let i = 0; i <= _cellMax; i++) {

    $("<div id='cell' class='"+i+"' onclick='changeColor(this)' style='background-color: rgb(255, 255, 255);'> </div>").appendTo("#canv")

}

console.log("devWidth : "+ devWidth)
console.log("devHeight : "+ devHeight)
console.log("_cellMax : "+ _cellMax)

})

