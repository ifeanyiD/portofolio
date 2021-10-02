import React from 'react'
import "./page.css"
import Data from "../Data/data"
import Button from "../Button/button"
import { Circle } from 'react-bootstrap-icons'
import { Container, Row, Col } from 'react-bootstrap'

export default function about(props) {
    return (
        <div className="container_page">
        <Container >
        <p className="before"></p>
            <Row>
                <Col lg={6} md={6} sm={10}> 
                    <div className="page_content"> 
                    <div className="title">
                            <span style={{opacity:1}}>A</span>
                            <span style={{opacity:1}}>b</span>
                            <span style={{opacity:1}}>o</span>
                            <span style={{opacity:1}}>u</span>
                            <span style={{opacity:1}}>t</span>
                            <span className="space"></span>
                            <span style={{opacity:1}}>M</span>
                            <span style={{opacity:1}}>e</span>
                    </div>
                        <p>
                        {Data.personality.About}
                        </p>
                        <Button/>
                    </div>
                </Col >
                    <Col lg={6} md={6} sm={10}>
                        <div className="roller">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>jQuery</span>
                            <span>Nodejs</span>
                            <span>Bootstrap</span>
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>GitHub</span>
                            <span>ES5/ES6</span>



                        </div>
                    </Col>

            </Row>

            <Circle className="bubble1" fill="blue"/>
            <Circle className="bubble2" fill="green"/>
            <Circle className="bubble3" fill="pink"/>
            <Circle className="bubble4" fill="red"/>
            <p className="after"></p>
        </Container>
        </div>
    
    )
}
