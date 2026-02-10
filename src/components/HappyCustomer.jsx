import { Container, Row, Col } from "react-bootstrap";
import { FaThumbsUp, FaPhoneAlt, FaShippingFast, FaCreditCard } from "react-icons/fa";
import "./productscss/HappyCustomer.css";

const HappyCustomer = () => {
  return (
    <section className="happy-customer">
      <Container>
        <Row className="align-items-center">

          {/* LEFT COL */}
          <Col md={3}>
            <div className="feature-box">
              <div className="icon-circle ">
                <FaThumbsUp />
              </div>
              <h3>100% Satisfaction Guaranteed</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
                scelerisque morbi vulputate.
              </p>
            </div>
          </Col>

          {/* MIDDLE COL */}
          <Col md={6}>
            <div className="middle-features">

              <div className="middle-item">
                <div className="icon-circle">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h2>24/7 Online Service</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
                    scelerisque morbi vulputate.
                  </p>
                </div>
              </div>

              <div className="middle-item">
                <div className="icon-circle">
                  <FaShippingFast />
                </div>
                <div>
                  <h2>Fast Delivery</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
                    scelerisque morbi vulputate.
                  </p>
                </div>
              </div>

            </div>
          </Col>

          {/* RIGHT COL */}
          <Col md={3}>
            <div className="feature-box">
              <div className="icon-circle">
                <FaCreditCard />
              </div>
              <h3>Payment With Secure System</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
                scelerisque morbi vulputate.
              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default HappyCustomer;
