function start() {
    let audioSRC = "./start.mp3"
    for (let i = 0; i < document.body.childElementCount; i++) {
        // remove all children from body
        document.body.removeChild(document.body.children[i])
    }
    let audioElement = document.createElement('audio')
    audioElement.setAttribute('src', audioSRC)
    let signalText = document.createElement('h1')
    signalText.innerText = "Scanning for signal..."
    document.body.appendChild(signalText)

    setTimeout(() => {
    audioElement.play()
    signalText.innerText = "Signal found..."
    }, 3000)
    audioElement.addEventListener('ended', () => {
        signalText.innerText = "Redirecting to control panel..."
        setTimeout(() => {
        window.open("./terminal.html", "_blank")
        let justInCaseLink = document.createElement('a')
        justInCaseLink.setAttribute('href', "./terminal.html")
        justInCaseLink.setAttribute('target', "_blank")
        justInCaseLink.innerText = "Click here if you are not redirected"
        document.body.appendChild(justInCaseLink)
        }, 3000)
    })

    setTimeout(() => {
        signalText.innerText = "Signal weakening..."

    }, 19000)
    setTimeout(() => {
        signalText.innerText = "Signal very weak..."

    }, 26000)
    setTimeout(() => {
        signalText.innerText = "Signal lost"
    }, 30000
    )
}

function documentary() {
    let videoSRC = "./Documentary.mp4"
    for (let i = 0; i < document.body.childElementCount; i++) {
        document.body.removeChild(document.body.children[i])
    }
    let audioElement = document.createElement('video')
    audioElement.setAttribute('src', videoSRC)
    audioElement.setAttribute('autoplay', "true")
    audioElement.setAttribute('loop', "true")
    audioElement.setAttribute('width', "100%")
    audioElement.setAttribute('controls', null)
    document.body.appendChild(audioElement)
}