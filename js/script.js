// question 1

function receivingFunction(someArgument) {

   if(typeof someArgument === "function") {
       someArgument();
   }
   else {
       console.log("This is not a function");
   }

}

const callbackFunction = function() {
    console.log("I am a callback function")
};


receivingFunction(callbackFunction);


// question 2


const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

/* for (let i = 0; i < prizes.length; i++) {
    console.log(`Prize ${i + 1}: ${prizes[i]}`);
} */

prizes.forEach(function(prize, index) {
    console.log(`Prize ${index + 1}: ${prize}`);
});


// question 3

let seconds = 5000;


setTimeout(function(){
    
    console.log(`I waited 5 seconds before executing`);
}, seconds);


// question 4


const interval = 1500;
let count = 0;
const limit = 4;

function logNumber() {
    count++;

    console.log(count);

    if(count === limit) {
        clearInterval(intervalId)
    }
}

const intervalId = setInterval(logNumber, interval);