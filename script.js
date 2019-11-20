window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);
const body = document.querySelector("body");

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
    p.textContent = poopScript;

    if (e.results[0].isFinal) {
      p = document.createElement('p');
      console.log("created p")
      words.appendChild(p);
    }

    if(transcript.includes("blue")){
        body.style.background = "blue";
    }
    if(transcript.includes("Green")){
        body.style.background = "green";
    }
    if(transcript.includes("unicorn")){
        body.style.background = "pink";
        cornify_add();
    }
    if(transcript.includes("clear")){
        location.reload();
    }
    
    
});

recognition.addEventListener('end', recognition.start);

recognition.start();