const multi = [10, [5], [7],9,23,[17]]
const array = multi.flat();
const resultArray = array.map(num => num * 2);

console.log(resultArray);
