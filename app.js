console.log('-------vkCalculator-----------');

window.alert('Are You Sure You Want to RELOAD');

let screen = document.getElementById('screen');
let Sound = document.getElementsByClassName('btn');
let screenValue = '';

Array.from(Sound).forEach(function(element) {
    element.addEventListener('click',function(e){
        let audio = new Audio('./sound_downloaded.wav');
        audio.play();
        let buttonText = e.target.innerHTML;
        if(buttonText =='X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
});





