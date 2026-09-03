const fs = require('fs');
const path = require('path');

const daysDir = path.join(__dirname, '..', 'days');
const streakFile = path.join(__dirname, '..', 'STREAK_TRACKER.md');
const readmeFile = path.join(__dirname, '..', 'README.md');

let dayName = process.argv[2];

if (!dayName) {
  // auto increment day
  if (!fs.existsSync(daysDir)) fs.mkdirSync(daysDir, { recursive: true });
  const existingDays = fs.readdirSync(daysDir).filter(f => fs.statSync(path.join(daysDir, f)).isDirectory());
  const nextNum = String(existingDays.length + 1).padStart(2, '0');
  dayName = `day-${nextNum}-new-topic`;
}

const targetDir = path.join(daysDir, dayName);
if (fs.existsSync(targetDir)) {
  console.log(`⚠️ Directory already exists: ${dayName}`);
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

// 1. Solution template
const solutionContent = `/**
 * ${dayName.toUpperCase()} - Implementation
 */

function solveSample(input) {
  // TODO: Add algorithm implementation here
  return input;
}

module.exports = {
  solveSample
};
`;

// 2. Test template
const testContent = `const { solveSample } = require('./solution');

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

  assert('${dayName}: Sample Test Case', () => {
    const output = solveSample('hello');
    if (output !== 'hello') throw new Error('Expected hello, got ' + output);
  });

  return results;
}

module.exports = { runTests };
`;

// 3. Notes template
const notesContent = `# 📝 ${dayName.replace(/-/g, ' ').toUpperCase()} - Notes & Reflections

## 🎯 Key Concepts
- Concept 1: Description of key approach.
- Concept 2: Time & Space complexity analysis.

## 💡 Code Snippet
\`\`\`javascript
const { solveSample } = require('./solution');
console.log(solveSample('test'));
\`\`\`

## 🧠 Lessons Learned
- Bullet point notes to commit daily.
`;

fs.writeFileSync(path.join(targetDir, 'solution.js'), solutionContent);
fs.writeFileSync(path.join(targetDir, 'solution.test.js'), testContent);
fs.writeFileSync(path.join(targetDir, 'notes.md'), notesContent);

console.log(`✅ Successfully scaffolded directory: days/${dayName}`);
console.log(`   - Solution: days/${dayName}/solution.js`);
console.log(`   - Tests:    days/${dayName}/solution.test.js`);
console.log(`   - Notes:    days/${dayName}/notes.md`);
