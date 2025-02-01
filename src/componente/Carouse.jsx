import Carousel from 'react-bootstrap/Carousel';
import one from '../images/c one.jpg'
import tow from '../images/c tow.jpg'
import three from '../images/c three.jpg'

function UncontrolledExample() {
  return (
    
    <Carousel  className='carousell my-5'>
      <Carousel.Item>
        <img src={one} alt="" />
        <h1 className='absu'>Buy or rent properties with no commission</h1>
      </Carousel.Item>

      <Carousel.Item>
      <img src={tow} alt="" />
      <h1 className='absu'>Buy or rent properties with no commission</h1>
      </Carousel.Item>

      <Carousel.Item>
      <img src={three} alt="" />
      <h1 className='absu'>Buy or rent properties with no commission</h1>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default UncontrolledExample;