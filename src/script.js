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