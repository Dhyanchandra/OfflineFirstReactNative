import Realm from 'realm';
import {
  createOrder,
  updateOrder,
  deleteOrder,
} from '../SRC/OffLineFirstCart/Services/OrderService';

jest.mock('realm');

describe('OrderService', () => {
  const mockWrite = jest.fn(cb => cb());

  beforeEach(() => {
    Realm.mockClear();
    Realm.prototype.write = mockWrite;
    Realm.prototype.create = jest.fn();
    Realm.prototype.delete = jest.fn();
    Realm.prototype.objectForPrimaryKey = jest.fn().mockReturnValue({
      items: [],
      timestamp: new Date(),
    });
  });

  it('should create an order', () => {
    createOrder([
      { productId: 'p1', name: 'Test Product', quantity: 2, price: 10 },
    ]);

    expect(mockWrite).toHaveBeenCalled();
    expect(Realm.prototype.create).toHaveBeenCalledWith(
      'Order',
      expect.objectContaining({
        id: expect.any(String),
        items: expect.any(Array),
        isSynced: false,
      })
    );
  });

  it('should update an order', () => {
    updateOrder('123', [
      { productId: 'p1', name: 'Updated', quantity: 1, price: 5 },
    ]);

    expect(mockWrite).toHaveBeenCalled();
  });

  it('should delete an order', () => {
    deleteOrder('123');

    expect(mockWrite).toHaveBeenCalled();
    expect(Realm.prototype.delete).toHaveBeenCalled();
  });
});
