const prompt = require('readline-sync')
// Establish base hand totals
let userTotal = Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 11)
let dealerTotal = Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 11)
let options = ['HIT', 'STAY']
//Get username
let userName = prompt.question('Welcome to 21! What is your name?')
if (!userName) {
    userName = 'Loser'
}
console.log(`I'll be glad to take your money ${userName}.`)

function userChoices() {
    console.log(`The dealer has ${dealerTotal}.`);
    console.log(`${userName} has ${userTotal}.`);
    let userChoice = prompt.keyInSelect(options, 'Would you like to hit or stay?');
    if (userChoice === 0) {
        userTotal += Math.ceil(Math.random() * 10);
            if (userTotal > 21) {
                console.log(`You busted with a ${userTotal}! Don't quit your day job ${userName}.`);
                endGame()
            } else {
                userChoices()
            }
    } else {
        dealerTurn()
    }
}

function dealerTurn() {
    if (dealerTotal < 17) {
        dealerTotal += Math.ceil(Math.random() * 10);
        console.log(`The dealer now has ${dealerTotal}.`);
        dealerTurn()
    } else if (dealerTotal > 21) {
        console.log(`The dealer busts with ${dealerTotal}! How much you payin' them?`);
        endGame()
    } else {
        results()
    }
}

function results() {
    if (userTotal > dealerTotal && userTotal <= 21) {
        console.log(`${userName} wins! ${userName}'s hand of ${userTotal} beats the dealer's ${dealerTotal}.`);
        endGame()
    } else if (userTotal === dealerTotal) {
        console.log(`${userName}, that's a push. We'll get your money next time.`);
        endGame()
    } else {
        console.log(`The dealer's ${dealerTotal} beats ${userName}'s lousy ${userTotal}.`);
        console.log(`Thanks for the money ${userName}!`);
        endGame()
    }
}

function endGame() {
    let newGame = prompt.keyInYN(`Give us another chance to take your money ${userName}?`)
    if (newGame) {
        userTotal = Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 11);
        dealerTotal = Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 11);
        userChoices()
    } else {
        console.log(`Fine! Take your money and get out ${userName}!`);
    }
}
userChoices()