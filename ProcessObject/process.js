//The first element of the array (process.argv[0]) is the path to the Node.js executable,
// the second element (process.argv[1]) is the path to the JavaScript file being executed

//console.log(process.argv);

// var flag = process.argv.indexOf('--user');

// console.log(flag)

process.stdout.write('Hello. Ask me a question ');

process.stdin.on('data', function(answer){
    console.log(answer.toString());

    process.exit();

})

