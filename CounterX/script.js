
let displyCountingLabel=document.getElementById("disply-counting");


var x=0;


function inc(){
    x++;
    updateLabel();

}
function dec(){
    x--;
    updateLabel();

}

function rest(){
    x=0;
    updateLabel();
}
function updateLabel(){
displyCountingLabel.textContent="X="+String(x);
}