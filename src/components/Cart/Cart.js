import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let writername = " ";
    for (const writer of cart) {
        total = total + writer.Salary;
    }
    for (const writer of cart) {
        writername = writername + writer.Name + "," + "\n";

    }
    return (
        <div>
            <h3>Selected top writers</h3>
            <h5>Writer added:{props.cart.length}</h5>
            <h5>Total Cost: ${total}</h5>
            <h5>Hired: {writername}</h5>
        </div>
    );
};

export default Cart;