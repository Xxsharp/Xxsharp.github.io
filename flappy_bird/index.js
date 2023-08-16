config = {
    "gravity": 1400,
    "power": 450,
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

function ready() {
    renderElements()
    draw()
    var intervalId = window.setInterval(function() {
        tick()
    }, visualConfig.tick * 1000);
    startGame()

}