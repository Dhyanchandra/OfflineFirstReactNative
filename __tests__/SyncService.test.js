import { syncPendingOrders } from '../SRC/OffLineFirstCart/Services/SyncService';
import Realm from 'realm';
import * as OrderService from '../SRC/OffLineFirstCart/Services/OrderService';

jest.mock('realm');
jest.mock('../SRC/OffLineFirstCart/Services/OrderService', () => ({
  syncOrderToServer: jest.fn().mockResolvedValue(),
}));

describe('SyncService', () => {
  it('should sync unsynced orders', async () => {
    const mockOrders = [
      {
        id: '1',
        isSynced: false,
        timestamp: new Date(),
      },
    ];

    const mockWrite = jest.fn(cb => cb());

    Realm.prototype.objects = jest.fn().mockReturnValue(mockOrders);
    Realm.prototype.filtered = jest.fn().mockReturnValue(mockOrders);
    Realm.prototype.write = mockWrite;

    await syncPendingOrders();

    expect(OrderService.syncOrderToServer).toHaveBeenCalledWith(mockOrders[0]);
  });
});
