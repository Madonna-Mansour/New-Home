import React from 'react'
import {Col, Row , Container} from 'react-bootstrap'
import card1 from '../images/card1.jpg';
import card2 from '../images/card2.jpg';
import card3 from '../images/card3.jpg';
import card4 from '../images/card4.jpg';
import card5 from '../images/card5.jpg';
import card6 from '../images/card6.jpg';


const Cards = () => {
  return (
    <div>
      <Container fluid className='slideCard m-3' >
      <Row>
            <Col lg={5}>
              <h1 style={{fontSize:"65px", marginBottom:"70px"}}>Our choice of popular <b>real estate</b></h1>
              </Col>
        </Row>
         <Row className='mb-5' >
            <Col lg={4} className="mb-5">
                 <img src={card1} alt="" />
                 <p>Condos - Staten Island</p>
                 <h2>South Sun House</h2>
                 <p>Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum</p>
                  <hr />
                  <h4 className='text-center'>265.000$</h4>
             </Col>
             <Col lg={4} className="mb-5">
                 <img src={card2} alt="" />
                 <p>Condos - Staten Island</p>
                 <h2>Mountain Cabin</h2>
                 <p>Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum</p>
                  <hr />
                  <h4 className='text-center'>89.000$</h4>
             </Col>
             <Col lg={4} className="mb-5">
                 <img src={card3} alt="" />
                 <p>Condos - Staten Island</p>
                 <h2>Pine Forest Bungalow</h2>
                 <p>Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum</p>
                  <hr />
                  <h4 className='text-center'>1200.000$</h4>
             </Col>
          </Row>
          <Row >
            <Col lg={4} className="mb-5">
                 <img src={card4} alt="" />
                 <p>Condos - Staten Island</p>
                 <h2>South Sun House</h2>
                 <p>Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum</p>
                  <hr />
                  <h4 className='text-center'>265.000$</h4>
             </Col>
             <Col lg={4} className="mb-5">
                 <img src={card5} alt="" />
                 <p>Condos - Staten Island</p>
                 <h2>Mountain Cabin</h2>
                 <p>Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum</p>
                  <hr />
                  <h4 className='text-center'>89.000$</h4>
             </Col>
             <Col lg={4} className="mb-5">
                 <img src={card6} alt="" />
                 <p>Condos - Staten Island</p>
                 <h2>Pine Forest Bungalow</h2>
                 <p>Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum</p>
                  <hr />
                  <h4 className='text-center'>1200.000$</h4>
             </Col>
          </Row>
       </Container>

    </div>
  )
}

export default Cards