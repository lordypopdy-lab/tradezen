import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Widget101 from '../components/Widget101'
import Widget102 from '../components/Widget102'
import MainNavBar from '../components/MainNavBar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const Dashboard = () => {

    const [balance, setBalance ] = useState(0);
    const [user, setUser] = useState([]);
    const [message, setMessage] = useState("");
    const [isBalanceVisible, setIsBalanceVisible] = useState(false);

    const newU = localStorage.getItem("user");
    if(!newU) {
        window.location.href = "/login"
    }
    useEffect(() => {
        const getUser = async ()=>{
            const newUser = JSON.parse(newU);
            const email = newUser.email;
            await axios.post("/getUser", {email}).then((data)=>{
                if(data){
                    setUser(data.data);
                    const tBalance = data.data.deposit + data.data.profit + data.data.bonuse;
                    setBalance(tBalance.toFixed(2));
                }
            })
        }
        getUser();
    }, [])

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible((prev) => !prev);
    };

    const handleSend = async () => {
        alert("Message Sent!");
    }


    return (
        <>
            <MainNavBar />
            <div style={{ marginTop: "80px" }} className="container-scroller">
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel m-0 w-100">
                        <div className="content-wrapper">
                            <h5 className="display-5 text-center">Welcome back.</h5>
                            <h6 className="display-6 text-center">{user && user.name}!</h6>
                            <Widget102 />
                            <Widget101 />
                            <div className="row">
                                <div style={{ borderRadius: "0px" }} className="col-xl-6 p-2 col-sm-6">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-10">
                                                    <div className="d-flex mt-2 align-items-center align-self-start">
                                                        <h5 className="display-4 ls-3 text-center">Bal: {isBalanceVisible ? <><span className="text-600">$</span>{balance}</> : "******"}</h5>
                                                        <span
                                                            onClick={toggleBalanceVisibility}
                                                            style={{
                                                                background: "none",
                                                                border: "none",
                                                                cursor: "pointer",
                                                                marginLeft: "12px"
                                                            }}
                                                            aria-label={isBalanceVisible ? "Hide Balance" : "Show Balance"}
                                                        >
                                                            <FontAwesomeIcon icon={isBalanceVisible ? faEyeSlash : faEye} />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="icon icon-box-warning ">
                                                        <span className="fas fa-arrow-top icon-item"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center btn-group ml-1">
                                                <button className="btn-special deposite"><a href="/deposite" style={{ fontWeight: "600" }} className="text-white mt-4"><i style={{ borderBottomLeftRadius: "15px", borderTopRightRadius: "15px" }} className="fas fa-wallet d-block mb-1 bg-dark text-warning action-icons p-3"></i>Deposite</a></button>
                                                <button className="btn-special withdraw"><a href="/withdraw" style={{ fontWeight: "600" }} className="text-white mt-4"><i style={{ borderBottomLeftRadius: "15px", borderTopRightRadius: "15px", marginLeft: "35px" }} className="fas fa-paper-plane fa-lg me-2 d-block text-warning bg-dark p-3"></i>Withdraw</a></button>
                                                <button className="btn-special text-center withdraw"><a href="https://www.coinbase.com/" style={{ fontWeight: "600" }} className="text-white "><i style={{ borderBottomLeftRadius: "15px", borderTopRightRadius: "15px", marginLeft: "20px" }} className="fas fa-credit-card text-warning bg-dark p-3"></i>Buy Assets</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-sm-6 grid-margin mt-3">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body">
                                            <div className="row">
                                                <div style={{ marginBottom: "-50px" }} className="col-9">
                                                    <h6 className="text-muted font-weight-normal">Bonuse</h6>
                                                    <div className="d-flex align-items-center align-self-start">
                                                        <h5 style={{ fontSize: "24px" }} className="display-4 ls-3 text-center">{isBalanceVisible ? <><span className="text-600">$</span>{user.bonuse.toFixed(2) && user.bonuse.toFixed(2)}</> : "******"}</h5>
                                                        <p className="text-warning ml-2 mb-0 font-weight-medium">+18%</p>
                                                    </div>

                                                </div>
                                                <div className="col-3">
                                                    <div className="icon icon-box-warning">
                                                        <span className="mdi mdi-arrow-top-right icon-item"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn p-2 btn-gray mt-4">Get Started <span className="fas fa-arrow-right"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 grid-margin mt-3">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <div className="col">
                                                    <h6 className="card-title">Total Profits</h6>

                                                    <div className="d-flex align-items-center align-self-start">
                                                        <h5 style={{ fontSize: "19px" }} className="display-4 ls-3 text-center">{isBalanceVisible ? <><span className="text-600">$</span>{user.profit.toFixed(2) && user.profit.toFixed(2)}</> : "******"}</h5>
                                                        <p className="text-warning ml-2 mb-0 font-weight-small">+28%</p>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <h6 className="card-title">Total Deposite</h6>
                                                    <div className="d-flex align-items-center align-self-start">
                                                        <h5 style={{ fontSize: "19px" }} className="display-4 ls-3 text-center">{isBalanceVisible ? <><span className="text-600">$</span>{user.deposit.toFixed(2) && user.deposit.toFixed(2)}</> : "******"}</h5>
                                                        <p className="text-warning ml-2 mb-0 font-weight-medium">+68%</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 grid-margin mt-2 p-2">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card p-2 card-gradient">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <tbody>
                                                    <tr>
                                                        <td className="text-warning p-0"> Package <i className=" mdi mdi-security text-danger"></i></td>
                                                        <td><label className="badge p-0 float-right ">Pending</label></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-warning p-0"> Signal<i className="mdi mdi mdi-signal-variant text-danger"></i></td>
                                                        <td><label className="badge float-right p-0">None</label></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-warning p-0"> Total Referrals<i className="mdi mdi-account-multiple-plus text-danger"></i></td>
                                                        <td><label className="badge p-0 float-right">None</label></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-warning p-0"> Account Type<i className="mdi mdi-account-check text-danger"></i></td>
                                                        <td><label className="badge p-0 float-right">account_type</label></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-warning p-0"> Account Status<i className="mdi mdi-shield text-danger"></i></td>
                                                        <td><label className="badge p-0 float-right bg-success text-white p-2">Verified</label></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 grid-margin mt-3">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body card-gradient">
                                            <h4 className="text-success p-0">Live Chat<span className="live-icon"></span></h4>
                                            <div className="message-box">
                                                <input
                                                    type="text"
                                                    placeholder="Type your message..."
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    className="message-input"
                                                />
                                                <button onClick={handleSend} className="send-button">
                                                    <i className="fas fa-paper-plane send-button-icon"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
