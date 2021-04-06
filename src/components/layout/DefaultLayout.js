import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

import Header from "./Partial/Header";
import Footer from "./Partial/Footer";

import "./defaultLayout.css";


export const DefaultLayout = ({children}) => {
    return (
        <Container fluid>
            <Row>
                <Col className="left-bar">
                Left Menu
                </Col>
                <Col xs ={8}>
                <div className = "Main">
                <Header/>
                {children}
                <Footer/>
                </div>
                </Col>
            </Row>
            
        </Container>
    )
}

export default DefaultLayout;