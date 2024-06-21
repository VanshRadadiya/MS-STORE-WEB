import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { IoIosSearch, IoMdStar } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";


const free_app = [{ "f_imge": require('./images/free-1.png'), "f_name": "WhatsApp", "f_rtn": "4.2", "f_type": "Social", "s_imge": require('./images/free-2.png'), "s_name": "iTunes", "s_rtn": "2.5", "s_type": "Music" },
{ "f_imge": require('./images/free-3.png'), "f_name": "Windows Scan", "f_rtn": "3.4", "f_type": "Utilities & tools", "s_imge": require('./images/free-4.png'), "s_name": "iCloud", "s_rtn": "2.9", "s_type": "Productivity" },
{ "f_imge": require('./images/free-5.png'), "f_name": "Netflix", "f_rtn": "4.4", "f_type": "Entertainment", "s_imge": require('./images/free-6.png'), "s_name": "Spotify Music", "s_rtn": "4.2", "s_type": "Music" },
{ "f_imge": require('./images/free-7.png'), "f_name": "Xbox", "f_rtn": "3.5", "f_type": "Entertainment", "s_imge": require('./images/free-8.png'), "s_name": "Microsoft Clipchamp", "s_rtn": "3.7", "s_type": "Photo & video" },
{ "f_imge": require('./images/free-9.png'), "f_name": "Discord", "f_rtn": "4.3", "f_type": "Social", "s_imge": require('./images/free-10.png'), "s_name": "Zoom - One Platform to Connect", "s_rtn": "3.7", "s_type": "Productivity" },
{ "f_imge": require('./images/free-11.png'), "f_name": "Microsoft Teams", "f_rtn": "2.6", "f_type": "Productivity", "s_imge": require('./images/free-12.png'), "s_name": "Prime Video For Windows", "s_rtn": "4.2", "s_type": "Entertainment" },
{ "f_imge": require('./images/free-13.png'), "f_name": "Adobe Acrobat Reader DC", "f_rtn": "3.3", "f_type": "Productivity", "s_imge": require('./images/free-14.png'), "s_name": "Hulu", "s_rtn": "4.1", "s_type": "Entertainment" },
{ "f_imge": require('./images/free-15.png'), "f_name": "Epic Games Store", "f_rtn": "4.3", "f_type": "Entertainment", "s_imge": require('./images/free-16.png'), "s_name": "Apple Music", "s_rtn": "3.2", "s_type": "Music" },
{ "f_imge": require('./images/free-17.png'), "f_name": "TikTok", "f_rtn": "4.2", "f_type": "Entertainment", "s_imge": require('./images/free-18.png'), "s_name": "Minecraft Education", "s_rtn": "4.3", "s_type": "Entertainment" },
{ "f_imge": require('./images/free-19.png'), "f_name": "Facebook", "f_rtn": "4.1", "f_type": "Social", "s_imge": require('./images/free-20.png'), "s_name": "Snapchat", "s_rtn": "4.3", "s_type": "Social" },
{ "f_imge": require('./images/free-21.png'), "f_name": "Outlook For Window", "f_rtn": "3.3", "f_type": "Productivity", "s_imge": require('./images/free-22.png'), "s_name": "Intsagram", "s_rtn": "4.2", "s_type": "Social" },
{ "f_imge": require('./images/free-23.png'), "f_name": "Hostpot Shield VPN-Wifi Proxy ", "f_rtn": "4.4", "f_type": "Productivity", "s_imge": require('./images/free-24.png'), "s_name": "Disney+", "s_rtn": "4.2", "s_type": "Entertainment" },
{ "f_imge": require('./images/free-25.png'), "f_name": "CapCut", "f_rtn": "4.8", "f_type": "Photo & video", "s_imge": require('./images/free-26.png'), "s_name": "Lively Wallpaper", "s_rtn": "4.5", "s_type": "Personalization" },
{ "f_imge": require('./images/free-27.png'), "f_name": "Messenger", "f_rtn": "4.1", "f_type": "Social", "s_imge": require('./images/free-28.png'), "s_name": "Power BI Desktop", "s_rtn": "4.8", "s_type": "Business" },
{ "f_imge": require('./images/free-29.png'), "f_name": "Mozilla Firefox", "f_rtn": "4.4", "f_type": "Productivity", "s_imge": require('./images/free-30.png'), "s_name": "Slack", "s_rtn": "4.5", "s_type": "Business" },
{ "f_imge": require('./images/free-31.png'), "f_name": "PDF X: PDF Editor & PDF Reader", "f_rtn": "4.8", "f_type": "Business", "s_imge": require('./images/free-32.png'), "s_name": "Python 3.12", "s_rtn": "4.3", "s_type": "Developer tools" },
{ "f_imge": require('./images/free-33.png'), "f_name": "OP Auto Clicker", "f_rtn": "4.2", "f_type": "Utilities & tools", "s_imge": require('./images/free-34.png'), "s_name": "Xbox Accessories", "s_rtn": "2.7", "s_type": "Utilities & tools" },
{ "f_imge": require('./images/free-35.png'), "f_name": "TranslucentTB", "f_rtn": "4.4", "f_type": "Personalization", "s_imge": require('./images/free-36.png'), "s_name": "Skype", "s_rtn": "4.4", "s_type": "Social" },
{ "f_imge": require('./images/free-37.png'), "f_name": "Apple Devices", "f_rtn": "2.4", "f_type": "Utilities & tools", "s_imge": require('./images/free-38.png'), "s_name": "Tubi-Free Movies & TV", "s_rtn": "4.6", "s_type": "Entertainment" },
{ "f_imge": require('./images/free-39.png'), "f_name": "Snipping Tool", "f_rtn": "4.4", "f_type": "Utilities & tools", "s_imge": require('./images/free-40.png'), "s_name": "Company Portal", "s_rtn": "3.6", "s_type": "Business" },
{ "f_imge": require('./images/free-41.png'), "f_name": "Speedtest By Ookla", "f_rtn": "4.7", "f_type": "Utilities & tools", "s_imge": require('./images/free-42.png'), "s_name": "Pandora", "s_rtn": "4.3", "s_type": "Music" },
{ "f_imge": require('./images/free-43.png'), "f_name": "Paramount+", "f_rtn": "4.1", "f_type": "Entertainment", "s_imge": require('./images/free-44.png'), "s_name": "Apple TV", "s_rtn": "2.9", "s_type": "Entertainment" },
{ "f_imge": require('./images/free-45.png'), "f_name": "Lenovo Vontage", "f_rtn": "4.6", "f_type": "Productivity", "s_imge": require('./images/free-46.png'), "s_name": "HyperX NGENUITY", "s_rtn": "4.6", "s_type": "Utilities & tools" },
{ "f_imge": require('./images/free-47.png'), "f_name": "OneDrive", "f_rtn": "2.8", "f_type": "Productivity", "s_imge": require('./images/free-48.png'), "s_name": "ibis Paint", "s_rtn": "4.1", "s_type": "Multimedia design" },
{ "f_imge": require('./images/free-49.png'), "f_name": "AV1 Video Extention", "f_rtn": "3.7", "f_type": "System Components", "s_imge": require('./images/free-50.png'), "s_name": "Canva", "s_rtn": "4.4", "s_type": "Multimedia design" }
]
function Top_free() {
  return (
    <div>
      <div className='data-container'>
        <Row>
          <Col>
            <div className='heading'>
              <p className='text-light mb-0 fw-bold' style={{ fontSize: "20px" }}>Top free apps <FaAngleRight style={{ color: "#60cdff" }}></FaAngleRight></p>
            </div>
          </Col>
        </Row>
        <div className='py-3 top-free mb-3'>
          <OwlCarousel className='owl-theme' id='top-3' autoplay autoplayTimeout={2500} loop nav dots={false} responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1240: { items: 3 },
            1920: { items: 4 }
          }}
            margin={20}>
            {
              free_app.map((item) => {
                return (
                  <div className='py-1'>
                    <div class='item p-3  d-flex' style={{ borderRadius: "8px", marginBottom: "20px" }}>
                      <div style={{ width: "75px", height: "75px", borderRadius: '8px' }} className='me-3'>
                        <img src={item.f_imge} height={"100%"} width={"100%"} style={{ borderRadius: "8px" }}></img>
                      </div>
                      <div className='d-flex justify-content-between' style={{ width: "70%" }}>
                        <div>
                          <p className='m-0' style={{ fontWeight: "600", color: "#D3D3D9" }}>{item.f_name}</p>
                          <div className='d-flex' style={{ paddingLeft: '1px', marginTop: "3px" }}>
                            <span className='d-flex align-items-center' style={{ color: "rgb(142, 142, 154)" }}>
                              <span style={{ fontSize: "12px", }}>{item.f_rtn} </span>
                              <IoMdStar style={{ fontSize: "13px", marginLeft: "2px" }} />
                            </span>
                            <span style={{ fontSize: "12px", color: "rgba(255, 255, 255,0.1)", marginRight: "3px" }}>|</span>
                            <span style={{ fontSize: "12px", color: "#CDCDCD" }}>{item.f_type}</span>
                          </div>
                        </div>
                        <div>
                          <span className='rounded' style={{ fontSize: "12px", padding: "3px 7px", backgroundColor: "#1C1C1C", color: "white" }}>Free</span>
                        </div>
                      </div>
                    </div>
                    <div class='item p-3  d-flex' style={{ borderRadius: "8px", marginBottom: "20px" }}>
                      <div style={{ width: "75px", height: "75px", borderRadius: '8px' }} className='me-3'>
                        <img src={item.s_imge} height={"100%"} width={"100%"} style={{ borderRadius: "8px" }}></img>
                      </div>
                      <div className='d-flex justify-content-between' style={{ width: "70%" }}>
                        <div>
                          <p className='m-0' style={{ fontWeight: "600", color: "#D3D3D9", marginBottom: "6px" }}>{item.s_name}</p>
                          <div className='d-flex' style={{ paddingLeft: '1px' }}>
                            <span className='d-flex align-items-center' style={{ color: "rgb(142, 142, 154)" }}>
                              <span style={{ fontSize: "12px", }}>{item.s_rtn} </span>
                              <IoMdStar style={{ fontSize: "13px", marginLeft: "2px" }} />
                            </span>
                            <span style={{ fontSize: "12px", color: "rgba(255, 255, 255,0.1)", marginRight: "3px" }}>|</span>
                            <span style={{ fontSize: "12px", color: "#CDCDCD" }}>{item.s_type}</span>
                          </div>
                        </div>
                        <div>
                          <span className='rounded' style={{ fontSize: "12px", padding: "3px 7px", backgroundColor: "#1C1C1C", color: "white" }}>Free</span>
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

export default Top_free
