import React from 'react';
import {Navbar} from 'react-bootstrap'

const TopNavbar = () => {
    return (
        <div>
            <section>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Comapany Logo</Navbar.Brand>
            </Navbar>
            </section>
        </div>
    );
};

export default TopNavbar;