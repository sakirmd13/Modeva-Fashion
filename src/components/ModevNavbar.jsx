import { Navbar, Nav, Container, Form, FormControl, Button, Badge } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/Context";
import Logo from "../assets/image/icon/modeva.png";

const ModevNavbar = ({ products }) => {
  const { CartState } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showBanner, setShowBanner] = useState(true); // 👈 banner state

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const matched = products?.find(product =>
      product.name.toLowerCase().includes(query)
    );

    if (matched) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    } else {
      alert("No product found!");
    }

    setSearchQuery("");
  };

  return (
    <>
      {/* 🔥 Top Discount Banner */}
      {showBanner && (
        <div
          className="w-100 text-white py-2 small fw-semibold position-fixed top-0"
          style={{ backgroundColor: "#8B4513", zIndex: 2000 }}
        >
          <Container className="d-flex justify-content-between align-items-center">
            <span className="text-center w-100">
              Discount 20% For New Member, ONLY FOR TODAY!!
            </span>

            <button
              onClick={() => setShowBanner(false)}
              className="btn btn-sm btn-light ms-3"
            >
              ✖
            </button>
          </Container>
        </div>
      )}


      {/* Navbar */}
      <Navbar
        expand="lg"
        fixed="top"
        bg="light"
        variant="light"
        className="py-3"
        style={{ top: showBanner ? "36px" : "0" }} // 👈 adjust position
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img src={Logo} alt="Modeva Logo" height={40} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/products">Catalog</Nav.Link>
              <Nav.Link as={NavLink} to="/sale">Sale</Nav.Link>
              <Nav.Link as={NavLink} to="/new-arrival">New Arrival</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            </Nav>

            <Form className="d-flex me-3" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-dark" type="submit">Search</Button>
            </Form>

            <Nav className="d-flex align-items-center">
              <Nav.Link as={NavLink} to="/signup">
                <i className="bi bi-person fs-5"></i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cart" className="position-relative">
                <i className="bi bi-cart fs-5"></i>
                {CartState?.cartItems?.length > 0 && (
                  <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                    {CartState.cartItems.length}
                  </Badge>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Push content */}
      <div style={{ paddingTop: showBanner ? "130px" : "80px" }}></div>
    </>
  );
};

export default ModevNavbar;
