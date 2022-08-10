function main() {
    var shuffled = shuffle(deck)
    p1hand = shuffled.slice(0, shuffled.length / 2)
    p2hand = shuffled.slice(shuffled.length / 2)
    middle = []
    isPlayerOneTurn = true
    isRoyalMode = false
    render()
}


function render() {
    var card = middle[middle.length - 1]
    document.getElementById("middle").innerText = middle.length === 0 ? "<empty>" : card
    document.getElementById("p1hand").innerText = p1hand.length
    document.getElementById("p2hand").innerText = p2hand.length
    var filename = card === undefined ? "./img/card.jpeg" : `./img/SVG-cards/${card}.svg`
    document.getElementById("middle_card").src = filename
        //update player turn
        //if it's not player 1 turn then make it say player two's turn
    if (!isPlayerOneTurn) {
        document.getElementById("myturn").innerText = "p2"
    } else {
        document.getElementById("myturn").innerText = "p1"
    }
    if (p2hand.length === 0) {
        alert("player 1 wins ")
    }
    if (p1hand.length === 0) {
        alert("player 2 wins ")
    }
}

function flip(isYourTurn, hand) {
    if (!isYourTurn) {
        alert("it is not your turn !@#$%^&*(*&^%")
        return
    }
    if (hand.length === 0) {
        alert("you have no cards (:")
        return
    }
    isPlayerOneTurn = !isPlayerOneTurn
    var card = hand.pop()
    middle.push(card)
    maybeHandleRoyal(card)
    render()

}

function maybeHandleRoyal(card) {
    if (card[0] === "j") {
        alert(" one chance ")
        isRoyalMode = true
    } else {
        if (isRoyalMode) {
            //the person that played the jax gets all the cards from the middle
            if (isPlayerOneTurn) {
                takeCards(p1hand)
            } else {
                takeCards(p2hand)
            }
        }
    }
}

function p1flip() {
    flip(isPlayerOneTurn, p1hand)
}
document.getElementById("p1flip").onclick = p1flip

function p2flip() {
    flip(!isPlayerOneTurn, p2hand)
}
document.getElementById("p2flip").onclick = p2flip

function takeCards(hand) {
    hand.unshift(...middle.splice(0).reverse())
}

function slap(hand) {
    var topcard = middle[middle.length - 1]
    var secondcard = middle[middle.length - 2]
    var thirdcard = middle[middle.length - 3]
    if (!topcard)
        return
    if (thirdcard !== undefined) {


        if (thirdcard[0] === topcard[0]) {
            takeCards(hand)
            render()
            return
        }
    }
    if (!secondcard) return
    if (topcard[0] === secondcard[0]) {
        takeCards(hand)
        render()
    } else {
        alert("you are not supposed to slap")
        if (hand.length > 0) {
            var card = hand.pop()
            middle.unshift(card)
            render()
        }
    }
}

function p1slap() {
    slap(p1hand)
}

function p2slap() {
    slap(p2hand)
}
document.getElementById("p1slap").onclick = p1slap
document.getElementById("p2slap").onclick = p2slap
document.getElementById("refresh").onclick = main

function keydown(e) {
    if (e.key === "q") {
        p1flip()
    }

    if (e.key === "w") {
        p1slap()
    }
    if (e.key === "o") {
        p2flip()
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