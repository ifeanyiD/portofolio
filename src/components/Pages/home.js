import React from 'react'
import About from './about'
import Skill from './My_skills'
import Portfolio from './portfolio'
import Contact from './contact'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './home.css'

export default function Home() {
    return (
        <div className="H_about">
        <Container fluid>
        <p className="before"></p>
            <Row>
                <Col>
                    <div className="H_header">
                        <h1>I am David, <br/> a web Developer</h1><br/>
                        <Button variant="outline-secondary">Contact me</Button>
                    </div>
                </Col>
            </Row>
            <Row><About/></Row>
            <Row><Skill/></Row>
            <Row><Portfolio/></Row>
            <Row><Contact/></Row>
            
        </Container>
        </div>
    )
}
