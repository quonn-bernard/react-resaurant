import classes from './Cart.module.css';
import { useContext } from 'react';
import { AppContext } from '../../store/appContext';
import { Modal } from '../UI/Modal';

export const Cart = props => {

    const appCtx = useContext(AppContext);

    const cartItems = <ul>{[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(item => <li className={classes['cart-items']} key={item.id}>{item.name}</li>)}</ul>

    if(!appCtx.isVisible) {
        return null
    }

    return <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
}