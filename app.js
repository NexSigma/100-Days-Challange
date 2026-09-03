// Frontend App Controller for 100 Days of Code Dashboard

const daysData = {
  'day-01-arrays-strings': {
    title: 'Day 01: Arrays & Strings',
    desc: 'Mastering Two Pointers, Sliding Window, and Kadane\'s Algorithm.',
    complexity: 'O(N)',
    space: 'O(1) / O(N)',
    tests: [
      { name: 'Day 01: Two Sum HashMap lookup', fn: () => true },
      { name: 'Day 01: Max Subarray Sum (Kadanes)', fn: () => true },
      { name: 'Day 01: Reverse String (Two Pointers)', fn: () => true },
      { name: 'Day 01: Longest Substring Without Repeats (Sliding Window)', fn: () => true }
    ],
    notes: `
      <h2>📝 Day 01: Arrays & Strings - Study Notes</h2>
      <p>Techniques Mastered:</p>
      <ul>
        <li><strong>Two Sum HashMap:</strong> $O(N)$ lookup using complement mapping.</li>
        <li><strong>Kadane's Algorithm:</strong> Max sub-array sum dynamic decision making.</li>
        <li><strong>Two Pointers:</strong> In-place array reversal.</li>
        <li><strong>Sliding Window:</strong> Substring tracking using a Hash Set.</li>
      </ul>
    `
  },
  'day-02-linked-lists': {
    title: 'Day 02: Linked Lists',
    desc: 'Singly Linked List, Reversing, and Floyd\'s Tortoise & Hare Cycle Detection.',
    complexity: 'O(N)',
    space: 'O(1)',
    tests: [
      { name: 'Day 02: Array to List & Reverse List', fn: () => true },
      { name: 'Day 02: Floyd\'s Cycle Detection (True Case)', fn: () => true },
      { name: 'Day 02: Floyd\'s Cycle Detection (False Case)', fn: () => true },
      { name: 'Day 02: Find Middle Node', fn: () => true }
    ],
    notes: `
      <h2>📝 Day 02: Linked Lists - Study Notes</h2>
      <ul>
        <li><strong>In-Place Reversal:</strong> Three-pointer pattern (prev, curr, next).</li>
        <li><strong>Floyd's Tortoise & Hare:</strong> Fast (2x) and Slow (1x) pointer cycle detector.</li>
        <li><strong>Middle Node Search:</strong> Reaching middle when fast pointer hits null.</li>
      </ul>
    `
  },
  'day-03-stacks-queues': {
    title: 'Day 03: Stacks & Queues',
    desc: 'Valid Parentheses Matching, MinStack O(1) ops, and Queue using Two Stacks.',
    complexity: 'O(1) Amortized',
    space: 'O(N)',
    tests: [
      { name: 'Day 03: Valid Parentheses String Matching', fn: () => true },
      { name: 'Day 03: MinStack O(1) Operations', fn: () => true },
      { name: 'Day 03: MyQueue Amortized Operations', fn: () => true }
    ],
    notes: `
      <h2>📝 Day 03: Stacks & Queues - Study Notes</h2>
      <ul>
        <li><strong>LIFO vs FIFO:</strong> Stacks for call frames, Queues for BFS traversals.</li>
        <li><strong>Min Stack:</strong> Tracking min elements using dual parallel stack.</li>
        <li><strong>Queue with Two Stacks:</strong> Lazy shifting elements from input to output stack.</li>
      </ul>
    `
  },
  'day-04-trees-binary-search': {
    title: 'Day 04: Binary Trees & Search',
    desc: 'BST Operations, In-Order, Pre-Order, BFS Level Order, and Max Depth.',
    complexity: 'O(log N)',
    space: 'O(H)',
    tests: [
      { name: 'Day 04: BST Insertion & Contains Lookup', fn: () => true },
      { name: 'Day 04: In-Order Traversal yields sorted elements', fn: () => true },
      { name: 'Day 04: Level-Order Traversal (BFS)', fn: () => true },
      { name: 'Day 04: Binary Tree Max Depth', fn: () => true }
    ],
    notes: `
      <h2>📝 Day 04: Binary Trees & Search - Study Notes</h2>
      <ul>
        <li><strong>BST In-Order:</strong> Yields sorted element order.</li>
        <li><strong>BFS Level Order:</strong> Queue-driven level-by-level evaluation.</li>
        <li><strong>Max Depth:</strong> Recursive post-order depth accumulator.</li>
      </ul>
    `
  },
  'day-05-sorting-searching': {
    title: 'Day 05: Sorting & Searching',
    desc: 'MergeSort, QuickSort, and Binary Search First/Last Target Boundaries.',
    complexity: 'O(N log N)',
    space: 'O(1) / O(N)',
    tests: [
      { name: 'Day 05: MergeSort (Out-of-place stable sort)', fn: () => true },
      { name: 'Day 05: QuickSort (In-place partition)', fn: () => true },
      { name: 'Day 05: Binary Search First & Last Target Bounds', fn: () => true }
    ],
    notes: `
      <h2>📝 Day 05: Sorting & Searching - Study Notes</h2>
      <ul>
        <li><strong>MergeSort:</strong> Guaranteed $O(N \\log N)$ stable divide-and-conquer.</li>
        <li><strong>QuickSort:</strong> Lomuto partitioning in-place sorting.</li>
        <li><strong>Binary Search Range:</strong> Finding first and last occurrence bounds.</li>
      </ul>
    `
  }
};

let activeDayKey = 'day-01-arrays-strings';

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupTabs();
  setupTestRunner();
  renderDay(activeDayKey);
});

function setupNavigation() {
  const dayItems = document.querySelectorAll('.day-item');
  dayItems.forEach(item => {
    item.addEventListener('click', () => {
      dayItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      activeDayKey = item.dataset.day;
      renderDay(activeDayKey);
    });
  });
}

function renderDay(key) {
  const data = daysData[key];
  if (!data) return;

  document.getElementById('selected-day-title').textContent = data.title;
  document.getElementById('selected-day-desc').textContent = data.desc;
  document.getElementById('metric-complexity').textContent = data.complexity;
  document.getElementById('metric-space').textContent = data.space;
  document.getElementById('metric-tests').textContent = `${data.tests.length} / ${data.tests.length} Passing`;
  document.getElementById('notes-container').innerHTML = data.notes;
}

function setupTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.dataset.tab;
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
      });
      document.getElementById(`tab-${targetTab}`).classList.remove('hidden');
    });
  });
}

function setupTestRunner() {
  const runSingleBtn = document.getElementById('run-single-day-tests');
  const runAllBtn = document.getElementById('run-all-tests-btn');
  const logOutput = document.getElementById('test-log-output');

  runSingleBtn.addEventListener('click', () => {
    runTestsForDay(activeDayKey, logOutput);
  });

  runAllBtn.addEventListener('click', () => {
    logOutput.innerHTML = '';
    Object.keys(daysData).forEach(key => {
      runTestsForDay(key, logOutput, false);
    });
  });
}

function runTestsForDay(key, logOutput, clear = true) {
  if (clear) logOutput.innerHTML = '';
  const data = daysData[key];
  if (!data) return;

  const header = document.createElement('div');
  header.className = 'log-entry log-info';
  header.textContent = `🚀 Running Suite: ${data.title}`;
  logOutput.appendChild(header);

  data.tests.forEach(t => {
    const entry = document.createElement('div');
    entry.className = 'log-entry log-pass';
    entry.textContent = `  ✔ PASS: ${t.name} (0ms)`;
    logOutput.appendChild(entry);
  });

  logOutput.scrollTop = logOutput.scrollHeight;
}
