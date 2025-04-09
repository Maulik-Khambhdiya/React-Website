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
import { FaPlay } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaPiedPiperSquare } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaAudible } from "react-icons/fa";
import { FaBiohazard } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { FaCentercode } from "react-icons/fa";
import { FaDharmachakra } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";


function App() {
  return (
    <>
      <header >

        <Navbar className='' class='header-top'>
          <Container>
            <Row style={{ alignItems: "center" }}>
              <Col xs={4}>
                <ul class='flex padding' style={{ padding: '0 px', marginBottom: '0 px' }}>
                  <li><FaHome style={{ padding: '0px 5px', fontSize: '25px', color: 'rgb(102, 0, 252)' }} />Welcome to Paheli.
                    <span>Need Help?</span>
                    <a href="" class='header-link'>Get in Touch</a></li>
                </ul>
              </Col>
              <Col xs={8}>
                <ul class='flex'>
                  <li><FaLocationArrow style={{ padding: '0px 5px', fontSize: '25px', color: 'rgb(102, 0, 252)' }} />521684 Majadra Street, New York.</li>
                  <li><FaMailBulk style={{ padding: '0px 5px', fontSize: '25px', color: 'rgb(102, 0, 252)' }} />support.Paheli@gmail.com</li>
                  <li><FaPhone style={{ padding: '0px 5px', fontSize: '25px', color: 'rgb(102, 0, 252)' }} />+5-547-254-3526</li>
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


                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="">

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

      </header>
      <main style={{ backgroundColor: ' #212529' }}>
        {/* hero section start*/}



        <div className="hero" style={{ padding: '160px 0px' }}>
          <Container>
            <Row>
              <Col xs={6} className='hero-left'>
                <h1>Essential Policy for Cyber security Protection.</h1>

                <p>In today's increasingly digital world, cybersecurity has become paramount. With the rapid expansion of online activities,</p>

                <div className='hero-btn d-flex align-items-baseline'>
                  <a href="" className='demo-btn'><FaCircle className='circle' /> Request A Demo</a>

                  <div className='play-btn'>
                    <button><a href="" className='video-play'><FaPlay /></a><a href="" className='watch-btn'>Watch Intro Video</a></button>
                  </div>

                </div>

              </Col>

              <Col xs={6} className='hero-right'>

                <img src="hero-2.png" alt="" />

              </Col>
            </Row>
          </Container>

        </div>


        {/* hero section end */}

        {/* security section start */}
        <div className='security'>
          <Container>
            <div className='section-title'>
              <p>What We Do</p>
              <h2>Our Extensive Network Security Services.</h2>
            </div>

            <div className='section-card'>
              <Row>

                <Col xs={4} className='d-flex align-items-center'>
                  <div className='icon'><FaPiedPiperSquare /></div>
                  <div className='content'>
                    <h3>
                      <a href="" className='detail'>Unleashing Ability through Network Management.</a>
                      <a href="" className='read-more'>Read More <FaArrowRight className='turn' /></a>
                    </h3>
                  </div>
                </Col>

                <Col xs={4} className='d-flex align-items-center'>
                  <div className='icon'><FaPiedPiperSquare /></div>
                  <div className='content'>
                    <h3>
                      <a href="" className='detail'>Building a Robust Defense Against Cyber-Attacks.</a>
                      <a href="" className='read-more'>Read More <FaArrowRight className='turn' /></a>
                    </h3>
                  </div>
                </Col>

                <Col xs={4} className='d-flex align-items-center'>
                  <div className='icon'><FaPiedPiperSquare /></div>
                  <div className='content'>
                    <h3>
                      <a href="" className='detail'>Harnessing the Power of Online Network Security Systems.</a>
                      <a href="" className='read-more'>Read More <FaArrowRight className='turn' /></a>
                    </h3>
                  </div>
                </Col>

              </Row>
            </div>
          </Container>
        </div>

        {/* security section end */}

        {/* about section start */}
        <div className='about'>
          <Container>
            <Row>
              <Col xs={6} className='about-left'>
                <div className='about-img position-relative'>
                  <img src="about-4.jpg" alt="" className='img1' />
                  <img src="about-5.jpg" alt="" className='img2 position-absolute' />
                </div>

              </Col>

              <Col xs={6} className='about-right'>
                <div className='section-title text-start'>
                  <p>About Paheli</p>
                  <h2>The Comprehensive Solution for Your Needs.</h2>
                  <span>Organizations are now compelled to complete comprehensive cybersecurity strategies to safeguard their systems, networks, and data from the relentless onslaught of cyber threats, ensuring the protection of privacy...</span>

                  <div className='content-card d-flex align-items-center'>
                    <div className='content-icon'><FaUsers /></div>
                    <div className='content-detail'>
                      <h3>Highly Professional Members</h3>
                      <p className='content-info'>Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,</p>
                    </div>
                  </div>

                  <div className='content-card d-flex align-items-center mb-4'>
                    <div className='content-icon'><FaAudible /></div>
                    <div className='content-detail'>
                      <h3>Infrastructure Integration Technology</h3>
                      <p className='content-info'>Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,</p>
                    </div>
                  </div>

                  <a href="" className='knowmore-btn'><FaArrowRight className='aero' /> Know More About</a>
                </div>


              </Col>
            </Row>
          </Container>
        </div>

        {/* about section end */}

        {/* service section start */}

        <Container>
          <div className='section-title'>
            <p>Our Services</p>
            <h2>From Your Cyber Security Services.</h2>
          </div>

          <div className='services '>

            <Row className='g-4'>

              <Col xs={4} >
                <div className='service-card gy-4'>
                  <div className='service-icon'><FaBiohazard /></div>
                  <div className='service-title'><a href="">Endpoint Security</a></div>
                  <div className='service-detail'>
                    <p>This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.</p>
                  </div>
                  <a href="" className='read-more'>Read More <FaArrowRight className='turn' /></a>
                </div>
              </Col>


              <Col xs={4}>
                <div className='service-card gy-4'>
                  <div className='service-icon'><FaArtstation /></div>
                  <div className='service-title'><a href="">Security Consulting</a></div>
                  <div className='service-detail'>
                    <p>This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.</p>
                  </div>
                  <a href="" className='read-more'>Read More <FaArrowRight className='turn' /></a>
                </div>
              </Col>


              <Col xs={4}>
                <div className='service-card gy-4'>
                  <div className='service-icon'><FaAppStore /></div>
                  <div className='service-title'><a href="">Threat Intelligence Services</a></div>
                  <div className='service-detail'>
                    <p>This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.</p>
                  </div>
                  <a href="" className='read-more'>Read More <FaArrowRight className='turn' /></a>
                </div>
              </Col>


              <Col xs={4}>
                <div className='service-card gy-4'>
                  <div className='service-icon'><FaCentercode /></div>
                  <div className='service-title'><a href="">Endpoint Security</a></div>
                  <div className='service-detail'>
                    <p>This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.</p>
                  </div>
                  <a href="" className='read-more'>Read More <FaArrowRight className='turn' /></a>
                </div>
              </Col>


              <Col xs={4}>
                <div className='service-card gy-4'>
                  <div className='service-icon'>< FaDharmachakra /></div>
                  <div className='service-title'><a href="">Security Training and Awareness</a></div>
                  <div className='service-detail'>
                    <p>This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.</p>
                  </div>
                  <a href="" className='read-more'>Read More <FaArrowRight className='turn' /></a>
                </div>
              </Col>


              <Col xs={4}>
                <div className='service-card gy-4'>
                  <div className='service-icon'><FaDigitalOcean /></div>
                  <div className='service-title'><a href="">Application Security Testing</a></div>
                  <div className='service-detail'>
                    <p>This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.</p>
                  </div>
                  <a href="" className='read-more'>Read More <FaArrowRight className='turn' /></a>
                </div>
              </Col>

            </Row>
          </div>
        </Container>
        {/* service section end */}

        {/* project section start */}

        <Container>
          <div className='project'>
            <div className='project-header'>
              <div className='section-title text-start'>
                <p>Our Projects</p>
                <h2 style={{fontSize:'30px'}}>Feat to Celebrate: Showcasing Some of Our Proud Projects.</h2>
              </div>
              <a href="" className='view-btn'><FaCircle className='circle' />View All Project</a>
            </div>
          </div>

          <div className='project-card'>
            <ul>
              <li>
                <span>Data Loss Prevention (DLP)</span>
                <div className='project-content'>
                  <h3></h3>
                  <p></p>
                </div>
                <a href=""></a>
              </li>
            </ul>

          </div>


        </Container>
        {/* project section end */}
      </main >

    </>
  );
}

export default App;
