// Banner.jsx
import React from "react";

import "./productscss/BannerCss.css";
import CardSlider from "./CardCarousel";
import { useNavigate, Link } from "react-router-dom";
// React-Bootstrap
import { Container, Row, Col, Image, Button } from "react-bootstrap";

// Icons
import { FaStar, FaThumbsUp, FaPhoneAlt, FaRocket, FaCreditCard } from "react-icons/fa";

// Category images
import FormalWoman from "../assets/image/formal-woman.png";
import FormalMen from "../assets/image/formal-men.png";
import CasualCategory from "../assets/image/casual-style.png";

// Banner product
import ShortDress from "../assets/image/shortdress.png";

// Best Dress images
import Frok from "../assets/image/frok.png";
import ShortFrok from "../assets/image/shortfrok.png";
import AnarkaliDress from "../assets/image/anarkalidress.png";
import FrokTwo from "../assets/image/frok2.png";

// Best Outfit images
import BlackDress from "../assets/image/blackdress.png";
import GrayBlack from "../assets/image/gryblack.png";
import YellowGray from "../assets/image/yellogray.png";
import ChristmasStyle from "../assets/image/crismus.png";

// Video section images
import YouTubeVideo from "./YoutubeVideo";

const Banner = () => {
  const navigate = useNavigate();

  const handlePlay = () => {
    window.open(
      "https://youtu.be/5d9jtO0uOpk?si=2zGwecMdkIpYCbo8",
      "_blank"
    );
  };

  const handleSeeMore = () => {
    navigate("/products"); // Products page route
  };

  return (
    <>
      <Container>

        {/* ================= Banner Section ================= */}
        <section className="banner-section">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="banner-left">
                <p>Made in Indonesia, dedicated to Indonesia</p>
                <h1>Discover the Art of Dressing Up</h1>
              </Col>

              <Col md={6} className="banner-products">
                {[1, 2].map((_, index) => (
                  <div className={`banner-card card${index + 1}`} key={index}>
                    <div className="card-left">
                      <img src={ShortDress} alt="Short Dress" />
                    </div>
                    <div className="card-right">
                      <h2>Product Name in Here</h2>
                      <p>IDR 300.000</p>
                      <Link to="/products">
                        SHOP NOW
                      </Link>

                    </div>
                  </div>
                ))}
              </Col>
            </Row>
          </Container>
        </section>

        {/* ================= Category Section ================= */}
        <section className="banner-images-section my-5">
          <Container>
            <Row>
              <Col md={6} className="d-flex flex-column gap-4">
                <div className="image-wrapper text-center">
                  <Image src={FormalWoman} fluid alt="Formal Woman" />
                  <h2 className="image-text mt-2">FORMAL WOMAN</h2>
                </div>

                <div className="image-wrapper text-center">
                  <Image src={FormalMen} fluid alt="Formal Men" />
                  <h2 className="image-text mt-2">FORMAL MEN</h2>
                </div>
              </Col>

              <Col md={6} className="d-flex align-items-center justify-content-center">
                <div className="image-wrapper text-center">
                  <Image src={CasualCategory} fluid alt="Casual Style" />
                  <h2 className="image-text mt-2">CASUAL STYLE</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ================= Best Dress Section ================= */}
        <section className="best-dress py-5">
          <Container>
            <Row>
              <Col xs={12} className="mb-4">
                <h2 className="text-uppercase">
                  The Best Dress for the Best Woman
                </h2>
              </Col>
            </Row>

            <Row>
              {[Frok, ShortFrok, AnarkaliDress, FrokTwo].map((img, index) => (
                <Col md={3} sm={6} xs={12} className="mb-4" key={index}>
                  <div className="dress-card">
                    <div className="rating-badge">
                      <FaStar />
                      <span>4.5</span>
                    </div>
                    <img src={img} alt="Dress" className="img-fluid" />
                    <p className="category">PRODUCT CATEGORY</p>
                    <h5>Product Name</h5>
                    <p className="price">IDR XXX</p>
                  </div>
                </Col>
              ))}
            </Row>

            <Row>
              <Col xs={12}>
                <Button className="see-more-btn" onClick={handleSeeMore}>
                  SEE MORE →
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ================= Best Outfit Section ================= */}
        <section className="best-outfit py-5">
          <Container>
            <Row>
              <Col xs={12} className="mb-4">
                <h2 className="text-uppercase">
                  Best outfit for your happiness
                </h2>
              </Col>
            </Row>

            <Row>
              {[BlackDress, GrayBlack, YellowGray, ChristmasStyle].map(
                (img, index) => (
                  <Col md={3} sm={6} xs={12} className="mb-4" key={index}>
                    <div className="dress-card">
                      <div className="rating-badge">
                        <FaStar />
                        <span>4.5</span>
                      </div>
                      <img src={img} alt="Outfit" className="img-fluid" />
                      <p className="category">PRODUCT CATEGORY</p>
                      <h5>Product Name</h5>
                      <p className="price">IDR XXX</p>
                    </div>
                  </Col>
                )
              )}
            </Row>

            <Row>
              <Col xs={12}>
                <Button className="see-more-btn" onClick={handleSeeMore}>
                  SEE MORE →
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ================= Happy Customer Section ================= */}
        <section className="happy-customer">
          <Container>
            <Row className="align-items-center g-4">
              {/* Left Card */}
              <Col md={3}>
                <div className="hc-card text-center">
                  <div className="hc-icon center-icon">
                    <FaThumbsUp />
                  </div>
                  <h3 className="hc-title">100% Satisfaction Guaranteed</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </Col>

              {/* Middle Section */}
              <Col md={6}>
                <div className="hc-middle">
                  <div className="hc-middle-card">
                    <div className="hc-icon middle-icon">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <h2>24/7 Online Service</h2>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>

                  <div className="hc-middle-card">
                    <div className="hc-icon middle-icon">
                      <FaRocket />
                    </div>
                    <div>
                      <h2>Fast Delivery</h2>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Right Card */}
              <Col md={3}>
                <div className="hc-card text-center">
                  <div className="hc-icon center-icon">
                    <FaCreditCard />
                  </div>
                  <h3 className="hc-title">Payment With Secure System</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ================= Video Section ================= */}
        <section>
          <Container>
            <YouTubeVideo />
          </Container>
        </section>

        <CardSlider />
      </Container>
    </>
  );
};

export default Banner;
