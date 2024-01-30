/**
 * @param {number[]} nums
 * @return {number}
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * 
 * You must write an algorithm that runs in O(n) time .
*/

const longestConsecutiveSequence = nums => {
  // edge case
  if (!nums.length) return 0;

  const set = new Set(nums);

  let max = 1;

  for (let num of set) {
    if (set.has(num - 1)) continue;

    let currTotal = 1;

    while (set.has(num + 1)) {
      currTotal++;
      num++;
    }

    max = Math.max(max, currTotal);
  }

  return max;
};


