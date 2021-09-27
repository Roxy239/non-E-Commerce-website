import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAdjust } from '@fortawesome/free-solid-svg-icons';
import './Writerdetails.css';

// import React from "react";
// import { Col } from "react-bootstrap";
// import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { Card } from "react-bootstrap";


const Writerdetails = (props) => {
    console.log(props);
    const { img, Name, Age, Country, Popularbook, Salary } = props.writer;

    const element = <FontAwesomeIcon icon={faAdjust} />
    return (

        <div className='col-sm-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} alt="" />
                <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                        <h4><small>Name:{Name}</small></h4>
                        <h4><small>Age:{Age}</small></h4>
                        <h4><small>Current city:{Country}</small></h4>
                        <h4><small>Best selling:{Popularbook}</small></h4>
                        <h4><small>Salary:{Salary}</small></h4>
                    </Card.Text>
                    <button
                        onClick={() => props.handleAdd(props.writer)
                        }
                        variant="primary" className="btn-regular"> {element}Add To Company</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Writerdetails;