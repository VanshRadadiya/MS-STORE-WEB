import React from 'react'
import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { IoMdStar } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

var productivity = [
  { image: require("./images/productivity-1.png"), name: "Zoom - One Platform to Connect", rate: "3.7", price: "Free", pid: "p1" },
  { image: require("./images/productivity-2.png"), name: "PDF X: PDF Editor & PDF Reader", rate: "4.8", price: "Free", pid: "p2" },
  { image: require("./images/productivity-3.png"), name: "Nebo", rate: "4.1", price: "$9.99", pid: "p3" },
  { image: require("./images/productivity-4.png"), name: "Concepts", rate: "4.5", price: "Free", pid: "p4" },
  { image: require("./images/productivity-5.png"), name: "Files App", rate: "4.3", price: "$8.99", pid: 'p5' },
  { image: require("./images/productivity-6.png"), name: "One Calendar", rate: "4.2", price: "Free", pid: 'p6' },
  { image: require("./images/productivity-7.png"), name: "LiquidText", rate: "4.2", price: "Free", pid: 'p7' },
  { image: require("./images/productivity-8.png"), name: "Adobe Acrobat Reader DC", rate: "3.3", price: "Free", pid: 'p8' },
  { image: require("./images/productivity-9.png"), name: "LinkedIn", rate: "3.9", price: "Free", pid: 'p9' },
  { image: require("./images/productivity-10.png"), name: "Microsoft Teams", rate: "2.6", price: "Free", pid: 'p10' },
  { image: require("./images/productivity-11.png"), name: "Mozilla Firefox", rate: "4.5", price: "Free", pid: 'p11' },
  { image: require("./images/productivity-12.png"), name: "PDF Reader - View and Edit PDF", rate: "4.5", price: "Free", pid: 'p12' },
  { image: require("./images/productivity-13.png"), name: "Open Browser", rate: "4.2", price: "Free", pid: 'p13' },
  { image: require("./images/productivity-14.png"), name: "Craft", rate: "4.5", price: "Free", pid: 'p14' },
  { image: require("./images/productivity-15.png"), name: "OneNote", rate: "2.9", price: "Free", pid: 'p15' },
  { image: require("./images/productivity-16.png"), name: "Microsoft Loop", rate: "4.1", price: "Free", pid: 'p16' },
  { image: require("./images/productivity-17.png"), name: "Microsoft Edge Browser", rate: "2.4", price: "Free", pid: 'p17' },
  { image: require("./images/productivity-18.png"), name: "DeepL Translate", rate: "4.1", price: "Free", pid: 'p18' },
  { image: require("./images/productivity-19.png"), name: "Virtual teleprompter PRO", rate: "3.4", price: "$8.99", pid: 'p19' },
  { image: require("./images/productivity-20.png"), name: "Kickresume", rate: "2.7", price: "Free", pid: 'p20' },
  { image: require("./images/productivity-21.png"), name: "Microsoft 365 Personal", rate: "3.9", price: "$69.99", pid: 'p21' },
  { image: require("./images/productivity-22.png"), name: "Microsoft 365 Family", rate: "4.0", price: "$99.99", pid: 'p22' },
  { image: require("./images/productivity-23.png"), name: "Outlooks for Windows", rate: "3.4", price: "Free", pid: 'p23' },
  { image: require("./images/productivity-24.png"), name: "Evernote", rate: "3.7", price: "Free", pid: 'p24' },
  { image: require("./images/productivity-25.png"), name: "iFax: Send & Receive Fax App", rate: "3.7", price: "Free", pid: 'p25' },
  { image: require("./images/productivity-26.png"), name: "Brave Browser", rate: "4.5", price: "Free", pid: 'p26' },
  { image: require("./images/productivity-27.png"), name: "Trello", rate: "4.4", price: "Free", pid: 'p27' },
  { image: require("./images/productivity-28.png"), name: "Universal File Reader", rate: "4.2", price: "Free", pid: 'p28' },
  { image: require("./images/productivity-29.png"), name: "Microsoft To Do: Lists, Tasks & Reminders", rate: "4.7", price: "Free", pid: 'p29' },
  { image: require("./images/productivity-30.png"), name: "Mozilla Thunderbird Email", rate: "4.6", price: "Free", pid: 'p30' },
  { image: require("./images/productivity-31.png"), name: "Slack", rate: "4.7", price: "Free", pid: 'p31' },
  { image: require("./images/productivity-32.png"), name: "iA Writer", rate: "3.8", price: "Paid", pid: 'p32' },
  { image: require("./images/productivity-33.png"), name: "Dropbox Lite", rate: "4.0", price: "Free", pid: 'p33' },
  { image: require("./images/productivity-34.png"), name: "Shapr3D", rate: "4.0", price: "Free", pid: 'p34' },
  { image: require("./images/productivity-35.png"), name: "Spark Mail – Email App by Readdle", rate: "4.3", price: "Free", pid: 'p35' },
  { image: require("./images/productivity-36.png"), name: "TeamViewer Remote", rate: "3.8", price: "Free", pid: 'p36' },
  { image: require("./images/productivity-37.png"), name: "Dropbox Capture", rate: "4.0", price: "Free", pid: 'p37' },
  { image: require("./images/productivity-38.png"), name: "Microsoft Forms", rate: "4.2", price: "Free", pid: 'p38' },
  { image: require("./images/productivity-39.png"), name: "Motion - Projects, Tasks, and Calendar", rate: "3.0", price: "Free", pid: 'p39' },
]
function Productivity() {
  return (
    <div>
      <div className='py-3 mb-3'>
        <div className='data-container'>
          <Row>
            <Col>
              <div className='heading'>
                <p className='text-light mb-0 fw-bold' style={{ fontSize: "20px" }}>Productivity apps <FaAngleRight style={{ color: "#60cdff" }}></FaAngleRight></p>
              </div>
            </Col>
          </Row>
          <OwlCarousel autoplay autoplayTimeout={2500}
            className="owl-theme"
            id='productivity'
            margin={14}
            nav
            items={6}
            dots={false}
            responsive={{
              0: {
                items: 1
              },
              300: {
                items: 2,
              },
              500: {
                items: 3
              },
              800: {
                items: 4,
              },
              1000: {
                items: 5
              },
              1200: {
                items: 6,
              }
            }}
          >
            {
              productivity.map((item) => {
                return (
                  <div className="item productivity-item" >
                    <div className='p-4' id={item.pid} style={{ borderRadius: '7px 7px 0px 0px' }}>
                      <img src={item.image} style={{ width: "80px", height: "80px" }} className='mx-auto' />
                    </div>
                    <div className='p-3 productivity-content'
                      style={{ backgroundColor: "rgba(36,36,40,0.7)", borderRadius: '0 0 7px 7px' }}>

                      <p className='mb-2 fw-bold'
                        style={{ fontSize: '14px', lineHeight: '1.1', height: '20px', color: '#D3D3D9' }}>
                        {item.name}
                      </p>

                      <div className='d-flex justify-content-between pt-4'>
                        <div className='d-flex align-items-center'>
                          <p className='mb-0'
                            style={{ color: '#8e8e9a', fontSize: '12px' }}>
                            {item.rate}
                          </p>
                          <IoMdStar style={{ fontSize: '14px', color: "#8e8e9a", marginLeft: '2px  ' }} />
                        </div>

                        <div>
                          <p className='mb-0 text-light px-2'
                            style={{ fontSize: '12px', backgroundColor: "#1C1C1C", borderRadius: '2px' }}>
                            {item.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </OwlCarousel>
        </div>
      </div>
    </div>
  )
}

export default Productivity
