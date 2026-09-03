/**
 * DAY 05: Sorting & Searching
 * Algorithms: QuickSort, MergeSort, Binary Search Boundary Detection
 */

// 1. MergeSort - O(N log N) Divide and Conquer
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let l = 0, r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}

// 2. QuickSort (Lomuto Partitioning) - Average O(N log N)
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIdx = partition(arr, low, high);
    quickSort(arr, low, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// 3. Binary Search Range - O(log N)
function searchRange(nums, target) {
  const findBound = (isFirst) => {
    let left = 0, right = nums.length - 1;
    let bound = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        bound = mid;
        if (isFirst) right = mid - 1;
        else left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return bound;
  };

  return [findBound(true), findBound(false)];
}

module.exports = {
  mergeSort,
  quickSort,
  searchRange
};
