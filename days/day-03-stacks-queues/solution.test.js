const { isValidParentheses, MinStack, MyQueue } = require('./solution');

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

  assert('Day 03: Valid Parentheses String Matching', () => {
    if (!isValidParentheses('()[]{}')) throw new Error('Expected true for ()[]{}');
    if (!isValidParentheses('({[]})')) throw new Error('Expected true for ({[]})');
    if (isValidParentheses('(]')) throw new Error('Expected false for (]');
  });

  assert('Day 03: MinStack O(1) Operations', () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    if (minStack.getMin() !== -3) throw new Error(`Expected min -3, got ${minStack.getMin()}`);
    minStack.pop();
    if (minStack.top() !== 0) throw new Error(`Expected top 0, got ${minStack.top()}`);
    if (minStack.getMin() !== -2) throw new Error(`Expected min -2, got ${minStack.getMin()}`);
  });

  assert('Day 03: MyQueue Amortized Operations', () => {
    const queue = new MyQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    if (queue.peek() !== 1) throw new Error(`Expected peek 1, got ${queue.peek()}`);
    if (queue.dequeue() !== 1) throw new Error('Expected dequeue 1');
    if (queue.empty()) throw new Error('Expected queue not empty');
  });

  return results;
}

module.exports = { runTests };
