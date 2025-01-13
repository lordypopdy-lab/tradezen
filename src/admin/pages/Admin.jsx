import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar';
import Widget101 from '../../components/Widget101';
import Widget102 from '../../components/Widget102';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';

const Admin = () => {

    if (!localStorage.getItem("Auth")) {
        location.href = "/admin/login";
    }

    const balance = "2034.56";
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [isBalanceVisible, setIsBalanceVisible] = useState(false);

    useEffect(() => {
        function simulateNetworkRequest() {
            return new Promise(resolve => {
                setTimeout(resolve, 2000);
            });
        }

        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);


    const toggleBalanceVisibility = () => {
        setIsBalanceVisible((prev) => !prev);
    };

    const handleSend = async () => {
        alert("Message Sent!");
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <div>
            <NavBar />
            <div style={{ marginTop: "80px" }} className="container-scroller">
                <Widget102 />
                <Modal className='mt-4' show={show} onHide={handleClose}>
                    <Modal.Header className='bg-dark' closeButton>
                        <Modal.Title className='card-gradient'>Adding Bonus</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-dark'>
                        <Form className='card-gradient'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className='bg-dark'>#ID</InputGroup.Text>
                                    <Form.Control type='number' className='bg-dark' aria-label="Amount (to the nearest dollar)" />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className='bg-dark'>$</InputGroup.Text>
                                    <Form.Control type='number' className='bg-dark' aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Text className='card-gradient'>.00</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                            <Form.Select className='bg-dark' aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="bonus">Add bonus</option>
                                <option value="profit">Add Profit</option>
                                <option value="3">Add Deposite</option>
                            </Form.Select>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className='bg-dark'>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal className='mt-4' show={show1} onHide={handleClose1}>
                    <Modal.Header className='bg-dark' closeButton>
                        <Modal.Title className='card-gradient'>List of Users</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-dark'>
                        <Table responsive="xl">
                            <thead>
                                <tr>
                                    <th>[#]</th>
                                    <th>[<i className='fas text-success fa-paper-plane'></i>]</th>
                                    <th>[Country]</th>
                                    <th>[Account]</th>
                                    <th>[Profit]</th>
                                    <th>[Bonus]</th>
                                    <th>[Deposit]</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td> <Button variant="primary" style={{ height: "", padding: "4px", fontSize: "14px", width: "70px" }} disabled={isLoading} onClick={!isLoading ? handleClick : null} >{isLoading ? 'Loading…' : 'Send'} </Button></td>
                                    <td>Brazil</td>
                                    <td>Forex</td>
                                    <td>$230.90</td>
                                    <td>$8977.45</td>
                                    <td>$78826.51</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer className='bg-dark d-flex justify-content-between'>
                        <Button variant="secondary" style={{ padding: "8px", width: "120px" }} onClick={handleClose1}>
                            Close
                        </Button>
                        <Button variant="primary" style={{ padding: "8px", width: "160px" }} onClick={handleClose1}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal className='mt-4' show={show2} onHide={handleClose2}>
                    <Modal.Header className='bg-dark' closeButton>
                        <Modal.Title className='card-gradient'>List of Investors</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-dark modal-body-scroll'>
                        <Table responsive="xl">
                            <thead>
                                <tr>
                                    <th>[#]</th>
                                    <th>[Name]</th>
                                    <th>[Country]</th>
                                    <th>[Account]</th>
                                    <th>[Profit]</th>
                                    <th>[Bonus]</th>
                                    <th>[Deposit]</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Rita pedro</td>
                                    <td>Brazil</td>
                                    <td>Forex</td>
                                    <td>$230.90</td>
                                    <td>$8977.45</td>
                                    <td>$78826.51</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer className='bg-dark d-flex justify-content-between'>
                        <Button style={{ padding: "8px", width: "120px" }} variant="secondary" onClick={handleClose2}>
                            Close
                        </Button>
                        <Button style={{ padding: "8px", width: "160px" }} variant="primary" onClick={handleClose2}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel m-0 w-100">
                        <div className="content-wrapper">
                            <div className="row">
                                <div style={{ borderRadius: "0px" }} className="col-xl-6 p-2 col-sm-6">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-10">
                                                    <h3 className="text-muted font-weight-normal">Market Cap</h3>
                                                    <div style={{ paddingBottom: "17px" }} className="d-flex mt-2 align-items-center align-self-start">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-sm-6 grid-margin mt-3">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body">
                                            <div className="row">
                                                <div style={{ marginBottom: "-50px" }} className="col-9 p-3">
                                                    <h6 className="text-muted font-weight-normal">Bonuse Added</h6>
                                                    <div className="d-flex align-items-center align-self-start">
                                                        <h5 style={{ fontSize: "24px" }} className="display-4 ls-3 text-center">{isBalanceVisible ? <><span className="text-600">$</span>{balance}</> : "******"}</h5>
                                                        <p className="text-warning ml-2 mb-0 font-weight-medium">+18%</p>
                                                    </div>

                                                </div>
                                                <div className="col-3">
                                                    <div className="icon icon-box-warning">
                                                        <span className="mdi mdi-arrow-top-right icon-item"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button onClick={handleShow} style={{ height: "40px", fontSize: "12px" }} className="btn p-2 btn-gray mt-4">Add Bonus<span className="fas m-1 fa-arrow-right"></span></button>
                                        </div>
                                    </div>
                                </div>
                                <Widget101 />
                            </div>
                            <div className="row">
                                <div className="col-md-12 grid-margin mt-3">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <div className="col">
                                                    <h6 className="card-title">Total Users</h6>
                                                    <div className="d-flex align-items-center align-self-start">
                                                        <h5 style={{ fontSize: "19px" }} className="display-4 ls-3 text-center">{isBalanceVisible ? <>{balance}</> : "******"}</h5>
                                                        <p className="text-warning ml-2 mb-0 font-weight-small">+28%</p>
                                                    </div>
                                                    <button onClick={handleShow1} style={{ height: "40px", fontSize: "12px" }} className="btn p-2 btn-gray ">View | Users<span className="fas m-1 fa-arrow-down"></span></button>
                                                </div>
                                                <div className="col">
                                                    <h6 className="card-title">Total Investors</h6>
                                                    <div className="d-flex align-items-center align-self-start">
                                                        <h5 style={{ fontSize: "19px" }} className="display-4 ls-3 text-center">{isBalanceVisible ? <>{balance}</> : "******"}</h5>
                                                        <p className="text-warning ml-2 mb-0 font-weight-medium">+68%</p>
                                                    </div>
                                                    <button onClick={handleShow2} style={{ height: "40px", fontSize: "12px" }} className="btn p-2 btn-warning">[Investors]<span className="fas m-1 fa-arrow-down"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 grid-margin mt-2 p-2">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card p-2 card-gradient">
                                        <div className="modal-body-scroll">
                                            <h3 className="card-title text-center">Users | Bank | Withdrawal | Table</h3><hr />
                                            <Table responsive>
                                                <thead>
                                                    <tr>
                                                        <th>[#]</th>
                                                        <th>[Amount]</th>
                                                        <th>[Bank]</th>
                                                        <th>[Name]</th>
                                                        <th>[Swift-code]</th>
                                                        <th>[Status]</th>
                                                        <th>[Email]</th>
                                                        <th>[Approve]</th>
                                                        <th>[Decline]</th>
                                                        <th>[Delete]</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>$3092.61</td>
                                                        <td>Banco XML</td>
                                                        <td>09888790912553784</td>
                                                        <td>Andrew Rita</td>
                                                        <td>Paid</td>
                                                        <td>example@gmail.com</td>
                                                        <td><Button style={{fontSize: "14px"}} variant="warning p-2 m-1">Decline</Button></td>
                                                        <td> <Button style={{fontSize: "14px"}} variant="success p-2 m-1">Approve</Button></td>
                                                       <td><Button style={{fontSize: "14px"}} variant="danger p-2 m-1">Delete</Button></td>
                                                       <td></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 grid-margin mt-2 p-2">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card p-2 card-gradient">
                                        <div className="modal-body-scroll">
                                            <h3 className="card-title text-center">Users | Crypto | Withdrawal | Table</h3><hr />
                                            <Table responsive>
                                                <thead>
                                                    <tr>
                                                        <th>[#]</th>
                                                        <th>[Amount]</th>
                                                        <th>[Wallet]</th>
                                                        <th>[Status]</th>
                                                        <th>[Email]</th>
                                                        <th>[Approve]</th>
                                                        <th>[Decline]</th>
                                                        <th>[Delete]</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>$3092.61</td>
                                                        <td>0X09786876986798689898</td>
                                                        <td>Paid</td>
                                                        <td>example@gmail.com</td>
                                                        <td><Button style={{fontSize: "14px"}} variant="warning p-2 m-1">Decline</Button></td>
                                                        <td> <Button style={{fontSize: "14px"}} variant="success p-2 m-1">Approve</Button></td>
                                                       <td><Button style={{fontSize: "14px"}} variant="danger p-2 m-1">Delete</Button></td>
                                                       <td></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
