const DOMElements = {
  quote: document.getElementById("text"),
  author: document.getElementById("author"),
  newQuoteButton: document.getElementById("new-quote"),
};

const randomQuotes = [
  {
    quoteText: "It takes courage to grow up and   become who you really are.",
    quoteAuthor: "E.E. Cummings",
  },
  {
    quoteText: "If you cannot be silent be brilliant and thoughtful. ",
    quoteAuthor: "Byron Pulsifer",
  },
  {
    quoteText:
      "To dare is to lose ones footing momentarily. To not dare is to lose oneself. ",
    quoteAuthor: "Soren Kierkegaard",
  },
  {
    quoteText: "There is no way to happiness, happiness is the way.",
    quoteAuthor: "Thich Nhat Hanh",
  },
  {
    quoteText:
      "You cannot control what happens to you, but you can control your attitude toward what happens to you, and in that, you will be mastering change rather than allowing it to master you.",
    quoteAuthor: "Brian Tracy",
  },
  {
    quoteText:
      "If you have no respect for your own values how can you be worthy of respect from others. ",
    quoteAuthor: "Byron Pulsifer",
  },
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * 7);
  return randomQuotes[randomIndex];
}

function changeQuotes() {
  const { quoteText, quoteAuthor } = getRandomQuote();
  DOMElements.quote.innerText = quoteText;
  DOMElements.author.innerText = quoteAuthor;
}
changeQuotes();

DOMElements.newQuoteButton.onclick = changeQuotes;
