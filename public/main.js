// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)

const deck = []
const suitOfCards = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
const rankOfCards = ['Ace', 'Deuce', 'Trey', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']

for (let i = 0; i < suitOfCards.length; i++) {
  for (let j = 0; j < rankOfCards.length; j++) {
    deck.push(rankOfCards[j] + ' of ' + suitOfCards[i])
  }
}

const shuffleButtonClickEvent = () => {
  const card = deck.pop()
  const newLi = document.createElement('li')
  newLi.textContent = card
  document.querySelector('.dealt-cards').appendChild(newLi)
  console.log(card)
}
document.addEventListener('DOMContentLoaded')
document.querySelector('#shuffle-button').addEventListener('click', shuffleButtonClickEvent)
