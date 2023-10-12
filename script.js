//reference from html
const tipText = document.getElementById("tip-text");
const nextButton = document.getElementById("next-button");


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

//add eventLister to  next button
nextButton.addEventListener("click", () => {
    currentTipIndex++;
    if(currentTipIndex >= tips.length) {
        currentTipIndex =0;
    }
    displayTips(currentTipIndex);
});

//fetch data from Json
fetch('db.json')
      .then((response) => response.json())
      .then((data) => {
        tips = data.tips;
        displayTip(currentTipIndex);
      })
      .catch((error) => {
        console.error("Error fetching tips:", error);
      });