var icon = document.getElementById("icon")
var gravity = 400
var flapStrength = 300

var tickTime = 10
var velocity = 0
var interval;

function main() {
    document.body.onkeydown = function(e) {
        if (e.key == " " ||
            e.code == "Space" ||
            e.keyCode == 32
        ) {
            flap()
        }
    }
    interval = setInterval(fall, tickTime)
}

function flap() {
    velocity = flapStrength
    console.log("flap", getBottom())
}

function fall() {
    velocity -= (gravity * tickTime / 1000)
    var position = getBottom()
    var newPosition = position + (velocity * tickTime / 1000)
    if (newPosition < 0) {
        clearInterval(interval)
        alert("you lose!")
        return
    }
    icon.style.bottom = newPosition;
    var rotate = -velocity / 1
    icon.style.transform = `rotate(${rotate}deg)`
}

function getBottom() {
    var bottom = icon.style.bottom
    if (bottom === "") {
        return icon.parentElement.offsetHeight
    }
    return parseInt(bottom.split("px")[0])
}

main()