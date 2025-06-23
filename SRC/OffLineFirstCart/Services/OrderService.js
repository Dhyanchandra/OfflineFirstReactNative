import uuid from 'react-native-uuid';
import realm from '../Databse/index';


export function createOrder(items) {
  const id = uuid.v4();
  const timestamp = new Date();

  realm.write(() => {
    realm.create('Order', {
      id,
      timestamp,
      items,
      isSynced: false,
    });
  });
}

export function updateOrder(id, updatedItems) {
  const order = realm.objectForPrimaryKey('Order', id);
  if (order) {
    realm.write(() => {
      order.items = updatedItems;
      order.timestamp = new Date();
      order.isSynced = false;
    });
  }
}

export function deleteOrder(id) {
  const order = realm.objectForPrimaryKey('Order', id);
  if (order) {
    realm.write(() => {
      realm.delete(order.items);
      realm.delete(order);
    });
  }
}

export async function syncOrderToServer(order) {
  // Simulate remote save (replace with actual API call)
  console.log('Syncing order:', JSON.stringify(order));
  return new Promise(resolve => setTimeout(resolve, 1000));
}
