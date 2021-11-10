const translations = [
    ["a", "⏃"],
    ["b", "⏚"],
    ["c", "☊"],
    ["d", "⎅"],
    ["e", "⟒"],
    ["f", "⎎"],
    ["g", "☌"],
    ["h", "⊑"],
    ["i", "⟟"],
    ["j", "⟊"],
    ["k", "☍"],
    ["l", "⌰"],
    ["m", "⋔"],
    ["n", "⋏"],
    ["o", "⍜"],
    ["p", "⌿"],
    ["q", "⍾"],
    ["r", "⍀"],
    ["s", "⌇"],
    ["t", "⏁"],
    ["u", "⎍"],
    ["v", "⎐"],
    ["w", "⍙"],
    ["x", "⌖"],
    ["y", "⊬"],
    ["z", "⋉"]
]


let output = document.getElementById("output")

let humanText

document.getElementById("humanToAlien").addEventListener("keyup",function () {

    // this is to not have it error when its empty
    if (this.value === "") {
        return 0
    }

    humanText = this.value.split("")
    
    // for each character, find the matching alien character
    for (let i = 0; i < humanText.length; i++) {
        humanText[i] = humanText[i].toLowerCase()

        for (let j = 0; j < translations.length; j++) {

            if (humanText[i] === translations[j][0]) {
                humanText[i] = translations[j][1]
                break
            } else if (humanText[i] === translations[j][1]) {
                break
            }

        }
    }

    humanText = humanText.join("")
    this.value = humanText

})

// function handles the interpretation of the user input
document.getElementById("humanToAlien").addEventListener("change",function () {
    let outputText = this.value
    
    let outputElement = document.createElement("p")
    outputElement.innerText = `$: ${outputText}`

    if (outputText === "⟒⌇☊⏃⌿⟒") {
        window.open("./escape-codes.html", "_blank")
    } else if (outputText === "⟟⋏⎎⍜") {
        window.open("./info.html", "_blank")
    }

    output.appendChild(outputElement)
    this.value = ""
    this.focus()
})
