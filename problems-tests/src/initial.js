/* exported initial */

let initial = (array) => {
  const newArr = []
  for (let i = 0; i <= array.length - 2; i++) {
    newArr.push(array[i])
  }
  return newArr;
}
