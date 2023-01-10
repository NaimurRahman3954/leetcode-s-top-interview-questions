/**
 * @param {string} s
 * @return {number}
 */

function romanToInt(s) {
  // Create a dictionary that maps Roman numerals to their integer values
  const numeralValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  // Initialize a result variable to store the integer value
  let result = 0

  // Iterate through the string, adding the values for each character
  for (let i = 0; i < s.length; i++) {
    // Get the value for the current numeral
    const currentValue = numeralValues[s[i]]

    // Get the value for the next numeral, if there is one
    const nextValue = numeralValues[s[i + 1]]

    // If the next numeral has a larger value, subtract the current value
    if (nextValue > currentValue) {
      result -= currentValue
    } else {
      // Otherwise, add the current value
      result += currentValue
    }
  }

  return result
}

const result = romanToInt('XXIV')
console.log(result)

/*

📌 Explanation

This code defines a function called romanToInt that takes a single argument s, which is the Roman numeral to be converted. The function starts by creating a JavaScript object called numeralValues, which is used as a dictionary to map each Roman numeral to its corresponding integer value.

It then initializes a variable called result to 0, which will be used to store the integer value of the Roman numeral as the code iterates through the input string.

The function then enters a for loop which iterates through the characters in the string, starting with the first one. For each iteration it retrieves the value of the current numeral, by accessing the corresponding key on the numeralValues object, and retrieves the value of the next numeral as well.

It then checks if the next numeral has a larger value than the current one, if it does the function subtracts the value of current numeral from the result variable. If not, it adds the value of current numeral. This handles the special case where a smaller numeral is placed before a larger one, as described in the problem statement.

Finally, once the loop is finished it will return the final result variable, representing the integer value of the Roman numeral.

Overall, the solution uses the numeralValues object as a dictionary to look up the integer values for each Roman numeral, and then uses a for loop to iterate through the input string, adding or subtracting the values for each character based on the value of the next character. The resulting integer is the final value of the result variable.

*/
