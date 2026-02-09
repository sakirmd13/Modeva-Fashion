import { Navbar, Nav, Container, Form, FormControl, Button, Badge } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/Context";
import Logo from "../assets/image/icon/modeva.png";

const ModevNavbar = ({ products }) => {
  const { CartState } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

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
      <Navbar expand="lg" fixed="top" bg="light" variant="light" className="py-3">
        <Container>
          {/* Brand */}
          <Navbar.Brand as={NavLink} to="/">
            <img src={Logo} alt="Modeva Logo" height={40} />
          </Navbar.Brand>

          {/* Hamburger toggle */}
          <Navbar.Toggle aria-controls="main-navbar" />

          {/* Collapsible links */}
          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
                Catalog
              </Nav.Link>
              <Nav.Link as={NavLink} to="/sale" className={({ isActive }) => (isActive ? "active" : "")}>
                Sale
              </Nav.Link>
              <Nav.Link as={NavLink} to="/new-arrival" className={({ isActive }) => (isActive ? "active" : "")}>
                New Arrival
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </Nav.Link>
            </Nav>

            {/* Search */}
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

            {/* Icons */}
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

      {/* Push page content below navbar */}
      <div style={{ paddingTop: "80px" }}></div>
    </>
  );
};

export default ModevNavbar;
