# calculador

## Introduction:
This is a simple calculator function written in JavaScript.
It performs mathematical calculations based on the operator passed as an argument. 
The function can perform addition, subtraction, multiplication and division.
It's written in a way that allows for easy reuse and can be called multiple times with different arguments.


## Operators:
- "+" for addition
- "-" for subtraction
- "*" for multiplication
- "/" for division


## Example:
##### "Divide between two numbers":
```bash
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by 0";
  }
  result =  a / b;
  console.log(` The result is: ${result}`);
}

divide(10,5); // The result is: 2
```

## Exports:
```bash
module.exports = {
   add,
   subtract,
   multiply,
   divide,
   calculate
}
```

## How to use:
1. installing -
```bash
 npm install calculador
 ```

2. using - 
``` bash
const x = require('calculador');
x.name of the function(a,b);
```

## Important Note:
If you are using the 'calculate' function
You need to put 3 arguments (a,b,"operator").

For example:
```bash
calculate(10,5,"/") //The result is: 2
```



