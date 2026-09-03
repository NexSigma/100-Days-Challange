const { solveSample } = require('./solution');

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

  assert('day-06-graph-algorithms: Sample Test Case', () => {
    const output = solveSample('hello');
    if (output !== 'hello') throw new Error('Expected hello, got ' + output);
  });

  return results;
}

module.exports = { runTests };
