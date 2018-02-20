// Ian Carpenter 20/02/2018
// brute force method of finding duplicates in an array
// Taken from page 94 of the Imposters Handbook
const hasDuplicates = function(num){
 // loop the list, our 0(n) op
 for(let i = 0; i < nums.length; i++){
   const thisNum = nums[i];
   // loop the list again, the 0(n^2) op
   for(let j = 0; j < nums.length; j++){
     // make sure we are not checking the same number
     if(j !== i){
       const otherNum =nums[j];
       // if there's an equal value, return
       if (otherNum === thisNum) return true;
     }
   }
 }
 // if we are here no dups
 return false;
}

const nums = [1,2,3,4,5,5,6];
var result = hasDuplicates(nums);

document.getElementById('text').innerHTML = result;