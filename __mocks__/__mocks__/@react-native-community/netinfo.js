export default {
  addEventListener: jest.fn(() => ({
    remove: jest.fn(),
  })),
  fetch: jest.fn(() => Promise.resolve({ isConnected: true })),
};
