
let fullName=prompt("Enter your full name pleas !");
document.getElementById("user-name").textContent="Welcome :"+fullName;


function active(){
    let inputText = document.getElementById("text-input").value; // Use .value to get input text
    document.getElementById("output").textContent =inputText+" Form text box";
}