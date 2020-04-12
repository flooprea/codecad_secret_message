let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//remove last string
secretMessage.pop();
//push two strings
secretMessage.push('to');
secretMessage.push('Program');

//change 'easily' to 'right'
for(i=0; i<secretMessage.length; i++){
    if(secretMessage[i]==='easily'){
        secretMessage[i] = 'right';
    }
}

//remove first string
secretMessage.shift();

//remove right, the, first, time,, and replace with know
secretMessage.splice(5, 5, 'know');

//pring message
let outputString = secretMessage.join(' ');

document.getElementById('output').innerHTML = outputString;

//extra feature: by clicking the button you can type in the element you want to remmove from the array
document.getElementById("myButton").addEventListener("click", function(){    
    let temp = prompt("Please enter the emelement that you want to remove.");
    if(!isInArray(temp, secretMessage)){
        alert("bad input, please try again");
    }

    for(i=0; i<secretMessage.length; i++){
        if(secretMessage[i]=== temp){
            secretMessage.splice(secretMessage[i].indexOf, 1);
    }
}
outputString = secretMessage.join(' ');
document.getElementById('output').innerHTML = outputString;
});

//method to check if value in present in the array
const isInArray = (value, array) => {
    return array.indexOf(value) > -1;
  }

