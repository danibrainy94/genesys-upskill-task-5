/*************************
 * Upskill Task 5
 * Ugwu Daniel Stephen
 * Web Dev
 ************************/


/****
 * 1. 
 ****/

//function that converts figures in Fahrenheit to Celcius
function celciusConverter (tempValue){
    const toCelcius = tempValue * (9/5) + 32;
    console.log(`The value of ${tempValue}\u00B0F in celcius is = ${toCelcius}\u00B0C`);
}

celciusConverter(45);



/****
 * 2. 
 ****/

//function that will calculate the average number in an array
function calcAverage (arrValues){

    let arraySum = 0;

    for (let i = 0; i < arrValues.length; i++)
    arraySum += arrValues[i];
    averageValue = (arraySum/2)

    console.log(`The average of the given array is = ${averageValue}`);
    
}

calcAverage([14, 34, 45, 50, 55, 70, 125, 67, 80]);




/****
 * 3. 
 ****/

//function that checks if a number, n is divisible by two numbers x and y.

function divisionChecker(number, a, b) {
    
    if ( (number % a === 0) && (number % b === 0) ) {
        console.log(`${number} is divisible by ${a} and ${b} `);
    }else {
        console.log(`${number} is not divisible by ${a} and ${b} `);
    }

}

divisionChecker(76, 2, 4);



/*****
 * 4. A function that will output the first 100 prime numbers
 ******/

//functions that checks if a number is prime
function isPrime(num) {
    if(num == 1 || num == 0) return false;
    for (let i = 2; i < num; i++) {
        if(num % i == 0)
            return false;
    }
    return true;
}

// function that displays the prime numbers
function showPrime (x) {
    for (let i =1; i <= x; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }

}

showPrime(100);


/****
 * 5. 
 ****/

// calling the function to display only the positive numbers in an array of integers
function filterArray (integers) {
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] > 0) {
            console.log(integers[i]);
        }
    }
        
}

filterArray([1, -1, -3, -7, 56, 57, 80, -57, -76, 102, -3]);



/****
 * 6. 
 ****/

//function that prints Fizz when it's a multiple of 3, Buzz when it's a multiple of five and FizzBuzz when it's a multiple of the two numbers
function multiplesReplace (digits) {
    for (let i = 1; i <= digits; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz" + " ");
        } else if (i % 3 == 0) {
            console.log("fizz" + " ");
        } else if (i % 5 == 0) {
            console.log("Buzz" + " ");
        } else {
            console.log(i + " ");
        }
    }

    
}

multiplesReplace(100);


/****
 * 7. 
 ****/

function hashTagCreator (text) {
    let grpWords = text.split(" ");

    for (let i = 0; i < grpWords.length; i++) {
        grpWords[i] = grpWords[i][0].toUpperCase() + grpWords [i].substr(1);
    }
    hashTag = grpWords.join("");
    console.log(`#${hashTag}`);

}

hashTagCreator("money making machine");


/****
 * 7. 
 ****/

