// // using set
// function removeDuplicates(nums: number[]): number[] {
//   return [...new Set(nums)];
// }

// using filter
function removeDuplicates(nums: number[]): number[] {
  // keep num only if this is its first occurrence in the array
  // (indexOf always returns the first match's index, so a later
  // duplicate's own index won't equal it and gets filtered out)
  return nums.filter((num, index) => nums.indexOf(num) === index);
}

const nums = [1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 8];
console.log(removeDuplicates(nums));
