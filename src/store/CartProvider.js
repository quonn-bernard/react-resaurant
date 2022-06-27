import { useReducer } from 'react'
import {CartContext} from '../store/cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
            );
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                };

                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem
            } else {
                updatedItems = state.items.concat(action.item)
            }

        return {
            items:updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'REMOVE_ITEM') {
        const exisitingCartItemIndex = state.items.findIndex(
            item => item.id === action.id
        );
        const exisitingItem = state.items[exisitingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - exisitingItem.price;
        let updatedItems;
        if (exisitingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        }else {
            const updatedItem = { ...exisitingItem, amount: exisitingItem.amount - 1 };
            updatedItems = [...state.items]
            updatedItems[exisitingCartItemIndex] = updatedItem;
        }
        return {
            items:updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
};

export const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item: item
        })
    }
    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id: id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

return <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
}