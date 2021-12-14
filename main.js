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

let inputText

document.getElementById("humanToAlien").addEventListener("keyup",function () {

    // this is to not have it error when its empty
    if (this.value === "") {
        return 0
    }

    inputText = this.value.split("")
    
    // for each character, find the matching alien character
    for (let i = 0; i < inputText.length; i++) {
        inputText[i] = inputText[i].toLowerCase()

        for (let j = 0; j < translations.length; j++) {

            if (inputText[i] === translations[j][0]) {
                inputText[i] = translations[j][1]
                break
            } else if (inputText[i] === translations[j][1]) {
                break
            }

        }
    }

    inputText = inputText.join("")
    this.value = inputText

})

// function handles the interpretation of the user input
document.getElementById("humanToAlien").addEventListener("change",function () {
    const outputText = this.value
    
    const outputElement = document.createElement("p")
    outputElement.innerText = `$: ${outputText}`

    switch (outputText) {
    case "⎅⟟⍾⏁⎍":
        window.open("./escape-codes.html", "_blank")
        break
    case "⟟⋏⎎⍜":
        window.open("./info.html", "_blank")
        break
    case "⌇⎍⌇":
        let susAudio = new Audio("./sus.mp3")
        susAudio.play()
        break
    case "☊⌰⟒⏃⍀":
        location.reload()
    }

    output.appendChild(outputElement)
    this.value = ""
    this.focus()
})
