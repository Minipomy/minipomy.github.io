var elementText = document.getElementById("hero-text");

function changeText() {
    var textOriginal = elementText.textContent;
    switch (textOriginal) {
        case "Python":
            elementText.textContent = textOriginal.replace("Python", "C#");
            break;
        case "C#":
            elementText.textContent = textOriginal.replace("C#", "Mobile");
            break;
        case "Mobile":
            elementText.textContent = textOriginal.replace("Mobile", "Python");
            break;
    }
}

setInterval(changeText, 4000);