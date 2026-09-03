const { ListNode, arrayToList, listToArray, reverseList, hasCycle, findMiddle } = require('./solution');

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

  assert('Day 02: Array to List conversion & Reverse List', () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const reversed = reverseList(head);
    const resultArr = listToArray(reversed);
    if (JSON.stringify(resultArr) !== JSON.stringify([5, 4, 3, 2, 1])) {
      throw new Error(`Expected [5,4,3,2,1], got ${JSON.stringify(resultArr)}`);
    }
  });

  assert("Day 02: Floyd's Cycle Detection (True Case)", () => {
    const n1 = new ListNode(1);
    const n2 = new ListNode(2);
    const n3 = new ListNode(3);
    n1.next = n2;
    n2.next = n3;
    n3.next = n2; // cycle back to n2
    if (!hasCycle(n1)) throw new Error('Expected true for list with cycle');
  });

  assert("Day 02: Floyd's Cycle Detection (False Case)", () => {
    const head = arrayToList([10, 20, 30]);
    if (hasCycle(head)) throw new Error('Expected false for linear list');
  });

  assert('Day 02: Find Middle Node', () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const mid = findMiddle(head);
    if (mid.val !== 3) throw new Error(`Expected middle value 3, got ${mid.val}`);
  });

  return results;
}

module.exports = { runTests };
