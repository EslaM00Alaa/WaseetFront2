import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from './logo';
import "./navbar.css";

const NavBar = () => {
return (
<Navbar expand="lg" className="navbar-custom">
<Container>
<Link className='navbar-brand' to="/"><Logo/></Link>
</Container>
</Navbar>
);
};

export default NavBar;