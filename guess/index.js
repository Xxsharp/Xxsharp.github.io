var form = document.getElementById("form")
var input = document.getElementById("input")
var number = Math.random()
number = 100 * number
number = Math.ceil(number)


function submit(e) {
    e.preventDefault()
    var guess = input.value
    guess = parseInt(guess)
    if (guess < number) {
        alert("too small")
    } else if (guess > number) {
        alert("too big")
    } else {
        alert("you win!!!!")
    }
    input.value = "";
    return false
}
form.onsubmit = submit