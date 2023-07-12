var icon = document.getElementById("icon")
var pipesTemplate = document.getElementById("template")
var allPipes = [pipesTemplate]
var gravity = 400
var flapStrength = 300
var pipeSpeed = 5
var numPipes = 3
var pipesDistance = 400

var tickTime = 10
var velocity = 0
var interval;

function main() {
    addPipes()
    document.body.onkeydown = function(e) {
        if (e.key == " " ||
            e.code == "Space" ||
            e.keyCode == 32
        ) {
            flap()
        }
    }
    interval = setInterval(tick, tickTime)
}

function addPipes() {
    for (i = 1; i < numPipes; i++) {
        const pipes = pipesTemplate.cloneNode(true);
        const left = document.body.offsetWidth + pipesDistance * i
        pipes.style.left = `${left}px`
        pipesTemplate.parentElement.appendChild(pipes)
        allPipes.push(pipes)
    }
}

function tick() {
    fall()
    moveAllPipes()
}

function moveAllPipes() {
    allPipes.forEach(movePipes)
}

function movePipes(pipes) {
    var left = getPx(pipes.style.left) || 0;
    left -= pipeSpeed;
    if (left <= -pipes.offsetWidth) {
        const offset = Math.floor(pipes.offsetWidth * (1 + Math.random()))
        left = pipes.parentElement.offsetWidth + offset;
    }
    pipes.style.left = `${left}px`;
}

function touchingPipes() {
    // TODO
    const birdLeft = icon.offsetLeft
    for (let i = 0; i < allPipes.length; i++) {
        const pipes = allPipes[i]
        const left = getPx(pipes.style.left) || 0
        if ((left + 100) > birdLeft && (left - 100) < (birdLeft + icon.offsetWidth))
            return true;
    }
    return false;
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
        alert("touch bottom - you lose!")
        return
    }
    if (touchingPipes()) {
        clearInterval(interval)
        alert("touch pipe - you lose!")
        return
    }
    icon.style.bottom = newPosition;
    var rotate = -velocity / 1
    icon.style.transform = `rotate(${rotate}deg)`
}

function getBottom() {
    return getPx(icon.style.bottom) || icon.parentElement.offsetHeight
}

function getPx(st) {
    if (st === "") return null;
    return parseInt(st.split("px")[0])
}

main()