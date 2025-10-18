
//Lesson5: Using a JS Library (Moment.js)
      let todayElement = document.querySelector("#current-date");
      let today = moment().format("dddd, MMMM D, YYYY");
      todayElement.innerHTML = `Today is ${today}`;

      let futureElement = document.querySelector("#future-date");
      let future = moment()
        .add(10, "years")
        .format("dddd MMMM D, YYYY, h:mm:ss A");
      futureElement.innerHTML = `10 years from now, it will be ${future}`;
    




//Lesson4: JS Timing events

function showTime() {
    
let currentDateELement = document.querySelector("#date");

currentDateELement.innerHTML = new Date();

setTimeout(showTime, 1000);
    
} 

setInterval(showTime, 5000);


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