import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { FaStar } from "react-icons/fa";
function SearchItem() {
  var data = useSelector((state) => state.data.sortedItems)
  return (
    <div>
      <div className="data-container">
        <Row className='my-5 text-white'>
          {
            data.map((item, index) => {
              return (
                <Col sm={6} lg={4} key={index}>
                  <div className='my-4 p-3 rounded-3 search-item' style={{ backgroundColor:'hsl(240, 5.9%, 11%)'}}>
                    <div className='d-flex  justify-content-between align-items-start '>
                      <div className='d-flex gap-3'>
                        <img src={item.logo} style={{ width: '70px', height: '70px' }} className='rounded-2'></img>
                        <div>
                        <p className='fw-bold mb-1' style={{ fontSize: '14px',color:"rgb(163 163 163)"}}>{item.name}</p>
                        <p style={{ color: 'rgb(127 127 127)', fontSize: '12px'}} className='d-flex align-items-center gap-1'>
                          <span>{item.rating}</span> <FaStar style={{color: 'rgb(127 127 127)'}} /> <span> | {item.app} | {item.type}</span>
                          </p>
                        </div>
                      </div>
                      <p className='bg-dark p-1 px-2 rounded-2' style={{ fontSize: '12px'}}>{item.rate}</p>
                    </div>
                      <p style={{ fontSize: '12px', color:'rgb(127 127 127)' }} className='mt-2 search-item-text  '>{item.text}</p>
                    <div className="search-item">
                      <div className="search-item-img">
                        <img src={item.img} alt="img" width={'100%'} className='rounded-2' />
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </div>
  )
}

export default SearchItem
