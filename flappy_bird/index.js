config = {
    "gravity": 1400,
    "power": 540,
    "pipeSpeed": 600,
    "pipeVerticalGapPx": 120,
    "birdSize": 40,
    "pipeReappearPx": 1000,
    "pipeSpacingX": 800,
    "pipeSpacingXVariance": [
        0.7,
        0.9
    ],
    "pipeHeightYVariance": [
        0.2,
        0.7
    ]
}
state = {
    gameIsRunning: false,
    speed: 100,
    altitude: 0,
    score: 0,
    pipes: [],
};

visualConfig = {
    tick: 0.005,
    worldTranslatePercent: 20,
    pipeWidthPx: 200,
    pipeBoxWidth: 29,
    pipeBoxLeft: 85,
    birdImgOffsetBottomPx: 21,
    birdImgOffsetRightPx: 25,
    maxRotateDeg: 120,
    rotateThreshold: 180,
};
[
    config,
    state,
    visualConfig,
    renderElements,
    updateBird,
    ready,
    assignButtons,
    startTick,
    flap,
    tick,
    updatePipes,
    isHittingAPipe,
    draw,
    getRotate,
    endGame,
    startGame,
    makeFirstPipe,
    drawPipes,
    drawPipe,
    drawScore,
    drawBird,
    maybeMakeNewPipe
]

function ready() {
    renderElements()
    assignButtons()
    draw()
    startGame()
    startTick()
}

function assignButtons() {
    //when the space button is pressed the brid flaps and the mouse button when clicked it restarts the game.
    document.body.onkeydown = function(e) {
        if (e.key == " " ||
            e.code == "Space" ||
            e.keyCode == 32
        ) {
            flap()
        }
    }
    document.body.onkeydown = function(e) {
        if (e.key == " " ||
            e.code == "" ||
            e.keyCode == 32
        ) {
            flap()
        }
    }
    document.body.onclick = function(e) {
        startGame()
    }
}

function startTick() {
    setInterval(tick, 1)

}

function tick() {
    //the pipes have to move the bird the background and the score 
    if (!state.gameIsRunning) {
        return
    }
    maybeMakeNewPipe()
    updatePipes()
    drawPipes()
    updateBird()
    drawBird()
    state.score += 0.05
    drawScore()
    if (isHittingAPipe()) {
        endGame()
    }
    if (state.altitude < 0) {
        endGame()
    }



}

function startGame() {
    state.gameIsRunning = true
    flap()
    state.pipes = []
    state.altitude = 0
    state.score = 0

}

function drawScore() {
    var scorediv = document.getElementById("score")
    scorediv.innerText = state.score.toFixed(2)
}