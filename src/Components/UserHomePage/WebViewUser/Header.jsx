import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import './Header.css'

const Header = () => {
  return (
    <>
    
 
  <Navbar bg="light" variant="light">
    <Container >

     <div className='containerNavBar1'> 
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
     
    </Nav>
    </div>
    </Container>
  </Navbar>
  
  <Navbar bg="dark" variant="light" className='secondNavbar2'>
    <Container >

     <div className='containerNavBar2'> 
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
     
     
    </Nav>
    </div>
    </Container>
  </Navbar> 
</>
 
  )
}

export default Header