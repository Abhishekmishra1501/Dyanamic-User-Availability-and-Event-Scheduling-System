import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Scheduling App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <Row className="text-center">
          <Col>
            <h1 className="mb-4">Welcome to the Scheduling App</h1>

            {/* Updated Button Links */}
            <Button as={Link as any} to="/login" variant="primary" size="lg" className="m-2">
              Login
            </Button>
            <Button as={Link as any} to="/signup" variant="success" size="lg" className="m-2">
              Signup
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
