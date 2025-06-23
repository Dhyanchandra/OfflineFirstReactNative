import NetInfo from '@react-native-community/netinfo';
import { startNetworkListener } from '../SRC/OffLineFirstCart/Services/SyncService';

jest.mock('@react-native-community/netinfo', () => ({
  addEventListener: jest.fn(),
}));

describe('Network Listener', () => {
  it('should listen to network changes', () => {
    const mockCallback = jest.fn();
    NetInfo.addEventListener.mockImplementation(callback => {
      mockCallback();
      callback({ isConnected: true });
      return () => {}; // unsubscribe
    });

    startNetworkListener();
    expect(NetInfo.addEventListener).toHaveBeenCalled();
  });
});
