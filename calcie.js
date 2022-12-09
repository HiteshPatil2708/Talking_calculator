let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue = " "
for (items of buttons) {
    items.addEventListener('click', (e) => {
        buttontext = e.target.innerText;
        console.log('Button text is ', buttontext);

        if (buttontext == '+') {
            buttontext = '+';
            speak("plus")
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else if (buttontext == "-") {
            speak("minus");
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else if (buttontext == '*') {
            buttontext = '*';
            speak("multiplied")
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else if (buttontext == "/") {
            speak("divide");
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else if (buttontext == "=") {
            screen.value = eval(screenvalue);
            if (screen.value > 0)
                speak("equals" + screen.value);
            else { speak("equals minus" + screen.value); }
        }
        else if (buttontext == "C") {
            screenvalue = "";
            speak("clear")
            screen.value = screenvalue;
        }
        else if (buttontext == "<--") {
            screenvalue = screenvalue.slice(0, -1);
            screen.value = screenvalue;

        }
        else if (buttontext == ".") {
            speak("point");
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else {
            screenvalue += buttontext;
            speak(buttontext)
            screen.value = screenvalue;
        }



    })
}
function speak(x) {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";

    speech.text = x;
    speech.volume = 1;
    speech.rate = 1.5;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}