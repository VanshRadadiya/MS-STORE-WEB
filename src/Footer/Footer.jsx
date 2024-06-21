import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css';
function Footer() {
    let ul1 = ['More content in the Microsoft Store', 'Apps', 'Games', 'Windows Experience Blog'];
    let ul2 = ['Microsoft Account', 'Microsoft Store Support', 'Returns', 'Flexible Payment', 'Policies and Code of Conduct'];
    let ul3 = ['Publish your app', 'Advertise with us', 'Generate your app badge'];
    let ul4 = ['Careers', 'About Microsoft', 'Company News', 'Investors', 'Diversity & Inclusion', 'Accessibility', 'Sustainabitlity'];
    let ul5 = ['Contact Microsoft', 'Privacy', 'Terms of Use', 'Trademarks', 'Safety & Eco', 'Recycling', 'About Our Ads', '© Microsoft 2023'];
    return (
        <div style={{ background: '#1A1A1E' }} className='text-white'>
            <div className='p-5 data-container'>
                <Row className='FooterPartOne'>
                    <Col lg={3} md={6} className='pb-2'>
                        <div className='footerHead'>
                            <p className='fs-6 mb-4 fw-600'>What's New</p>
                        </div>
                        <div className="footerBody">
                            <ul className='list-unstyled'>
                                {ul1.map((ele, index) => {
                                    return <li key={index} className='mb-3 fs-12'><a href="#" className='footerLink text-grey'>{ele}</a></li>
                                })}
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className='pb-2'>
                        <div className='footerHead'>
                            <p className='fs-6 mb-4 fw-600'>Microsoft Store</p>
                        </div>
                        <div className="footerBody">
                            <ul className='list-unstyled'>
                                {ul2.map((ele, index) => {
                                    return <li key={index} className='mb-3 fs-12'><a href="#" className='footerLink text-grey'>{ele}</a></li>
                                })}
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className='pb-2'>
                        <div className='footerHead'>
                            <p className='fs-6 mb-4 fw-600'>For Developers</p>
                        </div>
                        <div className="footerBody">
                            <ul className='list-unstyled'>
                                {ul3.map((ele, index) => {
                                    return <li key={index} className='mb-3 fs-12'><a href="#" className='footerLink text-grey'>{ele}</a></li>
                                })}
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className='pb-2'>
                        <div className='footerHead'>
                            <p className='fs-6 mb-4 fw-600'>Windows</p>
                        </div>
                        <div className="footerBody">
                            <ul className='list-unstyled'>
                                {ul4.map((ele, index) => {
                                    return <li key={index} className='mb-3 fs-12'><a href="#" className='footerLink text-grey'>{ele}</a></li>
                                })}
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className='FooterPartTwo pt-5 pb-2 text-grey'>
                    <Col lg={4}>
                        <img src={require('./img/privacyoptions.png')} />
                        {' '}<a className='fs-12 text-grey footerLink'>Your Privacy Choices</a>
                    </Col>
                    <Col lg={8} md={10}>
                        <ul className='list-unstyled d-flex justify-content-xs-start justify-content-lg-evenly gap-3 pt-3 pt-lg-0 flex-wrap text-start'>
                            {ul5.map((ele, index) => {
                                return <li key={index} className='fs-12 '><a href="#" className='footerLink text-grey'>{ele}</a></li>
                            })
                            }</ul>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer