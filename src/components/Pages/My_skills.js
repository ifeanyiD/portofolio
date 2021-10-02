import React from 'react'
import { Circle, CheckCircle } from 'react-bootstrap-icons'
import { Container, Row, Col } from 'react-bootstrap'

export default function My_skills() {
    return (
        <Container>
            <div className="body">
                <p className="before"></p>
            <Row>
                <Col lg={6} md={10} sm={10} xm={10}>
                        <div className="title">
                            <span style={{opacity:1}}>S</span>
                            <span style={{opacity:1}}>k</span>
                            <span style={{opacity:1}}>i</span>
                            <span style={{opacity:1}}>l</span>
                            <span style={{opacity:1}}>l</span>
                            <span style={{opacity:1}}>s</span>
                            <span className="space"></span>
                            <span style={{opacity:1}}>a</span>
                            <span style={{opacity:1}}>n</span>
                            <span style={{opacity:1}}>d</span>
                            <br></br>
                            <span style={{opacity:1}}>E</span>
                            <span style={{opacity:1}}>x</span>
                            <span style={{opacity:1}}>p</span>
                            <span style={{opacity:1}}>e</span>
                            <span style={{opacity:1}}>r</span>
                            <span style={{opacity:1}}>i</span>
                            <span style={{opacity:1}}>e</span>
                            <span style={{opacity:1}}>n</span>
                            <span style={{opacity:1}}>c</span>
                            <span style={{opacity:1}}>e</span>

                        </div>      
                        <p>I have created successful responsive websites that are fast,easy to use, and built with best pratices. The main area of my specialization is front-end development, HTML, CSS, JS, building
                           small and medium web apps, animations, and coding interative layouts.
                           <br/>I also have full-stack developer experience.
                        </p>
                    
                </Col>
                <Col lg={6} md={6} sm={10} xm={10}>
                 <div className="skill_level">
                         <span>Front-End</span>
                         <footer>
                             <div className="front_end"></div>
                         </footer>
                     </div>
                     <div className="skill_level">
                         <span>Back-End</span>
                         <footer>
                             <div className="back_end"></div>
                         </footer>
                     </div>
                     
                     <div className="skill_level">
                         <span>Javascript</span>
                         <footer>
                             <div className="footer1"></div>
                         </footer>
                     </div>
                     <div className="skill_level">
                         <span>jQuery</span>
                         <footer>
                             <div className="footer2"></div>
                         </footer>
                     </div>
                     <div className="skill_level">
                         <span>React</span>
                         <footer>
                             <div className="footer1"></div>
                         </footer>
                     </div>
                     <div className="skill_level">
                         <span>Nodejs</span>
                         <footer>
                             <div className="footer3"></div>
                         </footer>
                     </div>
                     <div className="skill_level">
                         <span>Bootstrap</span>
                         <footer>
                             <div className="footer4"></div>
                         </footer>
                     </div>
                </Col>

            </Row>
                <p className="after"></p>
            </div>
        </Container>
    )
}
