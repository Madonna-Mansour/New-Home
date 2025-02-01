import React from 'react'
import {Col, Row , Container} from 'react-bootstrap'



const SlideThree = () => {
  return (
    <div>
         <Container fluid className='backThree'>
          <Row className='d-three' >
            <Col lg={7} className='text-three'>
                <h1>Discover a new way of living</h1>
                <p>* Feugait scriptorem qui ea, quo admodum eloquentiam eu. Te malis tibique eum. Ne magna assum everti.</p>
            </Col>
            <Col lg={4} className='card-three'>
                 <h1>Make an enquiry</h1>
                 <p>Save your time and easily rent or sell your property with the lowest commission on the real estate market.</p>
                 <input type="text"  placeholder='Your name*'/>
                 <input type="text"  placeholder='Your email*'/>
                 <input type="text"  placeholder='Your phone number*'/>
                 <button>Make an enquiry</button>

            </Col>
          </Row>
       </Container>
    </div>
  )
}

export default SlideThree
