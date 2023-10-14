//reference from html
const tipText = document.getElementById("tip-text");
console.log(tipText.textContent);
const nextButton = document.getElementById("next-button");

//initialize index for current tip
let currentTipIndex = 0;
//create an empty array to store tips
let tipsArray = [];
//initialize an empty string for backgroundURL image

//function to display tips
function displayTips() {
    tipText.innerHTML = `
    ${tipsArray[currentTipIndex].text}
    `;
    currentTipIndex = (currentTipIndex +1)% tipsArray.length;
  
}

//add eventLister to  next button
nextButton.addEventListener("click", () => {
    fetch("http://localhost:3000/tips")
      .then((response) => response.json())
      .then((data) => {
        tipsArray = data;
        backgroundImageUrl = data;
        console.log(tipsArray);

        displayTips();

      })
      .catch((error) => {
        console.error("Error fetching tips:", error);
      });

});
