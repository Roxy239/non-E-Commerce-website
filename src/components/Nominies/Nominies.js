import React, { useState } from 'react';
import { useEffect } from 'react';
import Writerdetails from '../Writerdetails/Writerdetails';
import './Nominies.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../Cart/Cart';
// import { Container } from 'react-bootstrap';
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";

const Nominies = () => {
    const [writers, setWriters] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./tool.JSON')
            .then(res => res.json())
            .then(data => setWriters(data));
    }, [])

    const handleAdd = (writer) => {
        console.log(writer.Name);
        const newCart = [...cart, writer];
        setCart(newCart);
    }


    return (
        <div className='nominies-container'>
            <div className="writer-container row">


                {
                    writers.map(writer => <Writerdetails
                        key={writer.key}
                        writer={writer}
                        handleAdd={handleAdd}
                    >

                    </Writerdetails>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Nominies;