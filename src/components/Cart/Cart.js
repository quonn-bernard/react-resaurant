import classes from './Cart.module.css';
import { Modal } from '../UI/Modal';
import { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import { CartItem } from './CartItem';

export const Cart = props => {
const cartCtx = useContext(CartContext);
// console.log(cartCtx.totalAmount)
const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
const cartItemAddHandler = item => {
    cartCtx.addItem({
        ...item,
        amount: 1
    })
}
const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)
}

const hasItems = cartCtx.items.length > 0;
    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => {
            return <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount}
                price={item.price}
                onAdd={cartItemAddHandler.bind(null, item)}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                />
        })
    }
    </ul>

    return <Modal onClose={props.onClose}>
            {cartItems} 
            <div className={classes.total}>
                <span>total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
}