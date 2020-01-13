const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  let result = new Big(0);
  const n1 = new Big(numberOne);
  const n2 = new Big(numberTwo);
  switch (operation) {
    case '÷':
      result = n1.div(n2);
      break;
    case 'x':
      result = n1.times(n2);
      break;
    case '-':
      result = n1.minus(n2);
      break;
    case '+':
      result = n1.plus(n2);
      break;
    default:
      break;
  }

  return result;
};

export default operate;
