import React from 'react';
import cartIcon from "../../../../assets/img/icons8-shopping-cart-60.png";
import "../../../../css/common/header/cart.css";

const Cart = () => {
    return (
        <>
            <div className='Cart__top'>
                <img src={cartIcon} alt="Cart Icon" />
                <span className='count'>0</span>
            </div>
        </>
    );
};

export default Cart;