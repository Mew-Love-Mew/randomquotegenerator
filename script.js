
const quoteDisplay = document.getElementById('quote-display');
const btn = document.getElementById('generate-btn');

let quotesArray = [];

async function fetchQuotes() {
    try {
        const response = await fetch('quotes.json');
        quotesArray = await response.json();
        
        generateRandomQuote();
    } 
    catch (error) {
        quoteDisplay.innerText = "Lỗi rồi bồ ơi, không tải được dữ liệu!";
        console.error(error);
    }
}

function generateRandomQuote() {
    if (quotesArray.length === 0) return;

    const randomIndex = Math.floor(Math.random() * quotesArray.length);

    quoteDisplay.innerText = quotesArray[randomIndex].text;

}
    fetchQuotes();
    btn.addEventListener('click', generateRandomQuote);