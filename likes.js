var count = 0;
var countElement = document.querySelector("#count");

function addLikes() {
    count++;
    countElement.innerText = count; 
    console.log(count);
}