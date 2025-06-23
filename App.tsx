import React, { useEffect } from 'react';
import ProductListScreen from './SRC/OffLineFirstCart/View/ProductListScreen';
import { startNetworkListener } from './SRC/OffLineFirstCart/Services/SyncService';

const App = () => {
  useEffect(() => {
    startNetworkListener();
  }, []);

  return <ProductListScreen />;
};

export default App;
