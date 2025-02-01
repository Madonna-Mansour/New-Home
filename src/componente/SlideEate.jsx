import React from 'react'
import {Col, Row , Container} from 'react-bootstrap'
import eate1 from '../images/eate1.jpg'
import eate2 from '../images/eate2.jpg'
import eate3 from '../images/eate3.jpg'


const SlideEate = () => {
  return (
    <div>
      <Container fluid className='slideCard m-3'>
         <Row >
            <Col lg={6} >
            <h1 style={{fontSize:"55px", margin:"100px 0"}}>Read our real estate recent news</h1>
            </Col>
          </Row>
          <Row >
            <Col lg={4} className="mb-5">
                 <img src={eate1} alt="" />
                 <p>PropertyBy - Julie Coleman</p>
                 <h2>How to Find a Good Real Estate Agent</h2>
                 <p>Ea cibo choro eos, in duo iudico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persequeris contentiones nec, ex sit modus</p>
                 <a href=""><h6>Read More</h6></a>
            </Col>
            <Col lg={4} className="mb-5">
                 <img src={eate2} alt="" />
                 <p>PropertyBy - Julie Coleman</p>
                 <h2>15 Ways to Negotiate Your Lease Price</h2>
                 <p>Ea cibo choro eos, in duo iudico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persequeris contentiones nec, ex sit modus</p>
                 <a href=""><h6>Read More</h6></a>
            </Col>
            <Col lg={4} >
                 <img src={eate3} alt="" />
                 <p>PropertyBy - Julie Coleman</p>
                 <h2>Houses Designed by Interior Experts</h2>
                 <p>Ea cibo choro eos, in duo iudico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persequeris contentiones nec, ex sit modus</p>
                 <a href=""><h6>Read More</h6></a>
            </Col>
          </Row>
       </Container>

    </div>
  )
}

export default SlideEate