import React from 'react'
import "../../utils/Login.css"
import Widget101 from '../../components/Widget101'
import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
const AdminLogin = () => {

    const login = async (event) => {
        event.preventDefault();
        localStorage.setItem("Auth", true);
        alert("Loged in Successfuly!");
        location.href = "/admin";
    }


    return (
        <div>
            <div className="container-fluid">
                <Widget101 />
                <div className="container-fluid page-body-wrapper full-page-wrapper mt-5">
                    <div className="login-sub-main">
                        <h3 className="card-title text-center mt-5 mb-3">| Login | Admin |</h3>
                        <form className='login-form card-gradient'>
                            <div className="form-group">
                                <label>Email *</label>
                                <input type="email" className="data" placeholder="Enter Email" />

                            </div>
                            <div className="form-group">
                                <label>Password *</label>
                                <input type="password" className="data " placeholder="Enter Password" />
                            </div>
                            <div className="form-group d-flex align-items-center justify-content-between">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" /> Remember me </label>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" onClick={login} className="w-100 btn btn-warning btn-block enter-btn">Login</button>
                            </div>
                            <p className="text-center mt-2 sign-up">Don't have an Account?<Link to="/register" className="text-warning"> Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
