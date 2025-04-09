import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import Card from './Card';
import CartPageApp from './CartPageApp';

export default function Homepage() {
  return (
    <div className='container text-center'>
    
        <Navbar bg="light" data-bs-theme="light">
            
            <Nav className="me-auto">
                <Nav.Link href="#home"> Home </Nav.Link>
                <Nav.Link as = {Link} to = './CartPageApps'> Cart </Nav.Link>
            </Nav>

        </Navbar>

        <Card />





    </div>
  )
}


// Tasks 
// 1. Create a navbarcomponent

// import { Link } from 'react-router-dom';

// <Nav.Link as={Link} to="/cart">Cart</Nav.Link>

// import CartPage from './CartPage';

// <Route path="/cart" element={<CartPage />} />

