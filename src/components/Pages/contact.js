import React, {useState} from 'react'
import Data from "../Data/data"
import {Container, Row, Col} from "react-bootstrap"
import Map from "./map"
import { validation } from '../Control/validation'
import { red } from '@material-ui/core/colors'

const error_style = {
    color:red
}

export default function Contact() {
    const [values, setValue] = useState({
        name : "",
        email : "",
        message : ""
    });

    const [errors, setErrorMsg] = useState({})

    let nameChange = e=>{
        setValue({
            ...values,
            [e.target.name] :e.target.value
        }
        )
    }

    function submit(e){
       e.preventDefault();
       setErrorMsg(validation(values, e))
    
       }
    return (
        <Container className="contac_page">
            <Row>
                <Col lg={6} md={12} sm={12} xm={12}>
                    <p className="before"></p>
                    <div className="title">
                            <span style={{opacity:1}}>C</span>
                            <span style={{opacity:1}}>o</span>
                            <span style={{opacity:1}}>n</span>
                            <span style={{opacity:1}}>t</span>
                            <span style={{opacity:1}}>a</span>
                            <span style={{opacity:1}}>c</span>
                            <span style={{opacity:1}}>t</span>
                            <span className="space"></span>
                            <span style={{opacity:1}}>M</span>
                            <span style={{opacity:1}}>e</span>
            </div>       
                    <span>{Data.personality.Interest}</span>
                    <form onSubmit={submit}>
                        <div className="contact_form">

                            <input value={values.name} 
                                   onChange={nameChange} 
                                   type="text"  
                                   name="name" 
                                   placeholder="Your Name Please"
                                   autoComplete="none"
                                   className={values.name.length<3 ? "contact_form1" : " contact_form2"}
                                   >
                            </input>
                            {errors.name && <p>{errors.name}</p>}
                            <input value={values.email} 
                                   onChange={nameChange} 
                                   type="text" 
                                   name="email" 
                                   placeholder="Enter your email"
                                   >
                            </input>
                            {errors.email && <p>{errors.email}</p>}
                            
                            <textarea value={values.comment} 
                                      onChange={nameChange} 
                                      name="message" 
                                      placeholder="Email me"
                                      className={values.message.length<10 ? "contact_form1" : " contact_form2"}
                                      >
                            </textarea>
                            {errors.message && <p>{errors.message}</p>}

                            <button>Submit</button>
                        </div>
                    </form>
                    <p className="after"></p>
                </Col>
                <Col lg={6} md={12} sm={12} xm={12}>
                    <Map/>
                </Col>
            </Row>
        </Container>
    )
}
