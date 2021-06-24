/* exported tail */
const tail = (array) => {
  let newArr = [];
  for (let i = 1; i <= array.length - 1; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
