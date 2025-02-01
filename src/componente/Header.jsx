import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'

function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid className='mx-5 p'>
        <Navbar.Brand href="#home"> <img style={{height:"60px"}} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand>
            <div className="navlink">
            <h6 className='home'> Home </h6>
            <h6 className='home'> About us </h6>
            <h6 className='home'> Blog </h6>
            </div>
          </Navbar.Brand>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href=""> <button>Log in</button> </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;