// const input = `1000
// 2000
// 3000

// 4000

// 5000
// 6000

// 7000
// 8000
// 9000

// 10000`;
const input = `1000
2000
3000
`;

//1. Transform each group of strings into arrays of numbers
const res = input.split('');
console.log(res);
const transformToNumber = (arr) => {
  let intArrray = [];
  arr.forEach((element) => {
    if (element != '\n') {
      intArrray.push(element);
    }
    if (element === '\n') {
      intArrray.push(',');
    }
  });
  return intArrray;
};
console.log(transformToNumber(res));
//2. Sum each array and return this total number, save total values into an arrray
//3. Find the max value on the total array
