
let userGuessingNumber;


document.getElementById("user-guessing-number").addEventListener("input",function(){
    this.select(); // Selects all text in the input field

    if(this.value>6)
    {
        this.value=6;
    }
    else if(this.value<1)
    {
this.value=1;
    }

    userGuessingNumber=this.value;

console.log(userGuessingNumber);
});

document.getElementById("dice").addEventListener("click", function () {

        if ( document.getElementById("user-guessing-number").value=="") {
        
            // إعادة التركيز على الحقل النصي
            document.getElementById("user-guessing-number").focus();
            
            return;  // إيقاف تنفيذ الكود
        }

var random_face=0;    
for(let i=0;i<6;i++){
    setTimeout(() => {

random_face = Math.floor(Math.random() * 6) + 1;
this.src=`resources/Dice/inverted-dice-${random_face}.png`  

this.style.transform = `scale(1.10) rotate(${360 *(i+1)}deg)`; // Rotate by 360 degrees each iteration

if(i==5)
{
    if(userGuessingNumber==random_face)
    {
        document.querySelector("main").style.backgroundColor="green";

    }
    else{
        document.querySelector("main").style.backgroundColor="red";

    }

}

    },300*i);
}

});


