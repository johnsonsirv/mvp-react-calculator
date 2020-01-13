import operate from './operate';

const calculate = (data, btnName) => {
  const temp = data;
  const calcOperations = {
    AC: 0,
    '+/-': -1,
    '%': 0.1,
  };
  const calc = ['AC', '+/-', '%'];
  const operations = ['÷', 'x', '-', '+'];

  if (calc.includes(btnName)) {
    temp.total = data.total * data.next * calcOperations[btnName];
  }
  if (operations.includes(btnName)) {
    temp.total = operate(data.total, data.next, btnName);
  }
  return data;
};

export default calculate;
