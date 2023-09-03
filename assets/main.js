const adviceText = document.getElementById("adviceText");
const adviceID = document.getElementById("adviceID");
const shuffle = document.getElementById("shuffle");

let quote = "";

const getQuote = async () => {
  const ADVICEURL = "https://api.adviceslip.com/advice";

  try {
    const result = await fetch(ADVICEURL);
    quote = await result.json();
  } catch (error) {
    console.log(error);
    1;
  } finally {
    adviceText.textContent = quote["slip"].advice;
    adviceID.textContent = `#${quote["slip"].id}`;
  }
};

getQuote();
shuffle.addEventListener("click", getQuote);
