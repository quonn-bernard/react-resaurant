import { Fragment, useState } from "react";
import { Header } from "./components/Layout/Header";
import { Meals } from './components/Meals/Meals';
import { Cart } from './components/Cart/Cart';

function App() {

  const [cartVisible, setCartVisible] = useState(false);
  
  const showCartHandler = () => {
    setCartVisible(true)
  } 

  const hideCardHandler = () => {
    setCartVisible(false)
  }

  return (
      <Fragment>
        {cartVisible && <Cart onClose={hideCardHandler} />}
        <Header onShowCart={showCartHandler}/>
          <main>
            <Meals />
          </main>
      </Fragment>
  );
}

export default App;
