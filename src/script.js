
//Lesson4: JS Timing events

function showTime() {
    
let currentDateELement = document.querySelector("#date");

currentDateELement.innerHTML = new Date();
    
} 

setTimeout(showTime, 5000);
setInterval(showTime, 1000);


function displayMilliSeconds() {
  
    let dateELement = new Date();

    let millisecondsELement = document.querySelector("#milliseconds");

    millisecondsELement.innerHTML = dateELement.getMilliseconds();
} 

setInterval(displayMilliSeconds, 100);



//Lesson3: HTML Select Element
function showSelected(event) {
    if (event.target.value.length > 0){
        if (event.target.value === "blue"){
            alert("💙")}

        if (event.target.value === "yellow"){
            alert("💛")}
            
        if (event.target.value === "red"){
            alert("❤️");}
    }  
}

    let fruitSelect = document.querySelector("#colors");
    fruitSelect.addEventListener('change', showSelected);