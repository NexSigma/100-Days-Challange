/**
 * DAY 02: Linked Lists
 * Concepts: Node structure, Reversing Singly Linked List, Floyd's Cycle Detection
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// 1. Array to Linked List helper
function arrayToList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// 2. Linked List to Array helper
function listToArray(head) {
  const arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

// 3. Reverse Singly Linked List In-Place - O(N) Time, O(1) Space
function reverseList(head) {
  let prev = null;
  let current = head;
  while (current) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}

// 4. Floyd's Tortoise and Hare Cycle Detection - O(N) Time, O(1) Space
function hasCycle(head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

// 5. Find Middle Node of Linked List - O(N)
function findMiddle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

module.exports = {
  ListNode,
  arrayToList,
  listToArray,
  reverseList,
  hasCycle,
  findMiddle
};
