// Ian Carpenter 20/02/2017
// taken from page 93 of the imposters handbook
// Use the equation discovered by Gauss which uses
// the formula: S = n(n+1)/2 to sum a continuous array
// of integers starting at 1
const sumContiguousArray = function(ary){
// get the last item
const lastItem = ary[ary.length - 1];
// gauss trick
return lastItem * ( lastItem + 1) / 2;
}

const nums = [1,2,3,4,5,6];
const sumOfArray = sumContiguousArray(nums);
//console.log(sumOfArray);
document.getElementById('text').innerHTML = sumOfArray;

// The following is for jsfiddle
html
<div id="text"></div>