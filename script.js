let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.api-ninjas.com/v1/quotes?category=inspirational";
const apiKey = "VqTJH5iFm+eaVMB2Eibyyw==lXktjEyf3sGpOEBf";

let getQuote = () => {
  fetch(url, {
    headers: {
      'X-Api-Key': apiKey
    }
  })
    .then((data) => data.json())
    .then((items) => {
      const randomQuote = items[0];
      quote.innerText = randomQuote.quote;
      author.innerText = randomQuote.author;
    })
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);