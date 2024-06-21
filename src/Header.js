import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoIosSearch, IoMdStar } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { searchData } from './redux-app/storeSlice';
import { useNavigate } from 'react-router-dom';
function Header() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchData(input));
        navigate('/search');
    }
    return (
        <div>
            <div style={{ backgroundColor: "black", color: "white" }}>
                <div className='data-container'>
                    <nav className='py-2 pb-lg-2 pb-4'>
                        <Row className='align-items-center justify-content-sm-between p-0'>
                            <Col className='p-0' xs={6} md={3} lg={2}>
                                <div className="d-flex py-3">
                                    <div style={{ width: "120px", height: "36px" }}>
                                        <img src={require('./images/logo.png')} height={"100%"} width={"100%"} />
                                    </div>
                                    <div style={{ width: "54px", height: "36px" }}>
                                        <img src={require('./images/store.png')} height={"100%"} width={"100%"} />
                                    </div>
                                </div>
                            </Col>
                            <Col className='d-lg-none text-end p-0'>
                                <i style={{ fontSize: "23px" }}> <IoIosSearch /></i>
                            </Col>
                            <Col className='d-flex justify-content-center p-0' xs={12} lg>
                                <ul className="d-flex m-0 p-0 lists">
                                    <li className='position-relative hm'>
                                        <a href="" style={{ color: "#60CDFF" }}>Home</a>
                                        <span></span>
                                    </li>
                                    <li><a href="">Apps</a></li>
                                    <li><a href="">Games</a></li>
                                    <li ><a href="">Entertainment</a></li>
                                </ul>
                            </Col >
                            <Col className='d-flex justify-content-end right_info align-items-center p-0 d-none d-lg-block d-lg-flex' lg>
                                <div className="d-flex align-items-center search">
                                    <i className='px-1'>
                                        <IoIosSearch style={{ backgroundColor: "rgb(26, 26, 30)", fontSize: "18px" }} />
                                    </i>
                                    <form onSubmit={(e) => { handleSubmit(e) }} method='post'>
                                        <input type='text' value={input} onChange={(e) => { setInput(e.target.value) }} placeholder="Search apps, games, movies, and more" size={29} className='ps-1 text-white'></input>
                                        <input type="submit" hidden />
                                    </form>
                                </div>
                                <div className='align-items-center store d-none d-lg-block d-lg-flex' style={{ backgroundColor: "#60CDFF" }}>
                                    <img src={require('./images/dark-logo.png')} style={{ backgroundColor: "#60CDFF" }} height={"14px"} width={"14px"} />
                                    <p className='m-0 p-0 ps-1 d-none d-xl-block' style={{ color: "black", backgroundColor: "#60CDFF" }}>Open Store app</p>
                                </div>
                            </Col>
                        </Row>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
