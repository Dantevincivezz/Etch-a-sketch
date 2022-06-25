var colorWell;
var defaultColor = "#000000";
var currentColor = "#000000";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorPicker");
    colorWell.value = defaultColor;
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();

}
function updateAll(event) {
    currentColor = event.target.value;
};


function changeColor(i){

    if(i.style.backgroundColor !== currentColor)
        {
        i.style.backgroundColor = currentColor;
        console.log(i);
        }
        else{ i.style.backgroundColor = "white"}
    
    }

    function clearAll(){
        location.reload();
        console.log('done');
    }

    function useWhite(event){
        event.target.value = '#ffffff';
    }

    