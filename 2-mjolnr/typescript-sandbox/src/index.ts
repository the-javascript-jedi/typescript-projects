// Returns true if `nums` is sorted in ascending order (non-decreasing), false otherwise.
function checkArraySorted(nums: number[]): boolean {
  // Compare each element with the next one; stop one early (`length - 1`)
  // so `nums[i + 1]` never goes out of bounds.
  for (let i = 0; i < nums.length - 1; i++) {
    // Found a pair that's out of order -> array is not sorted.
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }
  // No out-of-order pair was found -> array is sorted.
  return true;
}

const nums = [1, 2, 3, 4, 5];
console.log("checkArraySorted(nums)", checkArraySorted(nums));
