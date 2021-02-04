import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { getCurrentUser, logout } from '../services/authService';
import spiid from '../assets/spiid2.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'

function NavMenu() {
  const [ currentUser, setCurrentUser ] = React.useState(undefined);

  React.useEffect( () => {
    getCurrentUser(setCurrentUser)
  }, [])


    return (
        <>
     <Navbar className='bg-black p-0'  variant="dark" expand="lg">
          <Navbar.Toggle className="burger" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="mr-auto bg-white p-full ">
                  {currentUser && (
                    <>
                    <Nav.Link className="text-black font-big1 p-full2 border-bottom" >Bonjour <strong>{currentUser.name}</strong></Nav.Link>
                    <Nav.Link className="text-black font-small1 p-full2 border-bottom" href="/#"><img src={icon1} alt="icon"/>SPIIDER
                    </Nav.Link>
                    <Nav.Link className="text-black font-small1 p-full2 border-bottom" href="/#"><img src={icon2} alt="icon"/>Code Promo</Nav.Link>
                    <Nav.Link className="text-black font-small1 p-full2 border-bottom" href="/#"><img src={icon3} alt="icon"/>Paiement</Nav.Link>
                    <Nav.Link className="text-black font-small1 p-full2 border-bottom" href="/#"><img src={icon4} alt="icon"/>Aide</Nav.Link>
                    <Nav.Link className="text-black font-small1 p-full2 border-bottom"  href={`/user/${currentUser.id}`}><img src={icon5} alt="icon"/>Historique</Nav.Link>
                    <Nav.Link className="text-black font-small1 p-full2 border-bottom" href="/#" ><img src={icon6} alt="icon"/>Paramètres</Nav.Link>
                    <Nav.Link className="text-black font-small1 p-full2 border-bottom text-center" href="/logout" onClick={logout}><button onClick={logout} className="btn btn-danger">Déconnexion</button></Nav.Link>
                    </>

                  )}
                  {!currentUser && (
                    <>
                    <Nav.Link className="text-black font-small1 border-bottom" href="/login">Login</Nav.Link>
                    <Nav.Link className="text-black font-small1 border-bottom" href="/register">Register</Nav.Link>
                    </>
                  )}
              </Nav>
          </Navbar.Collapse>
          <Navbar.Brand className=" ml-auto" href="/"><img src={spiid} alt="Spiid" /></Navbar.Brand>
     </Navbar>

        </>
    )
}

export default NavMenu;