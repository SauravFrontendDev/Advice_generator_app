const shuffleBtn = document.getElementById("shuffle");
const adviceID = document.getElementById("adviceID");
const adviceText = document.getElementById("adviceText");

let quote;
// Get Quotes Array from Api

async function getNewQuote() {
  const APIURL = "https://api.adviceslip.com/advice";

  try {
    const response = await fetch(APIURL);
    quote = await response.json();
    console.log(quote);
    adviceText.textContent = quote["slip"].advice;
    adviceID.textContent = quote["slip"].id;
    // Show on the screen
  } catch (error) {
    console.log(error);
  }
}

// On Load
getNewQuote();

// On Shuffle Button Click
shuffleBtn.addEventListener("click", getNewQuote);
