export const CartItemSchema = {
  name: 'CartItem',
  primaryKey: 'id',
  properties: {
    id: 'int',
    title: 'string',
    price: 'int',
    image: 'string',
    quantity: { type: 'int', default: 1 },
  },
};



