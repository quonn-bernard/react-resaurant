import { useContext } from "react";
import { CartIcon } from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css';
import { AppContext } from '../../store/appContext';

export const HeaderCartButton = props => {
    const appCtx = useContext(AppContext);

    return <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button> 
}