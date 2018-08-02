// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)

const deck = []
const suitOfCards = ['spades', 'hearts', 'diamonds', 'clubs']
const rankOfCards = ['ace', 'deuce', 'trey', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

for (let i = 0; i < suitOfCards.length; i++) {
  for (let j = 0; j < rankOfCards.length; j++) {
    deck.push(rankOfCards[j] + ' of ' + suitOfCards[i])
  }
}

const shuffleButtonClickEvent = () => {
  const card = deck.pop()

  // Build a list item and append it to the list in the page.

  console.log(card)
}

document.querySelector('#shuffle-button').addEventListener('click', shuffleButtonClickEvent)
