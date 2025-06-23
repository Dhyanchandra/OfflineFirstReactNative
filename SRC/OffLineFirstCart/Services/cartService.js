import realm from '../Databse/index';

export const addToCart = (product) => {
  const existing = realm.objectForPrimaryKey('CartItem', product.id);
  realm.write(() => {
    if (existing) {
      existing.quantity += 1;
    } else {
      realm.create('CartItem', {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }
  });
};

export const decreaseQuantity = (productId) => {
  const item = realm.objectForPrimaryKey('CartItem', productId);
  if (!item) return;

  realm.write(() => {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      realm.delete(item);
    }
  });
};
export const increaseQuantity = (productId) => {
  const item = realm.objectForPrimaryKey('CartItem', productId);
  if (!item) return;

  realm.write(() => {
    
      item.quantity += 1;
    
  });
};

export const removeFromCart = (productId) => {
  const item = realm.objectForPrimaryKey('CartItem', productId);
  if (!item) return;
  realm.write(() => {
    realm.delete(item);
  });
};

export const getCartItems = () => {
  return realm.objects('CartItem');
};
