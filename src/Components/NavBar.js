import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({setRateFilter, search}) {

  const setRate = (value) => {
    setRateFilter(value);
  }
  return (
    <div><Navbar expand="lg" className="bg-body-tertiary navbarr">
    <Container fluid className='navbarr'>
      <Navbar.Brand className='nav_brand' href="#">Movies</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link>
        </Nav>
        <div className='Rating_Buttons'>
        <Button onClick={() => setRate(1)}><img src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-24.png'/>1</Button>
        <Button onClick={() => setRate(2)}><img src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-24.png'/>2</Button>
        <Button onClick={() => setRate(3)}><img src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-24.png'/>3</Button>
        <Button onClick={() => setRate(4)}><img src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-24.png'/>4</Button>
        <Button onClick={() => setRate(5)}><img src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-24.png'/>5</Button>
        <Button onClick={() => setRate(0)}>X</Button>
        </div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => search(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  );
}

export default NavBar