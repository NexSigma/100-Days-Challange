const { TreeNode, BinarySearchTree, inOrderTraversal, preOrderTraversal, levelOrderTraversal, maxDepth } = require('./solution');

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

  assert('Day 04: BST Insertion & Contains Lookup', () => {
    const bst = new BinarySearchTree();
    [10, 5, 15, 2, 7, 12, 20].forEach(v => bst.insert(v));
    if (!bst.contains(7)) throw new Error('Expected BST to contain 7');
    if (!bst.contains(20)) throw new Error('Expected BST to contain 20');
    if (bst.contains(99)) throw new Error('Expected BST to not contain 99');
  });

  assert('Day 04: In-Order Traversal yields sorted elements', () => {
    const bst = new BinarySearchTree();
    [10, 5, 15, 2, 7].forEach(v => bst.insert(v));
    const sorted = inOrderTraversal(bst.root);
    if (JSON.stringify(sorted) !== JSON.stringify([2, 5, 7, 10, 15])) {
      throw new Error(`Expected [2, 5, 7, 10, 15], got ${JSON.stringify(sorted)}`);
    }
  });

  assert('Day 04: Level-Order Traversal (BFS)', () => {
    const bst = new BinarySearchTree();
    [10, 5, 15, 2, 7].forEach(v => bst.insert(v));
    const levels = levelOrderTraversal(bst.root);
    if (JSON.stringify(levels) !== JSON.stringify([[10], [5, 15], [2, 7]])) {
      throw new Error(`Expected [[10],[5,15],[2,7]], got ${JSON.stringify(levels)}`);
    }
  });

  assert('Day 04: Binary Tree Max Depth', () => {
    const bst = new BinarySearchTree();
    [10, 5, 15, 2, 7, 1].forEach(v => bst.insert(v));
    const depth = maxDepth(bst.root);
    if (depth !== 4) throw new Error(`Expected depth 4, got ${depth}`);
  });

  return results;
}

module.exports = { runTests };
