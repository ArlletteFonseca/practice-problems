
function createPhoneNumber(numbers) {
  let area = "";
  let three = "";
  let four = "";

  for (let i = 0; i <= numbers.length - 1; i++) {
    if (i<= 2) {
      area += numbers[i];
    } else if (i >=3 && i <= 5) {
      three += numbers[i];
    } else  {
      four += numbers[i];
    }
  }
  console.log('(' + area + ')' + ' ' + three + '-' + four)
  return '('+area+')' +' ' +three+'-'+four

}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// => returns "(123) 456-7890"
