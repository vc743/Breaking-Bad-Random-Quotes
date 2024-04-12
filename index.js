const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
        .then(res => res.json())
        .then(data => {
            quote.innerText = data[0].quote;
            author.innerText = data[0].author;
        })
        .catch(err => {
            console.log(`Error ${err}`);
        })

})
