// function to calculate
 const calc = (numOne, numTwo, operator) => {
    
    const numberOne = parseFloat(numOne, 10);
    const numberTwo = parseFloat(numTwo, 10);
  
    switch (operator) {
      case "+":
        return numberOne + numberTwo;
      
      case "-":
          return numberOne - numberTwo;
  
      case "÷":
            return numberOne / numberTwo;
  
      case "x":
        return numberOne * numberTwo;
  
      case "%":
        return (numberTwo*numberOne) / 100;
    
      default:
        return 0;
    }
   }
  
export { calc };