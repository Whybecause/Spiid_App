import React from "react";
import { Player } from 'video-react';
import apple from "../assets/png/apple.png";
import googleplay from "../assets/png/googleplay.png";
import background1 from '../assets/png/£2.png';
import map1 from '../assets/png/map1.png'
import habitant1 from '../assets/png/habitant1.png';
import habitant2 from '../assets/png/habitant2.png';
import habitant3 from '../assets/png/habitant3.png';
import Mask1 from '../assets/png/Mask1.png';
import Mask2 from '../assets/png/Mask2.png';
import Mask3 from '../assets/png/Mask3.png';
import Mask4 from '../assets/png/Mask4.png';
import Mask5 from '../assets/png/Mask5.png';
import Mask6 from '../assets/png/Mask6.png';
import spotVideo from '../assets/video/SPOT SITE.mp4';

import header1 from '../assets/png/header1.png';
import v21 from '../assets/png/V21.png';
import Scanner1 from '../assets/png/Scanner1.png';

import { Row, Col, Container, Image } from "react-bootstrap";

const Home = () => {
  return (
      <>
    <Container className="" fluid>
    <Row className="h-100">
        <Col lg={7} xs={12} className="d-flex w-100">
            <div className="flex-center p-full">
                <div className=" header-width ">
                    <Col>
                        <h1 className="">Déplacez-Vous Sans Limite</h1>
                        <p>Et si le fait de réinventer vos déplacements pouvait 
                        avoir un énorme impact sur l'avenir de votre ville?
                        </p>
                        <Col className="flex-between ">
            
                            <div className="store-rectangle w-48 d-flex">
                                <div className="flex-center w-30">
                                    <img className="store-logo" src={apple} alt="Logo Apple" />
                                </div>
                                <div className="w-70">
                                    <div className="small-p1">AVAILABLE ON THE </div>
                                    <div className="small-p2">App Store</div>
                                </div>
                            </div>
                            <div className="store-rectangle w-48 d-flex">
                                <div className="flex-center w-30">
                                    <img className="store-logo" src={googleplay} alt="Logo Apple" />
                                </div>
                                <div className="w-70">
                                    <div className="small-p1">GET IT ON </div>
                                    <div className="small-p2">Google Play</div>
                                </div>
                            </div>
                        </Col>
                    </Col>
                </div>    
            </div>
        </Col>
        <Col><Image className="w-100" src={header1} fluid/></Col>
    </Row>
    
    </Container>
    <Container fluid>
    <Row>
            <Col lg={6} md={6} xs={12}>
            <Image className="w-50" src={Scanner1} fluid/>
            <Image className="w-50" src={v21} fluid/>
            </Col>
            <Col lg={6} md={6} xs={12} className="flex-center">
                <div className="resp-w-text2">
                    <h2>Réinventer la mobilité intelligente</h2>
                    <p>The harder you work for something, the greater you'll feel when you achieve it.</p>
                        <button>
                            <div className="button-text">EN SAVOIR PLUS</div>
                        </button>
                </div>
            </Col>
    </Row>




        <Row>
            <Col lg={12} className="p-0">
                <Image className="w-100" src={background1} fluid/>
                <h2 className="text-on-img d-flex text-white">Trouvez une SPIID à proximité</h2>
            </Col>
        </Row>
        <Row className="h-50vh p-top-1">
            <Col lg={3} xs={6}>
                <div className="h-100 flex-col">
                    <h3>ETAPE 1</h3>    
                    <p className="flex-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames magna ac porta.</p>
                </div>
            </Col>
            <Col lg={3} xs={6}>
                <div className="h-100 flex-col">
                    <h3>ETAPE 2</h3>    
                    <p className="flex-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames magna ac porta.</p>
                </div>
            </Col>
            <Col lg={3} xs={6}>
                <div className="h-100 flex-col">
                    <h3>ETAPE 3</h3>    
                    <p className="flex-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames magna ac porta.</p>
                </div>
            </Col>
            <Col lg={3} xs={6}>
                <div className="h-100 flex-col">
                    <h3>ETAPE 4</h3>    
                    <p className="flex-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames magna ac porta.</p>
                </div>
            </Col>
            <div className="w-100">
                <div className="align-right w-90">
                    <a className="read-more ">POUR EN SAVOIR PLUS --> </a>
                </div>
            </div>
        </Row>
    </Container>
    <Container fluid className="p-0">
        <Row className="w-100">
            <Col lg={6} md={12} xs={12} className="p-0">
                <Image className="w-100" src={map1} fluid/>
            </Col>
            <Col lg={6} md={12} xs={12} className="bg-yellow p-0 flex-center">
                <div className="w-80 text-center ">
                    <h2>Où nous trouver</h2>
                    <div className="small-p3">Lorem isum dolor sit amet, consectetur adipiscing elit. Velit proin nec egestas eu fermentum eleifend. Ipsum magnis ultrices volutpat rutrum in convallis. Tristique etiam consectetur eu sapien vestibulum, eget. Orci aliquet sit nulla amet facilisis est. Neque elementum, dui ut ac at. Eget posuere erat dui neque, odio ut.
                    </div>
            <div className="w-100">
                <div className="align-right w-90">
                    <a href="/map" className="read-more ">POUR EN SAVOIR PLUS --> </a>
                </div>
            </div>
                </div>
            </Col>
        </Row>
    </Container>
    <Container fluid className="p-top-5">
        <Row className="flex-center">
            <h2>Dites bonjour aux SPIID et au revoir aux bruits !</h2>
        </Row>
        <Row className="flex-center">
            <Row className="w-70 flex-between">
                <Col lg={4} md={12} xs={12}>
                    <Image className="w-100" src={habitant1} fluid/>
                    <div className="flex-col">
                        <h4>Habitant.</h4>
                        <p>The harder you work for something, the greater you'll feel when you achieve it.</p>
                    </div>
                </Col>
                <Col lg={4} md={12} xs={12}>
                <Image className="w-100" src={habitant2} fluid/>
                <div className="flex-col">
                        <h4>Habitant.</h4>
                        <p>The harder you work for something, the greater you'll feel when you achieve it.</p>
                    </div>
                </Col>
                <Col lg={4} md={12} xs={12}>
                <Image className="w-100" src={habitant3} fluid/>
                <div className="flex-col">
                        <h4>Habitant.</h4>
                        <p>The harder you work for something, the greater you'll feel when you achieve it.</p>
                    </div>
                </Col>
            </Row>
        </Row>
    </Container>

    <Container>
        <Row className="">
            <Col lg={6} md={12} xs={12} className="flex-center"> 
            <div className="w-80">
                <h5>Pourquoi devenir SPIIDER ?</h5>
                <Row className="p-top-5">
                    <Col lg={2} className="flex-center">
                        <img src={Mask1} alt="Star" />
                    </Col>
                    <Col lg={10} className="p-0">
                        <h6>Maitrisez votre emploi du temps.</h6>
                        <div className="p-0 small-p4">Microsoft Patch Management For Home USers</div>
                    </Col>
                </Row>
                <Row className="p-top-5">
                    <Col lg={2} className="flex-center">
                        <img src={Mask2} alt="Star" />
                    </Col>
                    <Col lg={10} className="p-0">
                        <h6>Bénéficiez de paiement rapides.</h6>
                        <div className="p-0 small-p4">An Ugly Myspace Profile Will Sure Ruin Your Reputation</div>
                    </Col>
                </Row>
                <Row className="p-top-5">
                    <Col lg={2} className="flex-center">
                        <img src={Mask3} alt="Star" />
                    </Col>
                    <Col lg={10} className="p-0">
                        <h6>Faites partie de la communauté.</h6>
                        <div className="p-0 small-p4">Microsoft Patch Management For Home USers</div>
                    </Col>
                </Row>
            </div>
            </Col>
            <Col lg={6} md={12} xs={12} className="p-full">
                <Player
                playsInline
                src={spotVideo}
                />
            </Col>
        <Row className="w-100 p-top-5">
            <Col lg={6} md={12} xs={12} className="p-0">
                <Image className="w-100 h-100" src={map1} fluid/>
            </Col>
            <Col lg={6} md={12} xs={12} className="bg-yellow p-0 flex-center">
                <div className="w-80 text-center ">
                    <h2 className="p-top-1">Pourquoi devenir SPIIDER</h2>
                    <Row className="p-top-5">
                    <Col lg={3} className="flex-center">
                        <img src={Mask4} alt="Star" />
                    </Col>
                    <Col lg={6} className="p-0">
                        <h6 className="p-top-1">Maitrisez votre emploi du temps.</h6>
                        <div className="p-0 small-p4 text-center">Microsoft Patch Management For Home USers</div>
                    </Col>
                </Row>
                <Row className="p-top-5">
                    <Col lg={3} className="flex-center">
                        <img src={Mask5} alt="Star" />
                    </Col>
                    <Col lg={6} className="p-0">
                        <h6 className="p-top-1">Bénéficiez de paiement rapides.</h6>
                        <div className="p-0 small-p4 text-center">An Ugly Myspace Profile Will Sure Ruin Your Reputation</div>
                    </Col>
                </Row>
                <Row className="p-top-5">
                    <Col lg={3} className="flex-center">
                        <img src={Mask6} alt="Star" />
                    </Col>
                    <Col lg={6} className="p-0">
                        <h6 className="p-top-1">Faites partie de la communauté.</h6>
                        <div className="p-0 small-p4 text-center">Microsoft Patch Management For Home USers</div>
                    </Col>
                </Row>

            <div className="w-100">
                <div className="align-right w-90">
                    <a href="/map" className="read-more ">POUR EN SAVOIR PLUS --> </a>
                </div>
            </div>
                </div>
            </Col>
        </Row>
        </Row>
    </Container>
    </>
  );
};
export default Home;
