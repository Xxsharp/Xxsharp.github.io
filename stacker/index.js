function main() {
    clone("box")
    clone("row")
    selectBox(1, 1)
    selectBox(2, 2)
    selectBox(3, 3)
    selectBox(4, 4)
    selectBox(5, 5)
}

function clone(className) {
    var element = document.getElementsByClassName(className)[0]
    for (var i = 1; i <= 10; i++) {
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
document.addEventListener("DOMContentLoaded", main)