




document.getElementById("checkMagicWord").onclick = function () {
    var magicWordEntered = document.getElementById("magicWord").value;
    var magicWord = "abracadabra";
    if (magicWordEntered == magicWord) {
        alert("you got it");
    } else {
        alert("noop, try again");
    }
}