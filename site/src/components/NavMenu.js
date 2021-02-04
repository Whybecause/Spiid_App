import React from 'react';
import { Nav, Navbar, Row, Col , Container, FormControl, Button, Form, Image } from 'react-bootstrap';
import logo from '../assets/png/logo2.png'
import spiid from '../assets/png/spiid2.png'

const NavMenu = () => {
    return (
        <>
        <div className="w-100 bg-black">
            <Container fluid  className="text-white font-rubik "> 
                <Row>
                    <Col lg={4} xs={2} className="flex-center">
                        <Image className="w-50 p-full" src={spiid} fluid/>
                    </Col>
                    <Col lg={6} xs={10} className="flex-center">
                        <Row className="w-100 flex-between menu-item ">
                            <a className="text-white" href="/rouler">ROULER</a>
                            <a className="text-white" href="/recharger">RECHARGER</a>
                            <a className="text-white" href="approche">L'APPROCHE SPIID</a>
                            <a className="text-white" href="/blog">BLOG</a>   
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default NavMenu;