var numRows = 12
var numColumns = 12
var minSpeed = 100
var maxSpeed = 222
var timeBeforeNewGame = 1500

var rowNumber
var columnNumber
var isForward

function main() {
    clone("box", numColumns)
    clone("row", numRows)
    run()

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
    var row = document.getElementsByClassName("row")[rowNumber]
    for (var i = 0; i < numColumns; i++) {
        row.children[i].classList.remove("selected")
    }
}

function selectBoxes(rowNumber, columnNumber, numBoxes) {
    clearRow(rowNumber)
    for (var i = 0; i < numBoxes; i++) {
        selectBox(rowNumber, columnNumber + i)
    }
}

function run() {
    if (rowNumber >= numRows) {
        setTimeout(newGame, timeBeforeNewGame)
        return
    }
    selectBoxes(rowNumber, columnNumber, 1)
    if (isForward) {
        columnNumber++
        if (columnNumber === numColumns - 1) {
            isForward = false
        }
    } else {
        columnNumber--
        if (columnNumber === 0) {
            isForward = true
        }
    }
    var factor = 10000
    var speed = (factor / maxSpeed * rowNumber + factor / minSpeed * (numRows - 1 - rowNumber)) / (numRows - 1)
    setTimeout(run, speed)
}

function juliuss() {
    rowNumber++

}

function newGame() {
    rowNumber = 0
    columnNumber = 0
    isForward = true
    for (var i = 0; i < numColumns; i++) {
        selectBoxes(i, 0, 0)
    }

    run()
}
document.addEventListener("DOMContentLoaded", main)