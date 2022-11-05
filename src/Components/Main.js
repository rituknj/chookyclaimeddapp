import React from "react";
import Dogimage from "./Images/chooky-wink1.gif";
import bg from "./Images/Chooky-Home-2.png";
import { BsTelegram } from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

export default function Main() {
  return (
    <section>
      <div className="background">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-12  ">
              <div className=" card1">
                <div className="area">
                  <h3>Tier I Pool</h3>
                  <span> 1 ETH </span><br/><br/>
                  <span>Holders: 1000</span>
                </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
              <div className=" card1">
                <div className="area ">
                  <h3>Tier II Pool</h3>
                  <span> 5 ETH</span><br/><br/>
                  <span>Holders: 1000</span>
                </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
              <div className=" card1">
                <div className="area ">
                  <h3>Tier III Pool</h3>
                  <span> 15 ETH</span><br/><br/>
                  <span>Holders: 1000</span>
                </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
              <div className=" card1">
                <div className="area ">
                  <h3>Tier IV Pool</h3>
                  <span> 11 ETH</span><br/><br/>
                  <span>Holders: 1000</span>
                </div>
                </div>
              </div>
            </div>
            <div className="row" style={{marginTop:'100px'}}>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff" ,fontSize:'24px'}}>Your Chooky Balance:</p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content d-flex">
                  <p style={{ color: "#fff" ,fontSize:'24px'}}>
                    1,000,000  
                    
                  </p>
                  <span style={{color:'#fff', marginLeft:'20px', fontSize:'24px', fontWeight:'700'}} >Chooky</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff" ,fontSize:'24px'}}>Your Tier :</p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff",fontSize:'24px' }}>Tier II</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff" ,fontSize:'24px'}}>Last Claim Time :</p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff",fontSize:'24px' }}>1</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff",fontSize:'24px' }}>Next Claim Time :</p>
                </div>
              </div>
              <div className="col-lg-8   col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff",fontSize:'24px' }}> +14</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff" ,fontSize:'24px'}}>Total Claimed Till Date :</p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff",fontSize:'24px' }}> 2 ETH</p>
                </div>
              </div>
            </div>
            <div className="my-5">
            <div className="claim-button">
              <button className="claim-bu"> CLAIM</button>
            </div>
            </div>
          </div>
        </div>
        <div>
        <div>
        <div className="header-foot1">
    <h1 className='header-footer'>Join the most energetic crypto community that is ... </h1></div>
    </div>
    <div>
    <h2 className='design-font'>#CHOOKY</h2></div>
    <div className="social-icons">
    <BsTelegram style={{color:"#fff", fontSize:'50px', marginRight:'30px'}} />
    <BsTwitter style={{color:"#fff", fontSize:'50px'}} />
    
    </div>
        </div>
        </div>
    
      
      
    </section>
  );
}
