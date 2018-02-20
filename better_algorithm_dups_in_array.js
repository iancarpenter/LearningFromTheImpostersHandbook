// Ian Carpenter 20/02/2018
// Taken from page 103 of the Imposters Handbook
// a much better algorithm for finding duplicates
// returns zero if no duplicate found otherwise
// returns the duplicate.
const findDuplicate = function(ary){
  // sum what we have been given
  let actualSum = 0;
  // our O(n) scan
  ary.forEach(x => actualSum += x);
  //get the last item
  const lastItem = ary[ary.length - 1];
  // create a new array
  const shouldBe = lastItem * (lastItem + 1) / 2;
  return actualSum - shouldBe;
}

const nums = [1,2,3,4,5,6];
var result = findDuplicate(nums);
document.getElementById('text').innerHTML = result;