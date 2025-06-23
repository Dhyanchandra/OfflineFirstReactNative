import NetInfo from '@react-native-community/netinfo';
import { syncOrderToServer } from './OrderService';
import realm from '../Databse/index';


export function startNetworkListener() {
  NetInfo.addEventListener(async state => {
    if (state.isConnected) {
      console.log('Network available. Syncing...');
      await syncPendingOrders();
    }
  });
}

export async function syncPendingOrders() {
  const pendingOrders = realm.objects('Order');
  for (let order of pendingOrders) {
    try {
      await syncOrderToServer(order); // actual API or mock endpoint
      
    } catch (error) {
      console.warn('Failed to sync order:', order.id, error);
    }
  }
}
