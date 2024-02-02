const textInput = document.getElementById("translate-input")

const buttonEl = document.getElementById("translate-btn")

buttonEl.addEventListener("click", translate)

function translate(event){
    event.preventDefault()

    // Check if textarea is empty
    const inputText = textInput.value.trim()
    const selectedLanguage = document.querySelector('input[name="selected_language"]:checked');
    if(inputText.value && selectedLanguage){
        // 
        setTranslatedText("Set the value returned by openAI API here")
    }

        
}

function setTranslatedText(translatedText){
    const resultP = document.getElementById("translated-p")
    resultP.innerHTML = translatedText
}