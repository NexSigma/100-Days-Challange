const fs = require('fs');
const path = require('path');

const daysDir = path.join(__dirname, '..', 'days');

console.log('\n==================================================');
console.log('🧪 100-DAYS-OF-CODE AUTOMATED TEST RUNNER');
console.log('==================================================\n');

if (!fs.existsSync(daysDir)) {
  console.log('❌ No days directory found.');
  process.exit(1);
}

const folders = fs.readdirSync(daysDir).filter(f => fs.statSync(path.join(daysDir, f)).isDirectory());

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

for (const folder of folders) {
  const testFile = path.join(daysDir, folder, 'solution.test.js');
  if (!fs.existsSync(testFile)) continue;

  console.log(`📌 Category: \x1b[36m${folder}\x1b[0m`);
  try {
    const testModule = require(testFile);
    if (typeof testModule.runTests === 'function') {
      const results = testModule.runTests();
      results.forEach(r => {
        totalTests++;
        if (r.passed) {
          passedTests++;
          console.log(`  \x1b[32m✔ PASS\x1b[0m: ${r.name} (${r.duration || 0}ms)`);
        } else {
          failedTests++;
          console.log(`  \x1b[31m✖ FAIL\x1b[0m: ${r.name}`);
          console.log(`    \x1b[33mError:\x1b[0m ${r.error}`);
        }
      });
    }
  } catch (err) {
    console.log(`  \x1b[31m✖ Failed to load test module:\x1b[0m ${err.message}`);
    failedTests++;
  }
  console.log('');
}

console.log('--------------------------------------------------');
console.log(`📊 SUMMARY: Total: ${totalTests} | \x1b[32mPassed: ${passedTests}\x1b[0m | \x1b[31mFailed: ${failedTests}\x1b[0m`);
console.log('--------------------------------------------------\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('🎉 All test suites passed successfully!\n');
  process.exit(0);
}
