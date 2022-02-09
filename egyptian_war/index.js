var deck = [
    "2_of_hearts",
    "2_of_diamonds",
    "2_of_clubs",
    "2_of_spades",
    "3_of_hearts",
    "3_of_diamonds",
    "3_of_clubs",
    "3_of_spades",
    "4_of_hearts",
    "4_of_diamonds",
    "4_of_clubs",
    "4_of_spades",
    "5_of_hearts",
    "5_of_diamonds",
    "5_of_clubs",
    "5_of_spades",
    "6_of_hearts",
    "6_of_diamonds",
    "6_of_clubs",
    "6_of_spades",
    "7_of_hearts",
    "7_of_diamonds",
    "7_of_clubs",
    "7_of_spades",
    "8_of_hearts",
    "8_of_diamonds",
    "8_of_clubs",
    "8_of_spades",
    "9_of_hearts",
    "9_of_diamonds",
    "9_of_clubs",
    "9_of_spades",
    "10_of_hearts",
    "10_of_diamonds",
    "10_of_clubs",
    "10_of_spades",
    "jack_of_hearts",
    "jack_of_diamonds",
    "jack_of_clubs",
    "jack_of_spades",
    "queen_of_hearts",
    "queen_of_diamonds",
    "queen_of_clubs",
    "queen_of_spades",
    "king_of_hearts",
    "king_of_diamonds",
    "king_of_clubs",
    "king_of_spades",
    "ace_of_hearts",
    "ace_of_diamonds",
    "ace_of_clubs",
    "ace_of_spades",
]

function main() {
    hand = shuffle(deck)
    middle = []
    render()
}


function render() {
    var card = middle[middle.length - 1]
    document.getElementById("middle").innerText = middle.length === 0 ? "<empty>" : card
    document.getElementById("hand").innerText = hand.length
    var filename = card === undefined ? "./img/card.jpeg" : `./img/SVG-cards/${card}.svg`
    document.getElementById("middle_card").src = filename
}

function flip() {
    if (hand.length === 0) {
        alert("you have no cards (:")
        return
    }
    var card = hand.pop()
    middle.push(card)
    render()
}
document.getElementById("flip").onclick = flip

function slap() {
    hand.push(...middle.splice(0))
    render()
}
document.getElementById("slap").onclick = slap

function shuffle(arr) {
    arr = arr.slice()
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
main()