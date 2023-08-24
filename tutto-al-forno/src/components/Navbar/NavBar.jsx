import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';







const NavBar = () =>{ 
    return ( 
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> Tutto
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
       
          <Nav className="me-auto">
            <Nav.Link href="#features">Menús</Nav.Link>
            <Nav.Link href="#pricing">Mi pedido</Nav.Link>
            <NavDropdown title="Más" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Esta semana</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Favoritos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sobre Nosotros</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            
            <Nav.Link href="#deets">
            <CartWidget /> 
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             102
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )}

  export default NavBar