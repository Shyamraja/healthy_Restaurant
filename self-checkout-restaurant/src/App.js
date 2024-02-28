// App.js
import React, { useState } from 'react';
import Home from './components/Home';
import ConfirmationPage from './components/ConfirmationPage';

const App = () => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
  };

  return (
    <div>
      {orderConfirmed ? <ConfirmationPage /> : <Home onConfirm={handleConfirmOrder} />}
    </div>
  );
};

export default App