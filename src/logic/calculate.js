import operate from './operate';

const calculate = (data, btnName) => {
  let { prevTotal: total } = data;
  const { next, operation } = data;

  const calcOperations = {
    AC: 0,
    '+/-': -1,
    '%': 0.1,
  };
  const calculation = ['AC', '+/-', '%'];
  const arithmetic = ['÷', 'x', '-', '+'];

  if (calculation.includes(btnName)) {
    total = total * next * calcOperations[btnName];
  }
  if (arithmetic.includes(btnName)) {
    total = operate(total, next, btnName);
  }
  return { total, next, operation };
};

export default calculate;
