# 📝 Day 03: Stacks & Queues - Study Notes

## 🎯 Key Design Patterns
1. **LIFO vs FIFO**:
   - **Stack**: Last-In-First-Out. Used for expression evaluation, backtracking, undo mechanisms, and call stacks.
   - **Queue**: First-In-First-Out. Used for BFS traversals, task queues, and messaging streams.
2. **Min Stack Technique**:
   - Maintains an auxiliary `minStack` alongside the main stack.
   - When pushing `x`, push to `minStack` if $x \le \text{current min}$.
   - Guarantees $O(1)$ time complexity for `getMin()`.
3. **Queue using Two Stacks**:
   - `input` stack handles incoming pushes.
   - `output` stack handles pops. Elements are lazy-shifted from `input` to `output` only when `output` is empty.
   - Amortized time complexity for `enqueue` and `dequeue` is $O(1)$.

## 📊 Operations & Complexity
| Data Structure | Push / Enqueue | Pop / Dequeue | Top / Peek | Min Retrieval |
|---|---|---|---|---|
| MinStack | $O(1)$ | $O(1)$ | $O(1)$ | $O(1)$ |
| Two-Stack Queue | $O(1)$ | Amortized $O(1)$ | Amortized $O(1)$ | N/A |
