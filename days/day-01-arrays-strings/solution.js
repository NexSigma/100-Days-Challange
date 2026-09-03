/**
 * DAY 01: Arrays & Strings
 * Algorithms: Two Pointers, Sliding Window, Kadane's Algorithm
 */

// 1. Two Sum (Given array & target, find pair indices) - O(N)
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return null;
}

// 2. Maximum Subarray Sum (Kadane's Algorithm) - O(N)
function maxSubArray(nums) {
  if (nums.length === 0) return 0;
  let maxSoFar = nums[0];
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }
  return maxSoFar;
}

// 3. Reverse String In-Place (Two Pointers) - O(N)
function reverseString(str) {
  const chars = str.split('');
  let left = 0, right = chars.length - 1;
  while (left < right) {
    const temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
  }
  return chars.join('');
}

// 4. Longest Substring Without Repeating Characters (Sliding Window) - O(N)
function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let left = 0;
  const seen = new Set();

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

module.exports = {
  twoSum,
  maxSubArray,
  reverseString,
  lengthOfLongestSubstring
};
