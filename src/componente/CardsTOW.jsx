import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import card4 from '../images/card4.jpg';
import card5 from '../images/card5.jpg';
import card6 from '../images/card6.jpg';

function GroupExample() {
  return (
    <CardGroup className='cards  my-5 '>
      <Card>
        <Card.Body>
        <img src={card4} alt="" />
          <Card.Title>South Sun House</Card.Title>
          <Card.Text>
             Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum
          </Card.Text>
          </Card.Body>
        <Card.Footer>
        <h2 className='text-center'>265.000$</h2>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
        <img style={{height:"300px"}} src={card5} alt="" />
          <Card.Title>Mountain Cabin</Card.Title>
          <Card.Text>
             Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <h2 className='text-center'>89.000$</h2>
        </Card.Footer>
      </Card>
      
      <Card>
        <Card.Body>
        <img src={card6} alt="" />
          <Card.Title>Pine Forest Bungalow</Card.Title>
          <Card.Text>
             Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum
          </Card.Text>
        </Card.Body>
        <Card.Footer>
         
        <h2 className='text-center'>1.200$</h2>
        </Card.Footer>
      </Card>


    </CardGroup>
  );
}

export default GroupExample;