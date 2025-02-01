import React from 'react'
import {Col, Row , Container} from 'react-bootstrap'
import home2 from '../images/home2.png';
import home from '../images/home.png';
import note from '../images/note.png';
import key from '../images/key.png';


const SlideTow = () => {
  return (
    <div>
       <Container fluid className='how-it m-5'>
          <Row >
            <Col  lg={12}>
               <h1>How It works? <br /> Find a <b>perfect home</b> </h1>
            </Col>
          </Row>
          <Row >
            <Col className='borderright my-5' lg={3} md={6}>
            <img style={{width:"70px", marginLeft:"15px", marginBottom:"20px"}} src={home2} alt="" />
                <h2>Find real estate</h2>
                <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
            </Col>
            <Col className='borderright my-5' lg={3} md={6}>
            <img style={{width:"70px", marginLeft:"15px", marginBottom:"20px"}} src={home} alt="" />
                <h2>Meet relator</h2>
                <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
            </Col>
            <Col className='borderright my-5' lg={3} md={6}>
            <img style={{width:"70px", marginLeft:"15px", marginBottom:"20px"}} src={note} alt="" />
                <h2>Documents</h2>
                <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
            </Col>
            <Col lg={3} md={6} className='my-5'>
            <img style={{width:"70px", marginLeft:"15px", marginBottom:"20px"}} src={key} alt="" />
                <h3>Take the keys</h3>
                <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
            </Col>
          </Row>
       </Container>

    </div>
  )
}

export default SlideTow