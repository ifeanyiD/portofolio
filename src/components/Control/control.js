import React, {useState} from 'react'
import {Link} from "react-router-dom"
import "./control.css"
import Profile from "../Pages/profile"
import Menu from "../Data/data"

export default function Control() {
    const [Bar, setBar] = useState(true)
    const Change = ()=>{
        setBar(prev=> prev = !prev)
    }
    return (
        <div className="control">
            <span className="span" onClick={Change}>
                {Bar?Menu.icons.menu:Menu.icons.cancel}
            </span>
               <span className="control_span"><Profile/></span> 
            <ul className={Bar?"control_1":"control_1 action"}> 
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="width"></div>
        </div>
    )
}
