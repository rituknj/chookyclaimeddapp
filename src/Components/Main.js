import React, { useEffect, useState } from "react";
import Dogimage from "./Images/chooky-wink1.gif";
import bg from "./Images/Chooky-Home-2.png";
import { BsTelegram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast'
import Navbar from "./Navbar";
import { Tier1holders, Tier2holders, Tier3holders, Tier4holders, TierBalance, tokenBalance, Claimroyalty, lastTimeClaim, ChookyholderDetails, GetChainId } from "./../Connection_Web3/Wallet"

const notify = (msg) => toast.success(msg)

export default function Main({account, Dissconnect, Metamask, WalletC}) {
  
  const [holder1, setHolder1] = useState(0)
  const [holder2, setHolder2] = useState(0)
  const [holder3, setHolder3] = useState(0)
  const [holder4, setHolder4] = useState(0)
  const [tier1, setTier1] = useState(0)
  const [tier2, setTier2] = useState(0)
  const [tier3, setTier3] = useState(0)
  const [tier4, setTier4] = useState(0)
  const [balance, setBalance] = useState(0)
  const [lasttime, setLastTime] = useState(0)
  const [totalclaim, setTotalClaim] = useState(false)
  const [tier, setTier] = useState(0)

  useEffect(()=>{
    const init =async()=>{
      const id = await GetChainId();
      console.log(id,"ID is")
      if (Number(id) != 5) {
        return;
      }

      console.log("Running");
      const one = await Tier1holders()
      setHolder1(one)
      
      const two = await Tier2holders()
      setHolder2(two) 

      const three = await Tier3holders();
      setHolder3(three)

      const four = await Tier4holders();
      setHolder4(four)

      const tierbal = await TierBalance();
      setTier4(tierbal[3])
      setTier3(tierbal[2])
      setTier2(tierbal[1])
      setTier1(tierbal[0])

      const bal = await tokenBalance()
      setBalance(bal)
      
      // const last = await lastTimeClaim()
      // setLastTime(last)

      const userdata = await ChookyholderDetails();
      setLastTime(userdata[4])
      setTotalClaim(userdata[3]/10**18)
      setTier(userdata[1])
    }
    
    init();
  },[account])

  const claim = async() =>{
    const data = await Claimroyalty();
    if(data.status){
      notify("Cliam successfully")
    }
  }

  return (
    <section>
      <div className="background">
        <Navbar  account={account} Dissconnect={Dissconnect} Metamask={Metamask} WalletC={WalletC}/>
        <div className="container">
          <div>
            <div className="row section-top">
              <div className="col-lg-3 col-md-3 col-sm-6 col-12  ">
                <div className=" card1">
                  <div className="area">
                    <h3>Tier I Pool</h3>
                    <span> {tier1} ETH </span>
                    <br />
                    <br />
                    <span>Holders: {holder1}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
                <div className=" card1">
                  <div className="area ">
                    <h3>Tier II Pool</h3>
                    <span> {tier2} ETH</span>
                    <br />
                    <br />
                    <span>Holders: {holder2}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
                <div className=" card1">
                  <div className="area ">
                    <h3>Tier III Pool</h3>
                    <span> {tier3} ETH</span>
                    <br />
                    <br />
                    <span>Holders: {holder3}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
                <div className=" card1">
                  <div className="area ">
                    <h3>Tier IV Pool</h3>
                    <span> {tier4} ETH</span>
                    <br />
                    <br />
                    <span>Holders: {holder4}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "100px" }}>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff", fontSize: "24px" }}>
                    Your Chooky Balance:
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content d-flex">
                  <p style={{ color: "#fff", fontSize: "24px" }}>{balance}</p>
                  <span
                    style={{
                      color: "#fff",
                      marginLeft: "20px",
                      fontSize: "24px",
                      fontWeight: "700",
                    }}
                  >
                    Chooky
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff", fontSize: "24px" }}>Your Tier :</p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff", fontSize: "24px" }}>{tier}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff", fontSize: "24px" }}>
                    Last Claim Time :
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff", fontSize: "24px" }}>{lasttime == 0 ? "00/00/0000, 00:00:00" : new Date(lasttime).toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff", fontSize: "24px" }}>
                    Next Claim Time :
                  </p>
                </div>
              </div>
              <div className="col-lg-8   col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff", fontSize: "24px" }}>{lasttime == 0 ? "00/00/0000, 00:00:00" : new Date(lasttime + 1209600).toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff", fontSize: "24px" }}>
                    Total Claimed Till Date :
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                {" "}
                <div className="main-content">
                  <p style={{ color: "#fff", fontSize: "24px" }}>{Number(totalclaim).toFixed(4)} ETH</p>
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="claim-button">
                <button className="claim-bu" onClick={()=>claim()}> CLAIM</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="header-foot1">
              <h1 className="header-footer">
                Join the most energetic crypto community that is ...{" "}
              </h1>
            </div>
          </div>
          <div>
            <h2 className="design-font">#CHOOKY</h2>
          </div>
          <div className="social-icons">
            <BsTelegram
              style={{
                color: "#fff",
                fontSize: "50px",
                marginRight: "30px",
                marginBottom: "50px",
              }}
            />
            <BsTwitter
              style={{ color: "#fff", fontSize: "50px", marginBottom: "0px" }}
            />
          </div>
        </div>
      </div>
      <Toaster/>
    </section>
  );
}
