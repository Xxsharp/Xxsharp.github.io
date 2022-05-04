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
    var shuffled = shuffle(deck)
    p1hand = shuffled.slice(0, shuffled.length / 2)
    p2hand = shuffled.slice(shuffled.length / 2)
    middle = []
    isPlayerOneTurn = true
    render()
}


function render() {
    var card = middle[middle.length - 1]
    document.getElementById("middle").innerText = middle.length === 0 ? "<empty>" : card
    document.getElementById("p1hand").innerText = p1hand.length
    document.getElementById("p2hand").innerText = p2hand.length
    var filename = card === undefined ? "./img/card.jpeg" : `./img/SVG-cards/${card}.svg`
    document.getElementById("middle_card").src = filename
    if (p2hand.length === 0) {
        alert("player 1 wins ")
    }
    if (p1hand.length === 0) {
        alert("player 2 wins ")
    }
}

function p1() {
    if (isPlayerOneTurn === false) {
        alert("it is not your turn !@#$%^&*(*&^%")
        return
    }
    if (p1hand.length === 0) {
        alert("you have no cards (:")
        return
    }
    isPlayerOneTurn = false
    var card = p1hand.pop()
    middle.push(card)
    render()

}
document.getElementById("p1flip").onclick = p1

function p2() {
    if (isPlayerOneTurn === true) {
        alert("it is not your turn 1000%")
        return
    }

    if (p2hand.length === 0) {
        alert("you have no cards (:")
        return
    }
    isPlayerOneTurn = true
    var card = p2hand.pop()
    middle.push(card)
    render()
}
document.getElementById("p2flip").onclick = p2

function p1slap() {
    var topcard = middle[middle.length - 1]
    var secondcard = middle[middle.length - 2]
    if (!secondcard) return
    if (topcard[0] === secondcard[0]) {
        p1hand.unshift(...middle.splice(0).reverse())
        render()
    } else {
        alert("you are not supposed to slap")
        if (p1hand.length > 0) {
            var card = p1hand.pop()
            middle.unshift(card)
            render()
        }
    }
}

function p2slap() {
    var topcard = middle[middle.length - 1]
    var secondcard = middle[middle.length - 2]
    if (!secondcard) return
    if (topcard[0] === secondcard[0]) {
        p2hand.unshift(...middle.splice(0).reverse())
        render()
    } else {
        alert("you are not supposed to slap")
        if (p2hand.length > 0) {
            var card = p2hand.pop()
            middle.unshift(card)
            render()
        }

    }
}
document.getElementById("p1slap").onclick = p1slap
document.getElementById("p2slap").onclick = p2slap
document.getElementById("refresh").onclick = main

function keydown(e) {
    if (e.key === "q") {
        p1()
    }

    if (e.key === "w") {
        p1slap()
    }
    if (e.key === "o") {
        p2()
    }

    if (e.key === "p") {
        p2slap()
    }

}
document.addEventListener('keydown', keydown, false);

function shuffle(arr) {
    arr = arr.slice()
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
main()