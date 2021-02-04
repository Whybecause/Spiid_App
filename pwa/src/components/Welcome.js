import React from 'react';
import welcome from '../assets/welcome.png';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Welcome ()  {
    return (
        <Container fluid className="h-100">
            <Row className="flex-center bg-white">
                <div className="">
                <Image className="" src={welcome} alt='welcome' fluid/>
                </div>
            </Row>
            <Row className="p-top-15 flex-center">
                    <h2 >Spiid vous ammène où vous voulez !</h2>
                    <a href="/login"
                        className="text-black c-button2 w-50 p-full d-flex align-items-center justify-content-center">
                        <span>Se connecter</span>
                    </a>
                    <a href="/register"
                        className="text-black c-button3 w-50 d-flex align-items-center justify-content-center">
                        <span>S'inscire</span>
                    </a>
            </Row>


        </Container>
    )
}

export default Welcome;