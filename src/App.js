
import './App.css';
import {React, useState} from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';



function App() {
  const [cartisShown, setcartisShown] = useState(false);

  const showCartHandler = () => {
    setcartisShown(true);
  }

  const hideCartHandler = () => { 
    setcartisShown(false);
  }


  return (
    <CartProvider>
      {cartisShown && <Cart onClose={hideCartHandler} />}
      <Header onConfirmShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
