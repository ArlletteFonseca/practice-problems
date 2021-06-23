class ListNode(val) {
  this.val = val;
  this.next = null;
}


const addTwoNumbers = function(l1, l2) {
  let carryOver = 0;

  let result = new ListNode(0)
  let currentNode = result
  while(l1 !== null || l2 !== null) {

    let v1 = 0
    let v2 = 0
    if(l1 !== null) v1 = l1.val
    if(l2 !== null) v2 = l2.val
    const sum = v1 + v2 + carryOver
    // Finds remainder of sum  and rounds up
    carryOver = Math.floor(sum / 10)
    sum = sum % 10
    currentNode.next = new ListNode(sum)
    currentNode = currentNode.next
    a.push(sum)
    if (l1 !== null) l1 = l1.next
    if(l1 !== null) l2 = l2.next
  }
  if (carryOver > 0) {
    currentNode.next = new ListNode(carryOver)
  }

 return result.next
}
