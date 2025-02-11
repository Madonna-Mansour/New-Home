import React from 'react'
import {Col, Row , Container} from 'react-bootstrap'
import home2 from '../images/home2.png'
import four1 from '../images/four 1.jpg'
import four2 from '../images/four2.jpg'
import four3 from '../images/foar3.jpg'


const SlidFour = () => {
  return (
    <div>
        <Container fluid className='my-5'>
          <Row >
            <Col lg={12}>
                <h1 style={{fontSize:"50px" }} className='my-5 py-5'>Our expert will help you make <b> the renovation</b></h1>
            </Col>
          </Row>
          <Row >
            <Col lg={6}>
              <div className='d-bic'>
                   <div className="">
                        <img src={home2} alt="" />
                  </div>
                  <div className="">
                        <h2>Find inspiration</h2>
                        <p>Sumo petentium ut per, at his wisim utinam adipis cing. Est e graeco quod suavitate vix ad praesent.</p>
                   </div>
              </div>
                    <div className='d-bic'>
                        <div className="">
                        <img src={home2} alt="" />
                        </div>
                        <div className="">
                        <h2>Find architect/designer</h2>
                        <p>Sumo petentium ut per, at his wisim utinam adipis cing. Est e graeco quod suavitate vix ad praesent.</p>
                        </div>
               </div>
               <div className='d-bic'>
                    <div className="">
                        <img src={home2} alt="" />
                        </div>
                        <div className="">
                        <h2>Begin renovation</h2>
                        <p>Sumo petentium ut per, at his wisim utinam adipis cing. Est e graeco quod suavitate vix ad praesent.</p>
                        </div>
                </div>
            </Col>
                <Col lg={6}>
                <Row>
                    <Col lg={6}>
                    <img style={{marginLeft:"20px", borderRadius:"7px"}} src={four1} alt="" />
                    </Col>
                    <Col lg={6}>
                      <Row>
                      <Col lg={12}>
                      <img style={{marginBottom:"15px" , borderRadius:"7px"}} src={four2} alt="" />
                      </Col>
                      <Col lg={12}>
                      <img style={{borderRadius:"7px"}} src={four3} alt="" />
                      </Col>
                      </Row>
                    </Col>
                </Row>
             
            </Col>
          </Row>
       </Container>
    </div>
  )
}

export default SlidFour
