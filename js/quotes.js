const quotes = [
{
    quote: "Stay in the middle, Like you a little. Don't want no riddle",
    movie: "New Jeans - Ditto",
},
{
    quote: "I pray on this Christmas.",
    movie: "TAEYEON - this chritmas",
},
{
    quote: "It feels like Christmas on and on",
    movie: "The boyz - Christmassy!",
},
{
    quote: "Just like the Christmas day.",
    movie: "EXO - Christmas Day",
},
{
    quote: "Don't mind if it costs a lot of my heart.",
    movie: "Yerin Baek - November song",
},
{
    quote: "I can never let'em melt away",
    movie: "SOLE - merry merry",
},
{
    quote: "Gonna be a funky glitter Christmas.",
    movie: "NMIXX - Funky Glitter Christmas",
},
{
    quote: "Everybody come have yourself a Beautiful Christmas.",
    movie: "Red Velvet & aespa",
},
{
    quote: "Snowflakes will softly be bringing.",
    movie: "TAEYEON - The Magic of Christmas Time",
},
{
    quote: "The white white snow's coming tonight.",
    movie: "BoA - Merry Chri",
}
];

const quote = document.querySelector("#quote span:first-child");
const movie = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
movie.innerText = todaysQuote.movie;