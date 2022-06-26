import React, {Fragment} from "react"
import mealsPic from '../../assets/meals.jpg';
import classes from './Header.module.css';
import { HeaderCartButton } from "./HeaderCartButton";

export const Header = props => {
    return <Fragment>
                <header className={classes.header}>
                    <h1>ReactMeals</h1>
                    <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
                </header>
                <div className={classes['main-image']}>
                    <img src={mealsPic} alt='table full of food' />
                </div>
            </Fragment>
}