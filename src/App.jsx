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
import { FaQuestion } from "react-icons/fa";
import { FaShapes } from "react-icons/fa";
import Accordion from 'react-bootstrap/Accordion';
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IconName } from "react-icons/vsc";
import { VscCalendar } from "react-icons/vsc";


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



        <div className="hero" style={{ padding: '140px 0px 100px 0' }}>
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
                <h2 style={{ fontSize: '30px' }}>Feat to Celebrate: Showcasing Some of Our Proud Projects.</h2>
              </div>
              <a href="" className='view-btn'><FaCircle className='circle' />View All Project</a>
            </div>
          </div>

          <div className='project-card'>
            {/* <ul className='d-flex'>
              <li className='bg-1'>
                <span><img src="projects-1.jpg" alt="" /></span>
                <div className='project-content'>
                  <h3>Data Loss Prevention (DLP)</h3>
                  <p>This includes implementing strategies and tools to prevent sensitive data...</p>
                </div>
                <a href="" className='read-more'>Read More <FaArrowRight className='turn' /></a>
              </li>
              
            </ul> */}

          </div>



        </Container>
        {/* project section end */}

        {/* FAQ section start */}

        <div className='faq'>
          <Container>
            <Row className='align-items-center'>
              <Col xs={6}>

                <div className='section-title text-start'>
                  <div className='faq-content'>
                    <p>FAQs</p>
                    <h2 style={{ fontSize: '33px', marginBottom: '30px' }}>A Dedication to Supporting All Aspects of Your Life.</h2>
                    <span>Can’t find what you are looking for?</span>
                    <h3>Let's Talk: Engage with Us in a Conversation Tailored Just for You.</h3>

                    <div className='faq-icon'>
                      <FaQuestion className='icon1' />
                      <FaShapes className='icon1' />
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={6}>
                <Accordion defaultActiveKey="0" className='bg-color'>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>What should I study for cybersecurity?</Accordion.Header>
                    <Accordion.Body className='accordion'>
                      These services collectively help organizations establish a comprehensive cybersecurity framework and protect their digital assets from various cyber threats. This service focuses on securing end-user devices like.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>How do I choose a cybersecurity career?</Accordion.Header>
                    <Accordion.Body>
                      These services collectively help organizations establish a comprehensive cybersecurity framework and protect their digital assets from various cyber threats. This service focuses on securing end-user devices like.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the lowest salary in cyber security?</Accordion.Header>
                    <Accordion.Body>
                      These services collectively help organizations establish a comprehensive cybersecurity framework and protect their digital assets from various cyber threats. This service focuses on securing end-user devices like.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Can I learn cyber security in 6 months?</Accordion.Header>
                    <Accordion.Body>
                      These services collectively help organizations establish a comprehensive cybersecurity framework and protect their digital assets from various cyber threats. This service focuses on securing end-user devices like.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>What is the highest paying job in cyber security?</Accordion.Header>
                    <Accordion.Body>
                      These services collectively help organizations establish a comprehensive cybersecurity framework and protect their digital assets from various cyber threats. This service focuses on securing end-user devices like.
                    </Accordion.Body>
                  </Accordion.Item>




                </Accordion>

              </Col>

            </Row>
          </Container>
        </div>
        {/* FAQ section end */}

        {/* counter area start */}
        <div className='counter '>
          <Container>
            <Row>
              <Col xs={3}>
                <div className='counter-1'>
                  <h2>36+</h2>
                  <p>YEARS' EXPERIENCE</p>
                </div>
              </Col>

              <Col xs={3}>
                <div className='counter-1'>
                  <h2>645+</h2>
                  <p>CYBER SECURITY EXPERTS</p>
                </div>
              </Col>

              <Col xs={3}>
                <div className='counter-1'>
                  <h2>100%</h2>
                  <p>CUSTOMER SATISFACTION</p>
                </div>
              </Col>

              <Col xs={3}>
                <div className='counter-1'>
                  <h2>35 M</h2>
                  <p>CUSTOMER SERVED GLOBALLY</p>
                </div>
              </Col>
            </Row>
          </Container>

        </div>

        {/* counter area end  */}

        {/* team section start */}
        <div className='team'>
          <Container>
            <div className='section-title'>
              <p>Our Team</p>
              <h2>Meet Our Awesome Team Members.</h2>
            </div>

            <div className='team-member'>
              <Row>
                <Col xs={3}>
                  <div className='card-1'>
                    <a href="" className='position-relative'>
                      <img src="team-1.jpg" alt="" />
                      <div className='social position-absolute d-flex'>
                        <a href=""><FaFacebook className='social-icon' /></a>
                        <a href=""><FaTwitterSquare className='social-icon' /></a>
                        <a href=""><FaInstagram className='social-icon' /></a>
                        <a href=""><FaPinterest className='social-icon' /></a>
                      </div>
                    </a>
                    <h2>Bonnie Acosta</h2>
                    <p>Lead Developer</p>
                  </div>
                </Col>

                <Col xs={3}>
                  <div className='card-1'>
                    <a href="" className='position-relative'>
                      <img src="team-2.jpg" alt="" />
                      <div className='social position-absolute d-flex'>
                        <a href=""><FaFacebook className='social-icon' /></a>
                        <a href=""><FaTwitterSquare className='social-icon' /></a>
                        <a href=""><FaInstagram className='social-icon' /></a>
                        <a href=""><FaPinterest className='social-icon' /></a>
                      </div>
                    </a>
                    <h2>Warren Riner</h2>
                    <p>CEO & Founder</p>
                  </div>
                </Col>

                <Col xs={3}>
                  <div className='card-1'>
                    <a href="" className='position-relative'>
                      <img src="team-3.jpg" alt="" />
                      <div className='social position-absolute d-flex'>
                        <a href=""><FaFacebook className='social-icon' /></a>
                        <a href=""><FaTwitterSquare className='social-icon' /></a>
                        <a href=""><FaInstagram className='social-icon' /></a>
                        <a href=""><FaPinterest className='social-icon' /></a>
                      </div>
                    </a>
                    <h2>Helen Kurt</h2>
                    <p>Developer</p>
                  </div>
                </Col>

                <Col xs={3}>
                  <div className='card-1'>
                    <a href="" className='position-relative'>
                      <img src="team-4.jpg" alt="" />
                      <div className='social position-absolute d-flex'>
                        <a href=""><FaFacebook className='social-icon' /></a>
                        <a href=""><FaTwitterSquare className='social-icon' /></a>
                        <a href=""><FaInstagram className='social-icon' /></a>
                        <a href=""><FaPinterest className='social-icon' /></a>
                      </div>
                    </a>
                    <h2>Wanda Wagner</h2>
                    <p>CO-Founder</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>


        {/* team section end */}

        {/* blog section start */}
        <div className='blog'>
          <Container>
            <div className='section-title'>
              <p>Our Blog</p>
              <h2>Latest Blog & Articles</h2>
            </div>

            <div className='blog-cards'>
              <Row>
                <Col xs={4} className='blog-single-card'>
                  <div className='card-image'>
                    <a href=""><img src="blog-1.jpg" alt="" /></a>
                  </div>
                  <div className='blog-content'>
                    <ul className='d-flex justify-content-between p-0'>
                      <li className='d-flex p-0'><FaRegUser className='blog-icon' /><p>By</p><a href="">Admin</a></li>
                      <li className='p-0'><p><VscCalendar className='blog-icon' />November 6, 2024</p></li>
                    </ul>
                    <h3>Ensuring Data Security Amid Office Transitions The Emerging Trend of 2024.</h3>
                    <a href="" className='read-more'>Read More <FaArrowRight className='turn' /></a>

                  </div>


                </Col>

                <Col xs={4} className='blog-single-card'>
                  <div className='card-image'>
                    <a href=""><img src="blog-2.jpg" alt="" /></a>
                  </div>
                  <div className='blog-content'>
                    <ul className='d-flex justify-content-between p-0'>
                      <li className='d-flex p-0'><FaRegUser className='blog-icon' /><p>By</p><a href="">Admin</a></li>
                      <li className='p-0'><p><VscCalendar className='blog-icon' />November 8, 2024</p></li>
                    </ul>
                    <h3>Navigating the Impact of Blockchain Technology in the Logistics Sector.</h3>
                    <a href="" className='read-more'>Read More <FaArrowRight className='turn' /></a>

                  </div>


                </Col>

                <Col xs={4} className='blog-single-card'>
                  <div className='card-image'>
                    <a href=""><img src="blog-3.jpg" alt="" /></a>
                  </div>
                  <div className='blog-content'>
                    <ul className='d-flex justify-content-between p-0'>
                      <li className='d-flex p-0'><FaRegUser className='blog-icon' /><p>By</p><a href="">Admin</a></li>
                      <li className='p-0'><p><VscCalendar className='blog-icon' />November 6, 2024</p></li>
                    </ul>
                    <h3>Securing the Future: How AI Redefines Customer Workload Protection.</h3>
                    <a href="" className='read-more'>Read More <FaArrowRight className='turn' /></a>

                  </div>


                </Col>

              </Row>
            </div>
          </Container>
        </div>





        {/* blog section end */}
      </main >

    </>
  );
}

export default App;
