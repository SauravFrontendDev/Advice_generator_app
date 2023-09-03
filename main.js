let quotes;
// Get Quotes Array from Api

async function getQuotes() {
  const APIURL = "https://type.fit/api/quotes";

  try {
    const response = await fetch(APIURL);
    quotes = await response.json();
    console.log(quotes);
  } catch (error) {
    console.log(error);
  }
}
