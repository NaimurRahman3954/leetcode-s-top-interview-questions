/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  // Create an empty object to store the indices of the elements
  const indices = {}
  // Iterate through the list of nums
  for (let i = 0; i < nums.length; i++) {
    // Check if target - num is in the indices object
    if (indices[target - nums[i]] !== undefined) {
      // If it is, return the indices of the two numbers
      return [indices[target - nums[i]], i]
    }
    // If it's not, add the current index to the indices object
    indices[nums[i]] = i
  }

  // If the two numbers are not found, return an empty array
  return []
}

const result = twoSum([2, 7, 11, 15], 9)
console.log(result)

/*

📌 Explanation

This function takes in two parameters:
  nums: an array of integers
  target: an integer

It returns an array of two integers that add up to the target number, or an empty array if no such integers are found.

The function first creates a new Map object called map, which will be used to store the values and indices of the elements in the array.

It then iterates through the array using a for loop. For each element in the array, it checks if target - nums[i] (i.e. the number that is needed to add up to the target number with the current element) is already in the map. If it is, the function returns an array with the index of the current element and the value in the map corresponding to target - nums[i]. If it is not, the function adds the current element and its index to the map using the set method.

Finally, if the loop completes without returning an array, the function returns an empty array, since no such integers were found.

*/
