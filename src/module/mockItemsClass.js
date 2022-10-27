const mockItems = require('../__mockFunction__/storage.js');

module.exports = class MockItemsTest {
  constructor(description, id = 0, complete = false) {
    this.description = description;
    this.id = id;
    this.complete = complete;
  }

  getItem() {
    const testTask = {
      description: this.description,
      id: this.id,
      complete: this.complete,
    };
    return testTask;
  }

  static addTask(items) {
    mockItems.push(items);
    return mockItems;
  }

  static deleteTask(id) {
    mockItems.splice(id, 1);
    return mockItems;
  }
};