import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../static/header.css'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand className='navbar-brand' href="/">Solar News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link className='nav-link' href="#">Home</Nav.Link>
            <Nav.Link className='nav-link' href="#allnews">Articles</Nav.Link>
            <NavDropdown className='navbar-toggle-icon' title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#latest-news">Latest Posts</NavDropdown.Item>
              <NavDropdown.Item href="#videos">
                Featured Videos
              </NavDropdown.Item>
              <NavDropdown.Item href="#lates-news">Trending Posts</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='nav-link' href="#">Tags</Nav.Link>
            <Nav.Link className='nav-link' href="#aboutus">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;