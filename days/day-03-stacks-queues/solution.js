/**
 * DAY 03: Stacks & Queues
 * Problems: Valid Parentheses, Min Stack, Queue using Stacks
 */

// 1. Valid Parentheses - O(N) Time, O(N) Space
function isValidParentheses(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (char in map) {
      const top = stack.pop();
      if (top !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

// 2. Min Stack Implementation - All ops O(1)
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }

  pop() {
    const val = this.stack.pop();
    if (val === this.getMin()) {
      this.minStack.pop();
    }
    return val;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// 3. Queue using Two Stacks - Amortized O(1) ops
class MyQueue {
  constructor() {
    this.input = [];
    this.output = [];
  }

  enqueue(val) {
    this.input.push(val);
  }

  dequeue() {
    this._shiftStacks();
    return this.output.pop();
  }

  peek() {
    this._shiftStacks();
    return this.output[this.output.length - 1];
  }

  empty() {
    return this.input.length === 0 && this.output.length === 0;
  }

  _shiftStacks() {
    if (this.output.length === 0) {
      while (this.input.length > 0) {
        this.output.push(this.input.pop());
      }
    }
  }
}

module.exports = {
  isValidParentheses,
  MinStack,
  MyQueue
};
