export const CartItemSchema = {
  name: 'CartItem',
  primaryKey: 'id',
  properties: {
    id: 'int',
    title: 'string',
    price: 'int',
    image: 'string',
  },
};
