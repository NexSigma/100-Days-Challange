/**
 * DAY 04: Binary Trees & Search Trees
 * Operations: BST Insertion/Search, In/Pre/Post-Order Traversal, BFS Level-Order, Max Depth
 */

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return this; // ignore duplicates
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) return true;
      current = val < current.val ? current.left : current.right;
    }
    return false;
  }
}

// Traversals
function inOrderTraversal(root, res = []) {
  if (!root) return res;
  inOrderTraversal(root.left, res);
  res.push(root.val);
  inOrderTraversal(root.right, res);
  return res;
}

function preOrderTraversal(root, res = []) {
  if (!root) return res;
  res.push(root.val);
  preOrderTraversal(root.left, res);
  preOrderTraversal(root.right, res);
  return res;
}

function levelOrderTraversal(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
}

function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

module.exports = {
  TreeNode,
  BinarySearchTree,
  inOrderTraversal,
  preOrderTraversal,
  levelOrderTraversal,
  maxDepth
};
