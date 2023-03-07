//calculator function
function calculator(num1, operator, num2){
    parseInt(num1, num2)

    if (operator == '+') {
        result = num1 + num2;  
    }  
    else if (operator == '-') {
        result = num1 - num2;  
    }  
    else if (operator == '*') {
        result = num1 * num2;  
    }  
    else if (operator == '/') {
        result = num1 / num2;
    }
    else {
        return "Invalid Operator Input"
    }

    if(isNaN(result)) {
      return "Invalid Number Input"
    }

    return result;
};

// capitilize function

function capitilize (str) {
  if (str === "") {
    return "Enter text to capitilize it"
  } else if (typeof str === "string") {
      const arr = str.split(" ");
      for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      const str2 = arr.join(" ");
      return str2;
  } else {
      return "Invalid Input"
  }
}

//reverse string function

function reverseString(str) {
  if (str === "") {
    return "Enter text to reverse it"
  } else if (typeof str === "string") {
    return str.split("").reverse().join("");
  } else {
    return "Invalid Input"
  }  
}

//analyze array function

function analyzeArray(array) {
    array.sort(function(a, b){return a-b});
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    };

    return {
        min: array[0],
        max: array[array.length - 1],
        length: array.length,
        average: sum/array.length
      } 
  } 


//caesar cipher

// e(x) = (x+k) (mod 26)
// x = letter, k = the shift

const caesarCipher = function(text, shift) {
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
      let charCode = text[i].charCodeAt();

      if (charCode > 96 && charCode < 123) {
          charCode += shift % 26 
            if (charCode > 122) {
                charCode = (charCode - 122) + 96;
            } else if (charCode < 97) {
                charCode = (charCode - 97) + 123;
            }
      }
  
      if (charCode > 64 && charCode < 91) {
        
        charCode += shift % 26
        
        if (charCode > 90) {
          charCode = (charCode - 90) + 64;
        } else if (charCode < 65) {
          charCode = (charCode - 65) + 91;
        }
      }
  
      result += String.fromCharCode(charCode);
    }

    if (result === "") {
      return "Invalid Input"
    } else if (typeof result === 'string') {
      return result;
    } else {
      return "Invalid Input"
    }
}

module.exports = { calculator, capitilize, reverseString, analyzeArray, caesarCipher};