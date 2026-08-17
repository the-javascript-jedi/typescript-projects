function reverse(nums: number[]): void {
    // Two pointers — one from the left, one from the right
    let left = 0;
    let right = nums.length - 1;

    // Move pointers toward each other, swapping as they go
    while (left < right) {
        // Swap nums[left] and nums[right]
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;

        left++;
        right--;
    }
    // No return needed — array is passed by reference, original is modified in place
}

const nums = [1, 2, 3, 4, 5];
reverse(nums);
console.log(nums); // [5, 4, 3, 2, 1]
