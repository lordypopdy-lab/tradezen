import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useState, useEffect } from 'react'
import MainNavBar from '../components/MainNavBar'
import FadeLoader from 'react-spinners/FadeLoader';

const Withdraw = () => {

    const [user, setUser] = useState([]);
    const [loading1, setLoading1] = useState(false);
    const [data, setData] = useState({ value: 0, bank_name: "", account_name: "", account_number: "", swift_code: "" })

    useEffect(() => {
        const getUser = async () => {
            const localStore = JSON.parse(localStorage.getItem("user"));
            setUser(localStore);
        }
        getUser();
    }, [])

    const bankWithdraw = async () => {
        setLoading1(true);
        const email = user.email
        const { value, bank_name, account_name, account_number, swift_code } = data;

        try {
            await axios.post('/withdrawBank', {
                email,
                value,
                bank_name,
                account_name,
                account_number,
                swift_code
            }).then((data) => {
                if (data.data.success) {
                    toast.success(data.data.success);
                    setLoading1(false)
                    setData({
                        value: 0,
                        bank_name: "",
                        account_name: "",
                        account_number: "",
                        swift_code: ""
                    })
                } else if (data.data.error) {
                    setLoading1(false);
                    toast.error(data.data.error);
                }
            })
        } catch (error) {
            console.log("Withrawal failed: ", error);
        }
    }
    return (
        <>
            <MainNavBar />
            <div style={{ marginTop: "80px" }} className="container-scroller">
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel m-0 w-100">
                        <div className="content-wrapper">
                            <div className="row">
                                <div style={{ borderRadius: "0px" }} className="col-xl-6 p-2 col-sm-6">
                                    <button className='btn btn-secondary w-100'><i className="fas fa-wallet text-warning m-2"></i>Connect Wallet</button>
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body card-gradient">
                                            <h4 className="card-title">Withdraw</h4>
                                            <p className="card-description">Fill | in withdrawal | details</p><br />
                                            <FadeLoader
                                                color="#36d7b7"
                                                loading={loading1}
                                                speedMultiplier={3}
                                                style={{ textAlign: 'center', position: 'absolute', left: '50%', zIndex: '1', top: "46%" }}
                                            />
                                            <form action="withdrawal_validation.php" method="post" className="forms-sample">
                                                <div className="form-group">
                                                    <label>Amount $currency</label>
                                                    <input
                                                        type="number"
                                                        value={data.value}
                                                        onChange={(e) => setData({ ...data, value: e.target.value })}
                                                        className="form-control bg-transparent"
                                                        placeholder="$value"
                                                    />
                                                    <label className="mt-3">Bank Name*</label>
                                                    <input
                                                        value={data.bank_name}
                                                        onChange={(e) => setData({ ...data, bank_name: e.target.value })}
                                                        type="text"
                                                        className="form-control bg-transparent"
                                                        placeholder="bank-name"
                                                    />
                                                    <label className="mt-3">Account Name*</label>
                                                    <input
                                                        type="text"
                                                        value={data.account_name}
                                                        onChange={(e) => setData({ ...data, account_name: e.target.value })}
                                                        className="form-control bg-transparent"
                                                        placeholder="account-name"
                                                    />
                                                    <label className="mt-3">Account Number*</label>
                                                    <input
                                                        type="number"
                                                        value={data.account_number}
                                                        onChange={(e) => setData({ ...data, account_number: e.target.value })}
                                                        className="form-control bg-transparent"
                                                        placeholder="account-number"
                                                    />
                                                    <label className="mt-3">swift Code*</label>
                                                    <input
                                                        type="text"
                                                        value={data.swift_code}
                                                        onChange={(e) => setData({ ...data, swift_code: e.target.value })}
                                                        className="form-control bg-transparent"
                                                        placeholder="swift-code"
                                                    />
                                                </div>
                                                <div className="mt-3 d-flex justify-content-between">
                                                    <button onClick={bankWithdraw} type="button" className="btn btn-primary mr-2">Withdraw<i className="fas fa-arrow-down text-warning m-1"></i></button>
                                                    <button className="btn btn-dark">Cancel</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-sm-6 grid-margin mt-5">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body card-gradient">
                                            <h4 className="card-title">Withdraw Using Bitcoin | USDT(TRC20)</h4>
                                            <p className="card-description">Bitcoin | USDT Deposit Method</p><br />
                                            <form action="withdrawal_stats.php" method="post" className="forms-sample">

                                                <h5>UniqueID</h5>

                                                <p className="card-description"><span className="text-warning">Please make sure you upload your payment proof for quick payment verification On confirmation,</span> <span className="text-primary">our system will automatically Fund your account and notify you via email address.</span></p>
                                                <div className="form-group">
                                                    <label for="exampleInputConfirmPassword1">Amount$</label>
                                                    <input type="number" className="form-control bg-transparent" placeholder="$" required />
                                                </div>
                                                <div className="mt-3 d-flex justify-content-between">
                                                    <button type="submit" className="btn btn-primary mr-2">Withdraw<i className="fas fa-arrow-down text-warning m-1"></i></button>
                                                    <button className="btn btn-dark">Cancel</button>
                                                </div>
                                            </form>
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

export default Withdraw
