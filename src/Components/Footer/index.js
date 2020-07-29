import React from 'react';
import {Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

function Footer () {
    return (
                <Navbar collapseOnSelect expand="lg" fixed="bottom"  bg="dark" variant="dark">
                    <Nav>
                    <Nav.Link href="tel:650.995.6084" >Mobile: +1 (650) 995 6084</Nav.Link>
                    <Nav.Link href="mailto://tanujjain2015@gmail.com">tanujjain2015@gmail.com</Nav.Link>
                    <Nav.Link href="https://tanujjain2015.github.io/portfolio/" >Github: tanujjain2015.github.io</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/jaintanuj/">LinkedIn Profile </Nav.Link>
                    </Nav>

                </Navbar>
            
    )
}

export default Footer;
