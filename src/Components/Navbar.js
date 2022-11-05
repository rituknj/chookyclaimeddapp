import React, { useState } from "react";
import "./Navbar.css";
import Dogimage from "./Images/chooky-wink1.gif";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import walletconnect from "./Images/connect.dc871f60434bd877387be88f4a3192d6.svg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import metamask from "./Images/meta.png";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-black">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"></a>
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
                <a class="nav-link active" aria-current="page" href="#"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"></a>
              </li>

              <div className="image-dog1">
                <img src={Dogimage} alt="" className="image-dog" />
              </div>
            </ul>
            <form class="d-flex mx-4" role="search">
              <Button variant="primary" onClick={handleShow} className="btn">
                Connect Wallet
              </Button>
            </form>

            {/* DISCONNECT BUTTON */}

            {/* <form class="d-flex mx-2" role="search">
              <DropdownButton
                className="btn2"
                id="dropdown-basic-button"
                title="Dropdown button"
              >
                <Dropdown.Item>Disconnect</Dropdown.Item>
              </DropdownButton>
            </form> */}
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title className="ms-auto">
                Please connect your wallet
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex justify-content-around align-items-center">
                <img
                  src={metamask}
                  alt=""
                  className="imgwidth"
                  onClick={() => setShow(false)}
                />
                <img
                  src={walletconnect}
                  alt=""
                  className="imgwidth"
                  onClick={() => setShow(false)}
                />
              </div>
            </Modal.Body>
          </Modal>
        </div>
        {/* <div className="background-image">
            <img src={background} alt="" className="background" />
          </div> */}
      </nav>
    </div>
  );
}
