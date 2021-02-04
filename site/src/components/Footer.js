import React from 'react';
import avantfooter from '../assets/png/Avant footer.png';
import fb from '../assets/png/fb.png';
import twitter from '../assets/png/twitter.png';
import insta from '../assets/png/insta.png';
import arrow1 from '../assets/png/arrow1.png';
import { Row, Col, Container, Image } from "react-bootstrap";

const Footer = () => {
    return (
        <Container fluid className="p-0 h-50vh">
        <Image className="w-100 " src={avantfooter} fluid/>
        <Row className="h-100 flex-center">
            <Col lg={3} md={6} xs={6} className="h-50">
                <h3 className="text-center">Nous suivre</h3>
                <div className="w-100 flex-center">
                    <div className="w-50 flex-between">
                        <Image src={fb} fluid/>
                        <Image src={twitter} fluid/>
                        <Image src={insta} fluid/>
                    </div>
                </div>
                <div className="h-100 flex-center">
                    <button className="flex-between w-70">
                        <div className="city-text">Lyon</div>
                        <div className="w-50 p-full">
                            <img src={arrow1} alt="arrow" />
                        </div>
                    </button>
                </div>
            </Col>
            <Col lg={3} md={6} xs={6} className="flex-col">
                <h3>Général</h3>
                <a className="a-footer p-full">Tarifs</a>
                <a className="a-footer p-full">Comment rouler avec Spiid</a>
                <a className="a-footer p-full">Actualités et presse Leadership</a>
                <a className="a-footer p-full">Carte</a>
                <a className="a-footer p-full">Sécurité</a>
            </Col>
            <Col lg={3} md={6} xs={6} className="flex-col">
                <h3>Communauté</h3>
                <a className="a-footer p-full">Commmunauté</a>
                <a className="a-footer p-full">L'approche Spiid</a>
                <a className="a-footer p-full">Devenir Spiider</a>
                <a className="a-footer p-full">Blog</a>
                <a className="a-footer p-full">Partenaires</a>
                <a className="a-footer p-full">Contact</a>
            </Col>
            <Col lg={3} md={6} xs={6} className="flex-col">
                <h3>Newsletter</h3>
                <a className="a-footer p-full">Recevez des offres spéciales et receveez nos dernières mises à jour.</a>
                <div>
                    <form>
                        <label for="email"></label>
                        <input className="small-p4" type="email" name="email" placeholder="Adresse e-mail"/>
                        <button className="button-text">OK</button>
                    </form>
                </div>
            </Col>

        </Row>

    </Container>

    )
}

export default Footer;
