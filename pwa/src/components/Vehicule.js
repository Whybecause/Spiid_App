import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVehicule } from "../services/vehiculeAPI";
import { rentVehicule } from "../services/rentalAPI";
import { getCurrentUser } from '../services/authService';
import { Redirect } from 'react-router-dom';

const Vehicule = () => {
  useEffect(() => {
   getCurrentUser(setCurrentUser)
     getVehicule(id)
     .then( (result) => {
       setVehicule(result.vehicule)
       setMessage(result.message)
     })
       .catch( (error) =>{
         console.log(error);
       })
   }, []);

  const { id } = useParams();
  const [ currentUser, setCurrentUser ] = React.useState([]);
  const [vehicule, setVehicule] = useState([]);
  const [message, setMessage] = useState(undefined);
  const [ redirect, setRedirect ] = useState(false);
  if (redirect) return <Redirect to={`/user/${currentUser.id}`} />

  const handleRental = () => {
    rentVehicule(id)
    .then( (res) => {
      setRedirect(true)
    })
    .catch( (err) => console.log(err));
  }

  return (
    <>
    <div className="p-top-8">

      {vehicule && (
        <div>
          <p>Vous avez choisi la trottinette n°{vehicule.vehiculeNumber}</p>
          {vehicule.available ? (
            <>
              <p>Ce vehicule est disponible</p>
              <div className="flex-center">
                <div className="w-50">
              <button className="text-black c-button2 w-100 d-flex align-items-center justify-content-center"
              onClick={ () => handleRental()}>Confirmer la location</button>
              </div>

              </div>
            </>
          ) : (
            <p>Ce véhicule est indisponible pour le moment</p>
            )}
        </div>
      )}
      {message && (
        <p>{message}</p>
        )}
        </div>
    </>
  );
};

export default Vehicule;
