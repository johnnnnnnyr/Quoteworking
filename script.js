let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "VqTJH5iFm+eaVMB2Eibyyw==lXktjEyf3sGpOEBf"; // replace with your API key

let getQuote = () => {
  fetch(url, {
    headers: {
      'X-Api-Key': apiKey
    }
  })
    .then((data) => data.json())
    .then((items) => {
      const randomQuote = items[0]; // select the first quote from the array
      quote.innerText = randomQuote.quote;
      author.innerText = randomQuote.author;
    })
    .catch((error) => {
      console.error(error);
      // handle error here, for example, display an error message to the user
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);