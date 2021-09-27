import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import './Writerdetails.css';

// import React from "react";
// import { Col } from "react-bootstrap";
// import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { Card } from "react-bootstrap";


const Writerdetails = (props) => {
    console.log(props);
    const { img, Name, Age, Country, Popularbook, Salary } = props.writer;

    const element = <FontAwesomeIcon icon={faHandPointer} />;

    const imgStyle = {
        "height": "200px",
        "width": "200px",
        "borderRadius": "50%"
    };

    const cardStyle = {
        "background-color": "lightgrey",
        "width": "18rem",
        "justifyContent": "center",
        "alignItems": "center",
        "padding": "10px 5px",
        "width": "300px",
        "margin": "20px 10px",
        "border": "3px solid antiquewhite",
        "border-radius": "5px"
    };

    return (

        <div className='col-sm-4'>
            <Card style={cardStyle}>
                <Card.Img variant="top" style={imgStyle} src={img} alt="" />
                <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                        <h4><small>{Name}</small></h4>
                        <p><small>Age: {Age}</small></p>
                        <p><small>Current city: {Country}</small></p>
                        <p><small>Best selling: {Popularbook}</small></p>
                        <p><small>Salary: ${Salary}</small></p>
                    </Card.Text>
                    <button
                        onClick={() => props.handleAdd(props.writer)
                        }
                        variant="primary" className="btn-regular"> {element}      Hire</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Writerdetails;