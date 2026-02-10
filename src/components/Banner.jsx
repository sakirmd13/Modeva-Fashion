// Banner.jsx
import React from "react";
import "./productscss/BannerCss.css";
import CardSlider from "./CardCarousel";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

import ShortDress from "../assets/image/shortdress.png";
import Frok from "../assets/image/frok.png";
import ShortFrok from "../assets/image/shortfrok.png";
import AnarkaliDress from "../assets/image/anarkalidress.png";
import FrokTwo from "../assets/image/frok2.png";
import BlackDress from "../assets/image/blackdress.png";
import GrayBlack from "../assets/image/gryblack.png";
import YellowGray from "../assets/image/yellogray.png";
import ChristmasStyle from "../assets/image/crismus.png";
import YoutubeVideo from "./YoutubeVideo";

const Banner = () => {
  const navigate = useNavigate();
  const handleSeeMore = () => navigate("/products");

  // Render single card
  const renderCard = (img, name = "Product Name", category = "PRODUCT CATEGORY", price = "IDR XXX") => (
    <div className="dress-card">
      <div className="image-box">
        <span className="rating-badge">
          <FaStar /> 4.5
        </span>
        <img src={img} alt={name} />
      </div>
      <p className="category">{category}</p>
      <h5>{name}</h5>
      <p className="price">{price}</p>
    </div>
  );

  return (
    <Container>
      {/* Banner */}
      <section className="banner-section">
        <Container>
          <Row className="align-items-center">

            {/* LEFT CONTENT */}
            <Col md={6} xs={12}   className="banner-left">
              <h1>New Collection</h1>
              <p>Best fashion for you</p>
            </Col>

            {/* RIGHT CARDS */}
            <Col md={6} xs={12}  className="banner-products">
              {[1, 2].map((_, i) => (
                <div key={i} className={`banner-card card${i + 1}`}>
                  <div className="banner-card-content xs={12}">

                    <div className="banner-image ">
                      <img src={ShortDress} alt={`Banner ${i + 1}`} />
                    </div>

                    <div className="banner-info">
                      <h5>Product Name in Here</h5>
                      <p>IDR 300.000</p>
                      <Link className="shop-now-btn" to="/products">
                        SHOP NOW
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </Col>

          </Row>
        </Container>
      </section>




      {/* Best Dress */}
      <section className="best-dress py-5">
        <Row>
          {[Frok, ShortFrok, AnarkaliDress, FrokTwo].map((img, i) => (
            <Col md={3} sm={6} xs={12} key={i}>
              {renderCard(img)}
            </Col>
          ))}
        </Row>
        <Button className="margin" onClick={handleSeeMore}>SEE MORE →</Button>
      </section>

      {/* Best Outfit */}
      <section className="best-outfit py-5">
        <Row>
          {[BlackDress, GrayBlack, YellowGray, ChristmasStyle].map((img, i) => (
            <Col
              md={3}
              sm={6}
              xs={12}
              key={i}
              className="card-col"  // ✅ added class
            >
              {renderCard(img)}
            </Col>
          ))}
        </Row>
        <Button className="margin" onClick={handleSeeMore}>
          SEE MORE →
        </Button>
      </section>


      {/* Other components */}
      <YoutubeVideo />
      <CardSlider />
    </Container>
  );
};

export default Banner;
