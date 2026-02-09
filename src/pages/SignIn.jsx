import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import validatePassword from "./validatePassword/validatePassword";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import './LoginSingUp.css';

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Password validation rules
  const rules = validatePassword(password);
  const isValid = Object.values(rules).every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      toast.success("You are logged in!");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      toast.error("Password is not valid!");
    }
  };

  return (
    <>

      <Container>
        <Row className="signin-row">
          {/* Left Image */}
          <Col md={6} className="d-none d-md-block">
            <Image
              src="src/assets/image/patner.jpg"
              className="signin-image"
            />
          </Col>

          {/* Right Form */}
          <Col md={6}>
            <h2 className="AllCapital">Sign In</h2>
            <Form onSubmit={handleSubmit}>
              {/* Name */}
              <Form.Group className="mb-3">
                <Form.Label className="AllCapital">Name</Form.Label>
                <Form.Control placeholder="MD SAKIR" required />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3">
                <Form.Label className="AllCapital">Password</Form.Label>
                <div className="d-flex align-items-center mb-2">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <i
                    className={`ms-2 bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                    style={{ fontSize: "1.5rem", cursor: "pointer" }}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </div>

                {/* Password Validation Rules */}
                <ul className="list-unstyled" style={{ fontSize: "0.9rem" }}>
                  <li className="d-flex align-items-center">
                    <i className={`bi me-2 ${rules.length ? "bi-check-circle-fill text-success" : "bi-x-circle-fill text-danger"}`}></i>
                    Minimum 8 characters
                  </li>
                  <li className="d-flex align-items-center">
                    <i className={`bi me-2 ${rules.number ? "bi-check-circle-fill text-success" : "bi-x-circle-fill text-danger"}`}></i>
                    Must contain at least 1 number
                  </li>
                  <li className="d-flex align-items-center">
                    <i className={`bi me-2 ${rules.upperLower ? "bi-check-circle-fill text-success" : "bi-x-circle-fill text-danger"}`}></i>
                    Must contain 1 uppercase & 1 lowercase
                  </li>
                  <li className="d-flex align-items-center">
                    <i className={`bi me-2 ${rules.symbol ? "bi-check-circle-fill text-success" : "bi-x-circle-fill text-danger"}`}></i>
                    Must contain at least 1 symbol
                  </li>
                </ul>
              </Form.Group>

              <Button type="submit" className="w-100">
                Sign In
              </Button>
            </Form>

            <p className="mt-3">
              Don’t have an account? <Link to="/signup">Register here</Link>
            </p>
          </Col>
        </Row>
        <ToastContainer position="top-right" />
      </Container>
    </>
  );
};

export default SignIn;
