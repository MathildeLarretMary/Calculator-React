// function to calculate

//       case "%":
//         return (numberTwo*numberOne) / 100;
    
const percent = (value) => {
  let table = value.split('%')
  return Number((table[1]*table[0]) / 100); 
}

const operator = (calcul) => {
  
  if(calcul.includes('÷')){

    return calcul.replaceAll('÷', '/')

  } else if (calcul.includes('x')) {

    return calcul.replaceAll('x', '*')

  } else if (calcul.includes('%')) {
    return percent(calcul);
  }
  return calcul;
}

export const calcul = (value) => {
  // console.log(eval(value[0])) fonctionne mais ne pas utiliser eval() trouver autre chose
  // eslint-disable-next-line no-new-func
  return Function("return " + operator(value[0]))();
  
}