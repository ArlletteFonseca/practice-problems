
function changeEnough(change, amountDue) {
  let total = 0;
  const quarters = change[0] * .25;
  const dimes = change[1] * .10;
  const nickels = change[2] * .05;
  const pennies = change[3] * .01;

  total = quarters+dimes+nickels+pennies;

  if(total >= amountDue) {
    return true;
  } else {
     return false;
  }

}

changeEnough([2, 100, 0, 0], 14.11) //➞ false
changeEnough([0, 0, 20, 5], 0.75) //➞ true
changeEnough([30, 40, 20, 5], 12.55) //➞ true
changeEnough([10, 0, 0, 50], 3.85) //➞ false
changeEnough([1, 0, 5, 219], 19.99) //➞ false

