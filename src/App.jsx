import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";


function App() {
  return (
    <>

      <Navbar className='' class='header-top'>
        <Container>
          <Row style={{ alignItems: "center" }}>
            <Col xs={5}>
              <ul class='flex'>
                <li><FaHome style={{padding:'0px 5px',fontSize:'25px',color:'rgb(102, 0, 252)'}}/>Welcome to Paheli.
                  <span>Need Help?</span>
                  <a href="" class='header-link'>Get in Touch</a></li>
              </ul>
            </Col>
            <Col xs={6}>
              <ul class='flex'>
                <li><FaLocationArrow />521684 Majadra Street, New York.</li>
                <li><FaMailBulk />support.Paheli@gmail.com</li>
                <li><FaPhone />+5-547-254-3526</li>
              </ul>
            </Col>
          </Row>

        </Container>
      </Navbar>

      <Navbar expand="lg" className="" style={{ backgroundColor: ' #212529' }}>

        <Container>
          <Row style={{ alignItems: "center" }}>
            <Col xs={2}>
              <Navbar.Brand href="#home"><img src="white-logo.png" alt="" /></Navbar.Brand>
            </Col>

            <Col lg={6}>

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
            </Col>
            <Col xs={4}>
              <ul style={{ margin: '0px' }} className="flex">
                <li><button className='search'><FaSearch /></button></li>
                <li><a href="" class='header-btn'><FaArrowRight className='aero' /> Get A Quote</a></li>

              </ul>
            </Col>

          </Row>
        </Container>
      </Navbar>



    </>
  );
}

export default App;
