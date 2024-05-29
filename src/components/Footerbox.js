import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Footerbox = () => {
  return (
    <footer className='footerbox bg-light'>
      <Container>
        <Row className="py-3">
          <Col md={4}>
            <p>&copy; 2024 myMarket</p>
          </Col>
          <Col md={8}>
            <ul className="list-unstyled d-flex justify-content-end">
              <li className="ms-3"><Link to='#'>About</Link></li>
              <li className="ms-3"><Link to='#'>Privacy Policy</Link></li>
              <li className="ms-3"><Link to='#'>Licensing</Link></li>
              <li className="ms-3"><Link to='#'>Contact</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footerbox;