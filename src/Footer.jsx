import React from 'react'
import logo from './images/logo.png'
import {Col, Row , Container} from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
        <Container fluid className='footer p-5 ps-4'>
          <Row >
            <Col lg={4}   className="mb-3">
                <div className="df ">
                    <img style={{width:"50px"}} src={logo} alt="" />
                    <h6>New <b>Home</b></h6>
                </div>
                <p>A contemporary theme we designed specifically for real <br></br> estate and property showcase websites, equipped with <br /> every option, element and feature your site may need.</p>
                <a href=""><h6>Read More</h6> </a>
            </Col>
            <Col lg={3} className="mb-3">
                <h6>Contact us</h6>
                <p> Staten Island, NY 10314, USA <br /> +111 222 369 45 <br />+123 456 789 11 <br /> newhome@example.com</p>
            </Col>
            <Col lg={3} className="mb-3" >
                <h6>Categories</h6>
                <p>Recent property <br />To Sell <br /> To Buy <br /> To Rent</p>
           </Col>

            <Col lg={2} >
                <h6>Links</h6>
                <p>Latest News <br /> About Us <br />FAQ Page <br />Contact Us</p>
            </Col>
          </Row>
          <Row className='footerrow d-flex mt-5 pt-5'>
             <hr className='mb-5' />
            <Col lg={8} >
                <p className='ps-5'> © 2025 Madonna Mansour</p>
            </Col>
            <Col lg={4} className='dfooter' >
                    <div className="">
                        <p> <b>Follow us:  </b>   Instagram </p>
                    </div>
                    <div className="">
                        <p>Facebook</p>
                    </div>
                    <div className="">
                        <p>Youtube </p>
                     </div>
                        <div className="">
                        <p>Twitter</p>
                        </div>
            </Col>
          </Row>
       </Container>
    </div>
  )
}

export default Footer