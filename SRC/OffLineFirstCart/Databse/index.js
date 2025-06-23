import Realm from 'realm';
import { CartItemSchema } from './schemas/CartItemSchema';
import { OrderSchema } from './schemas/OrderSchema';
import { OrderItemSchema } from './schemas/OrderItemSchema';
const realm = new Realm({ schema: [CartItemSchema,OrderSchema, OrderItemSchema] });

export default realm;
