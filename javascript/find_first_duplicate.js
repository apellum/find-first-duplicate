function findFirstDuplicate(arr) {
  let result
  if (arr.length !== 0) {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element === arr[index + 1]) {
        return result = element
      } else {
        result = -1
      }
    }
  } else {
    result = -1
  }
  return result
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([]))

}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

//take the arr
//test - more than 2, empty arr, multiple duplicate numbers

// compare numbers ===
// if false move on to next numbers, if true return number