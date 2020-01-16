import operate from './operate';

const calculate = (data, btnName) => {
  let { prevTotal: total } = data;
  const { next, operation } = data;

  const calcOperations = {
    AC: 0,
    '+/-': -1,
    '%': 0.1,
  };
  const calc = ['AC', '+/-', '%'];
  const operations = ['÷', 'x', '-', '+'];

  if (calc.includes(btnName)) {
    total = total * next * calcOperations[btnName];
  }
  if (operations.includes(btnName)) {
    total = operate(total, next, btnName);
  }
  return { total, next, operation };
};

export default calculate;
