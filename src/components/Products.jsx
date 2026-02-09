import { Fragment, useContext, useState } from "react";
import { Col, Row, Card, Button, Container, Accordion } from "react-bootstrap";
import { ProductsData } from "../data/ProductsData";
import { CartContext } from "../context/Context";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "../components/productscss/Products.css";

const Products = () => {
  const { CartState, CartDispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    category: [],
    size: [],
    color: [],
    price: [],
  });

  const handleFilterClick = (type, value) => {
    setFilters((prev) => {
      const alreadySelected = prev[type].includes(value);
      const newValues = alreadySelected
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value];
      return { ...prev, [type]: newValues };
    });
  };

  const handleAddToCart = (product) => {
    const found = CartState.cartItems.some((item) => item.id === product.id);
    if (found) toast.error("Item already in cart");
    else {
      CartDispatch({ type: "ADD_TO_CART", payload: { ...product, qty: 1 } });
      toast.success("Item added to cart");
    }
  };

  const handleProductClick = (product) => {
    navigate(`/products/${product.id}`, { state: { product } });
  };

  const capitalizeWords = (text) =>
    text.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const formatPriceIDR = (price) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(price);

  const filteredProducts = ProductsData.filter((p) => {
    const matchCategory = filters.category.length === 0 || filters.category.includes(p.category);
    const matchSize = filters.size.length === 0 || p.size.some((s) => filters.size.includes(s));
    const matchColor = filters.color.length === 0 || p.color.some((c) => filters.color.includes(c));
    const matchPrice = filters.price.length === 0 || filters.price.includes(p.price);
    return matchCategory && matchSize && matchColor && matchPrice;
  });

  const categories = ["Men", "Women", "Unisex"];
  const sizes = ["M", "L", "XL"];
  const colors = ["Black", "Blue", "White", "Yellow", "Brown"];
  const prices = [3000, 1500, 1200, 900, 1400, 1600, 1700];

  return (
    <Container fluid className="py-5">
      <h1 className="m-3">All Products</h1>

      <Row className="p-3">
        {/* Left Sidebar - Filters */}
        <Col md={3}>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Category</Accordion.Header>
              <Accordion.Body>
                {categories.map((cat) => (
                  <li
                    key={cat}
                    style={{ cursor: "pointer", listStyle: "none" }}
                    onClick={() => handleFilterClick("category", cat)}
                  >
                    {cat} {filters.category.includes(cat) ? "✓" : ""}
                  </li>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Size</Accordion.Header>
              <Accordion.Body>
                {sizes.map((size) => (
                  <li
                    key={size}
                    style={{ cursor: "pointer", listStyle: "none" }}
                    onClick={() => handleFilterClick("size", size)}
                  >
                    {size} {filters.size.includes(size) ? "✓" : ""}
                  </li>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Color</Accordion.Header>
              <Accordion.Body>
                {colors.map((color) => (
                  <li
                    key={color}
                    style={{ cursor: "pointer", listStyle: "none" }}
                    onClick={() => handleFilterClick("color", color)}
                  >
                    {color} {filters.color.includes(color) ? "✓" : ""}
                  </li>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                {prices.map((price) => (
                  <li
                    key={price}
                    style={{ cursor: "pointer", listStyle: "none" }}
                    onClick={() => handleFilterClick("price", price)}
                  >
                    ₹{price} {filters.price.includes(price) ? "✓" : ""}
                  </li>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* Right Content - Products */}
        <Col md={9}>
          <Row>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                const isInCart = CartState.cartItems.some((item) => item.id === product.id);
                return (
                  <Col key={product.id} xs={12} md={4}lg={3} className="mb-3">
                    <Card className="product-card" style={{ position: "relative" }}>
                      <div className="star">
                        <FaStar />
                        <span style={{ color: "#fff", marginLeft: "2px" }}>4.9</span>
                      </div>

                      <Card.Img
                        variant="top"
                        src={product.thumbnail}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleProductClick(product)}
                      />

                      <Card.Body>
                        <p>{capitalizeWords(product.category)}</p>
                        <Card.Title>{capitalizeWords(product.title)}</Card.Title>
                        <Card.Text>{formatPriceIDR(product.price)}</Card.Text>
                      </Card.Body>

                      <footer className="p-2 product-actions">
                        <Button
                          variant={isInCart ? "secondary" : "dark"}
                          size="sm"
                          className="w-100"
                          onClick={() => handleAddToCart(product)}
                          disabled={isInCart}
                        >
                          {isInCart ? "In Cart" : "Add To Cart"}
                        </Button>
                      </footer>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <Col>
                <h5 className="text-center mt-5">No products found for selected filters</h5>
              </Col>
            )}
          </Row>
        </Col>
      </Row>

      <ToastContainer position="bottom-right" autoClose={1500} />
    </Container>
  );
};

export default Products;
