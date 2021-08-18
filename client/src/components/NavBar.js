import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';


function NavBar({pages, setPage}) {
  return (
     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
     <Container>
     {/* <Navbar.Brand href="#home"><h2>The Garage Sale</h2></Navbar.Brand> */}
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="me-auto">
         <Nav.Link onClick={()=>setPage(pages[0])}>Home</Nav.Link>
         <Nav.Link onClick={()=>setPage(pages[1])}>My Garage</Nav.Link>
         <Nav.Link onClick={()=>setPage(pages[2])}>Garage Sale</Nav.Link>
         <Nav.Link onClick={()=>setPage(pages[3])}>Shopping Cart</Nav.Link>
         <Nav.Link onClick={()=>setPage(pages[4])}>Log Off</Nav.Link>
         {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
         </NavDropdown> */}
       </Nav>
       <Nav>
      
       </Nav>
     </Navbar.Collapse>
     </Container>
   </Navbar>


);
}

export default NavBar;




