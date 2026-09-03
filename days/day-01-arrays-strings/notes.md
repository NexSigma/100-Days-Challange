# 📝 Day 01: Arrays & Strings - Study Notes

## 🎯 Techniques Mastered
1. **Hash Maps for Complement Lookups**:
   - `Two Sum`: Reduces time complexity from $O(N^2)$ brute-force to $O(N)$ by keeping track of elements seen so far.
2. **Kadane's Algorithm for Maximum Subarray**:
   - Dynamically decides at each step whether to extend the existing window or restart a new sub-array if `currentMax + num < num`. Time: $O(N)$, Space: $O(1)$.
3. **Two-Pointer Approach**:
   - Reversing string array by keeping a pointer at start `0` and end `length - 1`, swapping characters until pointers meet.
4. **Sliding Window**:
   - Tracks a dynamic window `[left, right]` using a `Set` to record current window unique characters.

## 📊 Complexity Analysis
| Algorithm | Time Complexity | Space Complexity |
|---|---|---|
| Two Sum | $O(N)$ | $O(N)$ |
| Kadane's Max Subarray | $O(N)$ | $O(1)$ |
| Two-Pointer Reverse | $O(N)$ | $O(1)$ |
| Longest Unique Substring | $O(N)$ | $O(K)$ |
