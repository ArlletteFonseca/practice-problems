/* exported compact */
function compact(array) {

  const newArr = [];
    for (let i = 0; i <= array.length - 1; i++) {
      if (array[i] === false || array[i] === null || array[i] === undefined || array[i] === "" || array[i] === 0 || array[i] === -0) {
       
      } else if (Number.isNaN(array[i])) {

      } else {
        newArr.push(array[i])
      }


    }
    return newArr
}
