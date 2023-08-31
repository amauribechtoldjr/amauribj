let impurifica = 1;

function addOne(number) {
  return number + 1 + impurifica;
}

function addTwo(number) {
  return number + 2;
}

function subtractFive(number) {
  return number - 5;
}

function compose(...functions) {
  return (args) => {
    return functions.reduce((currentValue, fn) => {
      return fn(currentValue);
    }, args);
  };
}

const mediap70 = compose(addOne, addTwo, subtractFive);

const mediap90 = compose(addOne, subtractFive);

return {
  mediap70: mediap70(valoruserdigitou),
  mediap90: mediap90(valoruserdigitou),
};
