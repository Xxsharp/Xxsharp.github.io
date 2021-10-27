function main() {
    clone("box")
    clone("row")
    var button = document.getElementById("button")
    button.onclick = click
    var julius = document.getElementById("julius")
    julius.onclick = juliuss
}

function clone(className) {
    var element = document.getElementsByClassName(className)[0]
    for (var i = 1; i < 10; i++) {
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
    for (var i = 0; i < 10; i++) {
        row.children[i].classList.remove("selected")
    }
}

function selectBoxes(rowNumber, columnNumber, numBoxes) {
    clearRow(rowNumber)
    for (var i = 0; i < numBoxes; i++) {
        selectBox(rowNumber, columnNumber + i)
    }
}
var rowNumber = 0
var columnNumber = 0
var isForward = true

function click() {
    selectBoxes(rowNumber, columnNumber, 1)
    if (isForward) {
        columnNumber++
        if (columnNumber === 9) {
            isForward = false
        }
    } else {
        columnNumber--
        if (columnNumber === 0) {
            isForward = true
        }
    }
    setTimeout(click, 174)
}

function juliuss() {
    rowNumber = (rowNumber + 1) % 10

}
document.addEventListener("DOMContentLoaded", main)