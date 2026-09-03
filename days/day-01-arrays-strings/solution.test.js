const { twoSum, maxSubArray, reverseString, lengthOfLongestSubstring } = require('./solution');

function runTests() {
  const results = [];

  function assert(name, fn) {
    const start = Date.now();
    try {
      fn();
      results.push({ name, passed: true, duration: Date.now() - start });
    } catch (err) {
      results.push({ name, passed: false, error: err.message, duration: Date.now() - start });
    }
  }

  assert('Day 01: Two Sum HashMap lookup', () => {
    const res = twoSum([2, 7, 11, 15], 9);
    if (!res || res[0] !== 0 || res[1] !== 1) {
      throw new Error(`Expected [0, 1], got ${JSON.stringify(res)}`);
    }
  });

  assert("Day 01: Max Subarray Sum (Kadane's)", () => {
    const res = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    if (res !== 6) throw new Error(`Expected 6, got ${res}`);
  });

  assert('Day 01: Reverse String (Two Pointers)', () => {
    const res = reverseString('hello');
    if (res !== 'olleh') throw new Error(`Expected 'olleh', got '${res}'`);
  });

  assert('Day 01: Longest Substring Without Repeats (Sliding Window)', () => {
    const res = lengthOfLongestSubstring('abcabcbb');
    if (res !== 3) throw new Error(`Expected 3, got ${res}`);
  });

  return results;
}

module.exports = { runTests };
