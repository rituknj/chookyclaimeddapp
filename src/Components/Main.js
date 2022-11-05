import React from "react";
import Dogimage from "./Images/chooky-wink1.gif";
import bg from "./Images/Chooky-Home-2.png";

export default function Main() {
  return (
    <section>
      <div className="background">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 card1 ">
                <div className="area ">
                  <h3>Tier I Pool</h3>
                  <span> 1 ETH : </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 card1">
                <div className="area ">
                  <h3>Tier I Pool</h3>
                  <span> 1 ETH</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 card1">
                <div className="area ">
                  <h3>Tier I Pool</h3>
                  <span> 1 ETH</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 card1">
                <div className="area ">
                  <h3>Tier I Pool</h3>
                  <span> 1 ETH</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff" }}>Your Chooky Balance:</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff" }}>
                    _____________________________
                    <button className="chooky-button">Chooky</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff" }}>Your Tier :</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff" }}>Tier II</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff" }}>Last Claim Time :</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff" }}>_____________________________</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff" }}>Next Claim Time :</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff" }}> +14</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff" }}>Total Claimed Till Date :</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff" }}> _______ETH</p>
                </div>
              </div>
            </div>
            <div className="claim-button">
              <button className="claim-bu"> CLAIM</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
