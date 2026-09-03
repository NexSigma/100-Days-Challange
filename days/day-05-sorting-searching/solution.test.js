const { mergeSort, quickSort, searchRange } = require('./solution');

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

  assert('Day 05: MergeSort (Out-of-place stable sort)', () => {
    const input = [38, 27, 43, 3, 9, 82, 10];
    const sorted = mergeSort(input);
    if (JSON.stringify(sorted) !== JSON.stringify([3, 9, 10, 27, 38, 43, 82])) {
      throw new Error(`Expected sorted array, got ${JSON.stringify(sorted)}`);
    }
  });

  assert('Day 05: QuickSort (In-place partition)', () => {
    const input = [10, 7, 8, 9, 1, 5];
    const sorted = quickSort(input);
    if (JSON.stringify(sorted) !== JSON.stringify([1, 5, 7, 8, 9, 10])) {
      throw new Error(`Expected sorted array, got ${JSON.stringify(sorted)}`);
    }
  });

  assert('Day 05: Binary Search First & Last Target Bounds', () => {
    const input = [5, 7, 7, 8, 8, 10];
    const range = searchRange(input, 8);
    if (JSON.stringify(range) !== JSON.stringify([3, 4])) {
      throw new Error(`Expected [3, 4], got ${JSON.stringify(range)}`);
    }

    const notFound = searchRange(input, 6);
    if (JSON.stringify(notFound) !== JSON.stringify([-1, -1])) {
      throw new Error(`Expected [-1, -1], got ${JSON.stringify(notFound)}`);
    }
  });

  return results;
}

module.exports = { runTests };
