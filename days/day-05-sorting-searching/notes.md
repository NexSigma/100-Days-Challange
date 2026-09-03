# 📝 Day 05: Sorting & Searching - Study Notes

## 🎯 Key Concepts Mastered
1. **MergeSort**:
   - **Divide and Conquer**: Recursively splits array into halves, sorts subarrays, and merges them.
   - Guaranteed $O(N \log N)$ time complexity in all cases. Stable sorting algorithm. Uses $O(N)$ extra space.
2. **QuickSort**:
   - Selects a `pivot` element and partitions the array such that elements smaller than pivot are on the left, and elements larger are on the right.
   - In-place $O(1)$ extra stack space (excluding recursion stack). Average time: $O(N \log N)$, Worst-case: $O(N^2)$.
3. **Binary Search First & Last Boundary Detection**:
   - Instead of stopping when `nums[mid] === target`, records the index and continues searching left to find the first occurrence, or right to find the last occurrence.

## 📊 Comparison Matrix
| Algorithm | Best Time | Average Time | Worst Time | Space | Stable |
|---|---|---|---|---|---|
| MergeSort | $O(N \log N)$ | $O(N \log N)$ | $O(N \log N)$ | $O(N)$ | Yes |
| QuickSort | $O(N \log N)$ | $O(N \log N)$ | $O(N^2)$ | $O(\log N)$ | No |
| Binary Search Boundary | $O(1)$ | $O(\log N)$ | $O(\log N)$ | $O(1)$ | N/A |
