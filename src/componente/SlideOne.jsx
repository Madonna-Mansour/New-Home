
import React from 'react'
import {Col, Row , Container} from 'react-bootstrap'
import cuple from '../images/main-home-img-1.jpg';

const SlideOne = () => {
  return (
    <div className='back'>
        <Container fluid className='cuple-both'>
          <Row >
            <Col lg={5} className='bgyallo'>
               <img className='cuple' src={cuple} alt="" />
            </Col>
            <Col lg={6} className='backimg my-5 '>
                <h1>Modern spaces and premium design</h1> <br />
                <p>Lorem ipsum dolor sit amet, minimum inimicus quo no, at vix primis viderere vituperatoribus. In corpora argumentum.</p>
                <p>– Mea omnium explicari <br />– His no legere feugaitoer <br />– illum idquem</p>
                <br />
                <button>Search Property</button>
             </Col>
          </Row>
       </Container>
    </div>
  )
}

export default SlideOne