const WS = new WebSocket('ws://localhost:3232');

//payload represents the data received in the message
WS.onmessage = (payload)=>{

    displayMessage(payload.data);

};

WS.onopen = () =>{
    displayTitle('Connection is open');
}

WS.onclose = () =>{
    displayTitle('Connection is close');
}

function displayTitle(title){
    document.querySelector('h1').innerHTML = title;
}

function displayMessage(message){
// Check if message is a string (already plain text)
if (typeof message === 'string') {
    let h1 = document.createElement('h1');
    h1.textContent = message; // Use textContent for security (prevents script injection)
    document.querySelector('div.messages').appendChild(h1);
  } else if (message instanceof Blob) { // Check if message is a Blob
    const reader = new FileReader();
    reader.readAsText(message);

    reader.onload = () => {
      const textMessage = reader.result;
      displayMessage(textMessage); // Call displayMessage again with the extracted text
    };
 
  }
    // let h1 = document.createElement('h1');
    // h1.innerHTML = message;
    // document.querySelector('div.messages').appendChild(h1);

}

document.forms[0].onsubmit = ()=>{
    let input = document.getElementById('message');

    console.log(input.value);

    // This line gets the value entered by the user in the input field (input.value) and sends it
    WS.send(input.value);


}



