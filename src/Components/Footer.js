import React from 'react'
import Footerimg from "./Images/Chooky-Home-2.png";
import "./Footer.css"
import { BsTelegram } from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

export default function Footer() {
  return (
    <section>
    <div className='container-fluid'>
    <div className='element-img'>
    <img src={Footerimg} alt=''/>  
    </div>
    <div>
    <h1 className='header-footer'>Join the most energetic crypto community that is ... </h1></div>
    </div>
    <div>
    <h2 className='design-font'>#CHOOKY</h2></div>
    <span>
    <BsTelegram style={{color:"#fff", width:"100%"}} />
    <BsTwitter style={{color:"#fff", width:"100%"}} />
    
    </span>
    
    </section>
  )
}
