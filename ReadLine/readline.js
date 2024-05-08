var readline = require('readline');
var util = require('util');

var RL = readline.createInterface(process.stdin, process.stdout) // wrapper for process objects

RL.question('What is your Name? ', (name)=>{
    console.log("Your name is " + name);

    //This method is used to set the prompt that will be displayed to the user when rl.prompt() is called.
    RL.setPrompt(`${name} how old are you?`);
    RL.prompt();


    // line here is and event listener. It takes the value inputted in the prompt. when we are using on it means we're using an event
    // line is a built in event
    RL.on('line', age=>{
        if(age < 18){
            util.log(`${name.trim()} because you are ${age} years old you cannot proceed`)
            RL.close();
        }
        else{
            // util.log prints the output along with the timestamp
            util.log(`${name.trim()} you are ${age} years old. Great, you can proceed`)
            RL.close();
        }
    })
})