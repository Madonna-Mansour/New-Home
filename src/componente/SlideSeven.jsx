import React from 'react'
import {Col, Row , Container} from 'react-bootstrap'



const SlideThree = () => {
  return (
    <div>
         <Container fluid id='backSeven' className='mb-5 pb-5'>
          <Row >
            <Col lg={6} className='text-three mt-5 pt-5'>
                <h1>Find a home that truly suits you</h1>
                <p>* Feugait scriptorem qui ea, quo admodum lorem.</p>
            </Col>
            <Col lg={5 }className="leftside mt-5 pt-5 ms-5 ps-5"  >
                 <h1>Sign to newsletter</h1>
                 <p>Save your time and easily rent or sell your property with the lowest commission on the real estate market.</p>
                    <input type="text" placeholder='Your email' />
                    <button>Make an enquiry</button>
            </Col>
          </Row>
       </Container>
    </div>
  )
}

export default SlideThree
