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
