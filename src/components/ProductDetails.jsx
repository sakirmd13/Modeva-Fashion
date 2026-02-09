import React, { useState, useContext } from "react";
import { Container, Row, Col, Image, Button, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/Context";
import { useLocation } from "react-router-dom";
import "./productscss/ProductsDetails.css";


const ProductDetails = () => {
  const { CartDispatch } = useContext(CartContext);
  const location = useLocation();
  const productData = location.state.product;

  const [mainImage, setMainImage] = useState(productData.thumbnail);
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState(productData.size[0] || "M");

  const images =
    productData.images.length >= 6
      ? productData.images.slice(0, 6)
      : [...productData.images, productData.thumbnail].slice(0, 6);

  const sizes = productData.size;
  const discountedPrice = (productData.price / 2).toFixed(2);

  const handleAddToCart = () => {
    CartDispatch({
      type: "ADD_TO_CART",
      payload: { ...productData, qty, size: selectedSize, price: discountedPrice },
    });
    alert("Product added to cart!");
  };

  return (
    <>

      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Image src={mainImage} fluid className="mb-3" />
            <div className="d-flex gap-2 flex-wrap">
              {images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  width={60}
                  className="cursor"
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </Col>

          <Col md={6}>
            <p className="text-muted">{productData.category}</p>
            <h2 className="fw-bold">{productData.title}</h2>

            <div className="mb-2">
              <del className="me-2">IDR {productData.price}</del>
              <Badge bg="danger">50% OFF</Badge>
            </div>

            <h4 className="text-success mb-3">IDR {discountedPrice}</h4>
            <p className="text-muted">{productData.description}</p>

            <div className="mb-3">
              <h6>Size</h6>
              <div className="d-flex gap-2 flex-wrap">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "dark" : "outline-dark"}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h6>Quantity</h6>
              <div className="d-flex align-items-center gap-3">
                <Button variant="outline-dark" onClick={() => qty > 1 && setQty(qty - 1)}>-</Button>
                <span className="fs-5">{qty}</span>
                <Button variant="outline-dark" onClick={() => qty < 5 && setQty(qty + 1)}>+</Button>
              </div>
            </div>

            <Button variant="dark" size="lg" onClick={handleAddToCart}>
              <FaShoppingCart className="me-2" /> ADD TO CART
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
