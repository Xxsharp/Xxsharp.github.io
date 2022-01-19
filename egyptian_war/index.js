var hand = 52
var middle = 0
render()

function render() {
    document.getElementById("middle").innerText = middle
    document.getElementById("hand").innerText = hand
}

function flip() {
    middle++
    hand--
    render()
}
document.getElementById("flip").onclick = flip

function slap() {
    hand = hand + middle
    middle = 0
    render()
}
document.getElementById("slap").onclick = slap