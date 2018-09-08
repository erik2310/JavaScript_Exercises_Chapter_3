
console.log("Minimum:");
console.log("");

// En funktion der tager imod 2 tal som arguments og returnere det mindste tal
function min(firstNumber, secondNumber) {
    return Math.min(firstNumber, secondNumber);
}

console.log(min(0, 10));
console.log(min(0, -10));

console.log("");
console.log("Recursion:");
console.log("");

// En funktion der tjekker om et tal er lige eller ulige ved hjælp af recursion
function isEven(number) {
    
    // En funktion til at tjekke tallet
    function checker(checkNumber) {
        if (checkNumber == 0) {
            return true;
        } else if (checkNumber == 1) {
            return false;
        } else if (checkNumber < 0) {
            return "Tallet må ikke være mindre end 0!";
        } else {
            return checker(checkNumber - 2);
        }
    }

    return checker(number);
}

console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));

console.log("");
console.log("Bean counting:");
console.log("");

// En funktion til at tælle alle B'er i en besked
function countBs(message) {
    let counter = 0;
    
    for (let i = 0; i < String(message).length; i++) {
            if (message[i] == "B") {
                counter++;
        }
    }
    return counter;
}

console.log(countBs("BBC"));

// En funktion til at tælle alle karakterer i en besked, hvor man selv kan skrive hvilken karakter den skal tælle
function countChar(message, letter) {
    let counter = 0;
    
    for (let i = 0; i < String(message).length; i++) {
            if (message[i] == letter) {
                counter++;
        }
    }
    return counter;
}

console.log(countChar("kakkerlak", "k"));