var numRows = 12
var numColumns = 12
var minSpeed = 100
var maxSpeed = 222
var timeBeforeNewGame = 1500
var startingNumBoxes = 4;

var rowNumber
var columnNumber
var isForward
var numBoxes
var target

function main() {
    clone("box", numColumns)
    clone("row", numRows)
    newGame()

    var julius = document.getElementById("julius")
    julius.onmousedown = juliuss
}

function clone(className, numCopies) {
    var element = document.getElementsByClassName(className)[0]
    for (var i = 1; i < numCopies; i++) {
        var clone = element.cloneNode(true)
        var parent = element.parentElement
        parent.appendChild(clone)
    }
}

function selectBox(rowNumber, columnNumber) {
    var row = document.getElementsByClassName("row")[rowNumber]
    var box = row.getElementsByClassName("box")[columnNumber]
    box.classList.add("selected")
}

function clearRow(rowNumber) {
    for (var i = 0; i < numColumns; i++) {
        unselectBox(rowNumber, i)
    }
}

function unselectBox(rowNumber, columnNumber) {
    var row = document.getElementsByClassName("row")[rowNumber]
    var box = row.getElementsByClassName("box")[columnNumber]
    box.classList.remove("selected")
}

function selectBoxes(rowNumber, columnNumber, numBoxes) {
    clearRow(rowNumber)
    for (var i = 0; i < numBoxes; i++) {
        selectBox(rowNumber, columnNumber + i)
    }
}

function run() {
    if (numBoxes <= 0) {
        alert("you lose hahaha! try again")
        setTimeout(newGame, timeBeforeNewGame)
        return
    }
    if (rowNumber < 0) {
        alert("impossible how did yyoou win!")

        setTimeout(newGame, timeBeforeNewGame)
        return
    }

    if (isForward) {
        columnNumber++
        if (columnNumber === numColumns - numBoxes) {
            isForward = false
        }
    } else {
        columnNumber--
        if (columnNumber === 0) {
            isForward = true
        }
    }
    selectBoxes(rowNumber, columnNumber, numBoxes)
    var factor = 10000
    var speed = (factor / maxSpeed * (numRows - 1 - rowNumber) + factor / minSpeed * rowNumber) / (numRows - 1)
    setTimeout(run, speed)
}

function juliuss() {
    console.log(target, columnNumber, rowNumber)
    if (target !== null) {
        var blocksToLose = null;
        if (columnNumber < target) {
            blocksToLose = target - columnNumber
            numBoxes -= blocksToLose
            loseBlocks(blocksToLose, columnNumber)
            columnNumber = target
        } else if (columnNumber > target) {
            blocksToLose = columnNumber - target
            numBoxes -= blocksToLose
            loseBlocks(blocksToLose, columnNumber + numBlocks)
        }
    }
    console.log(numBoxes)
    target = columnNumber
    selectBoxes(rowNumber, columnNumber, numBoxes)
    rowNumber--
}

function loseBlocks(blocksToLose, columnNumber) {
    return
    loseBlocksHelper(blocksToLose, columnNumber, rowNumber)
}

function loseBlocksHelper(blocksToLose, columnNumber, rowNumber) {
    for (var i = 0; i < blocksToLose; i++) {
        if (rowNumber > 0) unselectBox(rowNumber - 1, columnNumber + i)
        if (rowNumber < numRows) selectBox(rowNumber, columnNumber + i)
    }
    if (rowNumber === numRows - 1) return
    var factor = 10000
    setTimeout(() => loseBlocksHelper(blocksToLose, columnNumber, rowNumber + 1), factor / loseBlocksSpeed)
}


function newGame() {
    rowNumber = numRows - 1
    columnNumber = 0
    isForward = true
    numBoxes = startingNumBoxes
    target = null
    for (var i = 0; i < numColumns; i++) {
        selectBoxes(i, 0, 0)
    }

    run()
}
document.addEventListener("DOMContentLoaded", main)