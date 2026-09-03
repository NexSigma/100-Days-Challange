# 📝 Day 02: Linked Lists - Study Notes

## 🎯 Key Concepts Mastered
1. **Pointer Manipulation**:
   - Reversing a singly linked list iteratively using three pointers (`prev`, `current`, `next`). Space complexity is strictly $O(1)$.
2. **Floyd's Cycle Detection Algorithm (Tortoise and Hare)**:
   - Uses two pointers moving at different speeds (`slow` moves 1 step, `fast` moves 2 steps).
   - If a cycle exists, `fast` will eventually overlap with `slow`. If `fast` reaches `null`, the list has no cycle.
3. **Fast and Slow Pointers for Middle Node**:
   - When `fast` reaches the end of the list, `slow` is guaranteed to be at the middle node. Time: $O(N)$, Space: $O(1)$.

## 📊 Complexity Table
| Operation | Time Complexity | Space Complexity |
|---|---|---|
| Reverse List | $O(N)$ | $O(1)$ |
| Cycle Detection | $O(N)$ | $O(1)$ |
| Find Middle Node | $O(N)$ | $O(1)$ |
