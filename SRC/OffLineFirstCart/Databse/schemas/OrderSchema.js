export const OrderSchema = {
  name: 'Order',
  primaryKey: 'id',
  properties: {
    id: 'string',
    timestamp: 'date',
    items: 'OrderItem[]',
    isSynced: { type: 'bool', default: false },
  },
};