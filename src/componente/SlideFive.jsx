import React from 'react'
import {Col, Row , Container} from 'react-bootstrap'
import five  from '../images/five img.jpg';

const SlideOne = () => {
  return (
    <div className='back my-5' >
        <Container fluid className='cuple-both'>
          <Row >
            <Col lg={4} className='bgyallo'>
               <img className='cuple' src={five} alt="" />
            </Col>
            <Col lg={6} className='backimg mb-5'>
                <h1>Explore your home loan options</h1> <br />
                <p>Lorem ipsum dolor sit amet, minimum inimicus quo no, at vix primis viderere vituperatoribus. In corpora argumentum.</p>
                <p>– Mea omnium explicari <br />– His no legere feugaitoer <br />– illum idquem</p>
                <br />
                <button id='greenButtn'>Search Property</button>
             </Col>
          </Row>
       </Container>
    </div>
  )
}

export default SlideOne
