import React from "react";
import "./Navbar.css";
import Dogimage from "./Images/chooky-wink1.gif";

export default function Navbar() {
  return (
    <section style={{background:'#000'}}>
      <div>
        <nav class="navbar navbar-expand-lg bg-black">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    
                  </a>
                </li>
              
               <div className="image-dog1">
            <img src={Dogimage} alt="" className="image-dog"/>
          </div>
              </ul>
              <form class="d-flex" role="search">
             
                
                <button className="btn " type="submit">
                  Connect Wallet
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
