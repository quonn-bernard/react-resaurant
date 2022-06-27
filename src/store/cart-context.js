import React, {useState} from 'react';

export const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

// export const CartContextProvider = props => { 
//     const [items, setItems] = useState([]);
//     const [totalAmount, setTotalAmount] = useState(0);

//     function addItemToCartHandler(item) {
//         console.log('add')
//     }
    
//     const removeItemFromCartHandler = id => {
//         console.log('remove')
//     }

//     return <CartContext.Provider 
//             value={ {
//                 totalAmount: totalAmount, 
//                 items: items , 
//                 addItem: addItemToCartHandler,
//                 removeItem: removeItemFromCartHandler
//             }}
//     >
//         {props.children}
//     </CartContext.Provider>
// }

