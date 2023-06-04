let myButton = document.querySelector('button');
myButton.addEventListener('click',myFunc);

function myFunc(){
    // alert("how are you ?");
    let greet = prompt("enter your greeting!");
    myButton.textContent = "Hello Mahesh "+greet;
}