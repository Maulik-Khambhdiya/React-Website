import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function App() {
  return (
    <>
      <div style={{backgroundColor:'black'}}>      
        <Container fluid>

        <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor:'black'}}>

          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

                <NavDropdown title="Home" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Home1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Home2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Home3</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#about">About</Nav.Link>



                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Services Details</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">FAQ</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Team</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Pricing</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Log In</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">Register</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">Search Reasult</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.7">Testimonial</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.8">Privacy Policy</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.9">Terms & Conditions</NavDropdown.Item>
                </NavDropdown>


                <NavDropdown title="Blogs" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Blog Details</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#contact">Contact</Nav.Link>

              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      </div>


    </>
  );
}

export default App;
