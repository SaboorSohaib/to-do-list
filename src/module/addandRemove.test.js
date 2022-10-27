const MockItemsTest = require('./mockItemsClass.js');
const mockItems = require('../__mockFunction__/storage.js');

describe('test fore adding task', () => {
  const testItems = new MockItemsTest('task0', 1, false);
  const testItems1 = new MockItemsTest('task1', 2, false);
  test('Add items to the list', () => {
    expect(MockItemsTest.addTask(testItems.getItem()).length).toBe(mockItems.length);
    expect(MockItemsTest.addTask(testItems1.getItem()).length).toBe(mockItems.length);
  });
});