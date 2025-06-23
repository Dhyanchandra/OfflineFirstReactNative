export default class Realm {
  constructor(config) {
    this.config = config;
    this.objects = jest.fn(() => []);
    this.write = jest.fn(cb => cb());
    this.create = jest.fn();
    this.delete = jest.fn();
    this.filtered = jest.fn(() => []);
    this.objectForPrimaryKey = jest.fn(() => ({
      id: 'mock-id',
      timestamp: new Date(),
      items: [],
    }));
  }
}
