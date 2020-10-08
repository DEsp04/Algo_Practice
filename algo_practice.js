//Given in an interview ********

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}

twoSum([1234, 5678, 9012], 14690);

//2nd exercise

function oddOrEven(arr) {
  let sum = arr.reduce((accumulator, current) => accumulator + current, 0);
  return sum % 2 === 0 ? "even" : "odd";
}

//Class work from 10/06/2020

function defaultGreet(first, last) {
  if (last == undefined) {
    return "Hi " + first + " Doe!";
  } else {
    return `Hi ${first} ${last}!`;
  }
}
