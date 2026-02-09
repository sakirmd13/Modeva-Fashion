import React, { useContext, useState } from "react";
import { CartContext } from "../context/Context";
import { Row, Col, Image, Button, Form, Card } from "react-bootstrap";

// ✅ Navbar import
import ModevNavbar from "../components/ModevNavbar";


const ProductCart = () => {
  const { CartState, CartDispatch } = useContext(CartContext);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = CartState.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // Apply Coupon
  const applyCoupon = () => {
    if (coupon === "WOW") {
      setDiscount(100);
      alert("Coupon Applied! ₹100 off");
    } else {
      setDiscount(0);
      alert("Invalid Coupon");
    }
  };

  const total = Math.max(subtotal - discount, 0);

  return (
    <>

      <ModevNavbar />

      <div className="container mt-5">
        <Row>
          {/* LEFT SIDE - CART */}
          <Col md={8}>
            <h2 className="mb-4">CART</h2>

            {CartState.cartItems.map((item) => (
              <Card key={item.id} className="mb-3 p-3 border-0">
                <Row className="align-items-center">
                  <Col md={3}>
                    <Image src={item.thumbnail} fluid />
                  </Col>

                  <Col md={5}>
                    <h6>{item.title}</h6>
                    <p>₹ {item.price}</p>

                    {/* QTY */}
                    <div className="d-flex align-items-center">
                      <Button
                        size="sm"
                        variant="outline-dark"
                        disabled={item.qty === 1}
                        onClick={() =>
                          CartDispatch({
                            type: "DECREASE_QTY",
                            payload: item.id,
                          })
                        }
                      >
                        -
                      </Button>

                      <span className="mx-2 px-3 py-1 border">
                        {item.qty}
                      </span>

                      <Button
                        size="sm"
                        variant="outline-dark"
                        onClick={() =>
                          CartDispatch({
                            type: "INCREASE_QTY",
                            payload: item.id,
                          })
                        }
                      >
                        +
                      </Button>
                    </div>
                  </Col>

                  <Col md={2}>
                    <Button
                      variant="link"
                      className="text-danger p-0"
                      onClick={() =>
                        CartDispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item.id,
                        })
                      }
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Card>
            ))}

            {/* NOTES */}
            <Form.Control
              as="textarea"
              className="mt-3"
              placeholder="Notes: Please double check before packing..."
            />
          </Col>

          {/* RIGHT SIDE - SUMMARY */}
          <Col md={4}>
            <Card className="p-4 border-0">
              <h5>SHOPPING INFO</h5>
              <hr />

              {/* COUPON */}
              <div className="d-flex mb-3">
                <Form.Control
                  placeholder="Enter coupon"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <Button
                  variant="dark"
                  className="ms-2"
                  onClick={applyCoupon}
                >
                  Apply
                </Button>
              </div>

              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₹ {subtotal.toFixed(2)}</span>
              </div>
              
              <div className="d-flex justify-content-between text-success">
                <span>Discount</span>
                <span>- ₹ {discount.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between fw-bold mt-2">
                <span>Total</span>
                <span>₹ {total.toFixed(2)}</span>
              </div>

              <Button className="mt-4 w-100" variant="dark">
                PROCEED TO CHECKOUT
              </Button>
            </Card>
          </Col>
        </Row>
      </div>

    </>
  );
};

export default ProductCart;
