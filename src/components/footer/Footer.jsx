import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* LEFT SIDE */}
          <Col md={6} className="footer-left mb-4 mb-md-0">
            <h4 className="logo">MODEVA</h4>
            <p>WhatsApp: +91 9142102899</p>
            <p>Email: Mds079475@gmail.com</p>
            <p>
              Address: Lorem ipsum street Block B Number 08, Jakarta, Indonesia,
              12345
            </p>
          </Col>

          {/* RIGHT SIDE */}
          <Col md={6} className="footer-right">
            <Row>
              {/* MENU */}
              <Col xs={4}>
                <h5>Menu</h5>
                <ul>
                  <li>Sale</li>
                  <li>New Arrival</li>
                  <li>Formal Men</li>
                  <li>Formal Woman</li>
                  <li>Casual Men</li>
                  <li>Casual Woman</li>
                </ul>
              </Col>

              {/* GET HELP */}
              <Col xs={4}>
                <h5>Get Help</h5>
                <ul>
                  <li>FAQ</li>
                  <li>Customer Service</li>
                  <li>Refund & Return</li>
                  <li>Terms & Condition</li>
                  <li>Shipping</li>
                </ul>
              </Col>

              {/* ACCOUNT */}
              <Col xs={4}>
                <h5>Account</h5>
                <ul>
                  <li>My Account</li>
                  <li>My Orders</li>
                  <li>Vouchers & Discounts</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* COPYRIGHT */}
        <Row className="mt-4">
          <Col xs={12} className="text-center footer-center">
            <p>All rights reserved © 2023 By Modeva Fashion</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
