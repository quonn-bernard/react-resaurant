import { Fragment, useState, useContext } from "react";
import { Header } from "./components/Layout/Header";
import { Meals } from './components/Meals/Meals';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from "./store/CartProvider";

function App() {

  const [cartVisible, setCartVisible] = useState(false);
  
  const showCartHandler = () => {
    setCartVisible(true)
  } 

  const hideCardHandler = () => {
    setCartVisible(false)
  }

  

  return (
      <CartProvider>
        {cartVisible && <Cart onClose={hideCardHandler} />}
        <Header onShowCart={showCartHandler}/>
          <main>
            <Meals />
          </main>
      </CartProvider>
  );
}

export default App;
