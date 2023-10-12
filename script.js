//initialize index for current tip
let currentTipIndex = 0;
//create an empty array to store tips
let tips = [];
//initialize an empty string for backgroundURL image
let backgroundImageUrl = ""

//function to display tips
function displayTips(index) {
    const tip = tips[index];
    if(tip) {
        tipText.textContent = tip.text;
        document.body.style.backgroundImage = `url(${tip.backgroundImage})`;
        
    }else{
        tipText.textContent = "No more tips available.";

    }
    
    
}