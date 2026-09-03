# 📝 Day 04: Binary Trees & Search - Study Notes

## 🎯 Key Concepts Mastered
1. **Binary Search Tree Property**:
   - For every node $N$, all values in $N$'s left subtree are strictly smaller than $N.\text{val}$, and all values in $N$'s right subtree are strictly larger.
   - **In-Order Traversal** (`Left -> Node -> Right`) on a BST always yields sorted elements.
2. **Depth-First Search (DFS)** vs **Breadth-First Search (BFS)**:
   - **DFS Traversal Order**:
     - Pre-Order: `Node -> Left -> Right` (useful for tree cloning / serialization)
     - In-Order: `Left -> Node -> Right` (sorted array output)
     - Post-Order: `Left -> Right -> Node` (bottom-up cleanup / node deletion)
   - **BFS Level-Order**:
     - Evaluates node levels sequentially using a Queue data structure.

## 📊 Time Complexity
| Operation | Average BST | Worst-Case BST (Degenerate List) |
|---|---|---|
| Search | $O(\log N)$ | $O(N)$ |
| Insert | $O(\log N)$ | $O(N)$ |
| Level-Order Traversal | $O(N)$ | $O(N)$ |
