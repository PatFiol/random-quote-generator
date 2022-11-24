const quoteContainer = document.getElementById('quote-generator')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const newQuoteBtn = document.getElementById('new-quote')

const twitterBtn = document.getElementById('twitter')
const facebookBtn = document.getElementById('facebook')
const redditBtn = document.getElementById('reddit')
const linkedinBtn = document.getElementById('linkedin')

// Show New Quote
function newQuote() {

	const Quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
  // Check if Author field is blank and replace it with 'Unknown'
	if (!Quote.author) {
		authorText.textContent = 'Unknown'
	} else {
		authorText.textContent = Quote.author
	}
	quoteText.textContent = Quote.text
}

// Share Quote
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
	window.open(twitterUrl, '_blank')
}
function facebookQuote() {
	const facebookUrl = `https://facebook.com/share/php?text=${quoteText.textContent} - ${authorText.textContent}`
	window.open(facebookUrl, '_blank')
}
function redditQuote() {
	const redditUrl = `https://reddit.com/submit?text=${quoteText.textContent} - ${authorText.textContent}`
	window.open(redditUrl, '_blank')
}
function linkedinQuote() {
	const linkedinUrl = `https://linkedin.com/sharing/share-offsite/?text=${quoteText.textContent} - ${authorText.textContent}`
	window.open(linkedinUrl, '_blank')
}


// Event Listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)
facebookBtn.addEventListener('click', facebookQuote)
redditBtn.addEventListener('click', redditQuote)
linkedinBtn.addEventListener('click', linkedinQuote)

// On Load
newQuote()
