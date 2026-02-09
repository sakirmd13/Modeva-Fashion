import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./productscss/CardCarouselCss.css";

const cardData = [
  {
    name: "Cynthia Caroline",
    date: "15 July 2023",
    text:
      "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis."
  },
  {
    name: "Cynthia Caroline",
    date: "15 July 2023",
    text:
      "Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus."
  },
  {
    name: "Cynthia Caroline",
    date: "15 July 2023",
    text:
      "Imperdiet purus eu ornare vel. Donec commodo elementum. Suspendisse laoreet scelerisque morbi vulputate."
  },
  {
    name: "Cynthia Caroline",
    date: "15 July 2023",
    text:
      "Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat."
  }
];

function CardCarousel() {
  return (
    <Container className="carousel-wrapper">
      <Carousel controls={false} indicators={false} interval={3000}>
        {/* SINGLE SLIDE */}
        <Carousel.Item>
          <div className="cards-container">
            {cardData.map((item, index) => (
              <Card className="review-card-fixed">
                <div className="card-header-custom">
                  <div className="left-panel">
                    <div className="circle"></div>
                  </div>

                  <div className="right-panel">
                    <h4>Cynthia Caroline</h4>
                    <p>15 July 2023</p>
                  </div>

                  <div className="stars">★★★★★</div>
                </div>

                <p className="content">
                  Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate.
                </p>
              </Card>

            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CardCarousel;
