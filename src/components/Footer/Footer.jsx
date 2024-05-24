import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import '../../styles/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg='3' md='4' sm='6'>
              <div className="footer__logo text-start">
                <img src={logo} alt="logo" />
                <h5>Tasty Treat</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quod tempora </p>
              </div>
            </Col>
            <Col lg='3' md='4' sm='6'>

              <h4 className='footer_title'>Delivery Time</h4>

              <ListGroup className='delivery__time-list'>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Sunday - Thrusday</span>
                  <p>10:00am - 11:00pm</p>
                </ListGroupItem>

                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Friday - Saturday</span>
                  <p>OFF day</p>
                </ListGroupItem>
              </ListGroup>

            </Col>
            <Col lg='3' md='4' sm='6'>

              <h4 className='footer_title'>Contact</h4>

              <ListGroup className='delivery__time-list'>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <p>Location : ZindaBazar, Sylhet-3100, Bangladesh</p>
                </ListGroupItem>

                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Phone : 01712345678</span>
                </ListGroupItem>

                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Email : example@gmail.com</span>
                </ListGroupItem>
              </ListGroup>

            </Col>
            <Col lg='3' md='4' sm='6'>
              <h4 className='footer_title'>Newsletter</h4>
              <p>Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder='Enter Your Email' />
                <span><i className='ri-send-plane-line'></i></span>
              </div>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col lg='6' md='6'>
              <p className='copyright__text'>Copyright - 2024, website made by Heli Bhanderi. All Right Reserved.</p>
            </Col>
            <Col lg='6' md='6'>
              <div className="social__links d-flex align-items-center gap-4 justify-content-end">
                <p className='m-0'>Follow : </p>
                <span>
                  {" "}
                  <Link to='https://www.facebook.com/'> <i className='ri-facebook-line' ></i> </Link>
                  {" "}
                </span>

                <span>
                  {" "}
                  <Link to='https://www.facebook.com/'><i className='ri-github-line' ></i></Link>
                  {" "}
                </span>

                <span>
                  {" "}
                  <Link to='https://www.facebook.com/'><i className='ri-youtube-line' ></i></Link>
                  {" "}
                </span>

                <span>
                  {" "}
                  <Link to='https://www.facebook.com/'><i className='ri-linkedin-line' ></i></Link>
                  {" "}
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
