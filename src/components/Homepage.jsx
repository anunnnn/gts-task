import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from './Card';

export default function Homepage() {
  return (
    <div className='container text-center'>
    
        <Navbar bg="light" data-bs-theme="light">
            
            <Nav className="me-auto">
                <Nav.Link href="#home"> Home </Nav.Link>
                <Nav.Link href="#features"> Cart </Nav.Link>
                <Nav.Link href="#pricing"> Pricing </Nav.Link>
            </Nav>

        </Navbar>

        <Card />





    </div>
  )
}


// Tasks 
// 1. Create a navbarcomponent