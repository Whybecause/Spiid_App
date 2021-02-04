import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from '../services/fetcher';
import axios from 'axios';
import { endRental } from '../services/rentalAPI';

function User() {
  //On récupère toutes les locations effectuées par l'user
  const getUserRentals = async () => {
    await axios.get(`/api/rental/${id}`)
    .then( (res) => setUserRentals(res.data.rentals))
    .catch( (err) => console.log(err));
  }

  const [ userRentals, setUserRentals ] = React.useState([]);
  const [ newLat, setNewLat ] = React.useState('')
  const [ newLong, setNewLong ] = React.useState('')

  React.useEffect(() => {
    getUserRentals()
    navigator.geolocation.getCurrentPosition(function (position) {
      setNewLat(position.coords.latitude)
      setNewLong(position.coords.longitude)
      // console.log("Latitude is:", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);
    });
  }, []);

  const handleEndRental = () => {
    endRental(newLat, newLong)
    .then( (res) => {
      window.location.reload();
    })
    .catch( (err) => console.log(err));
  }

  //On récupère la location en cours
  const { id } = useParams();
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
    <div className="App">
      <div className="min-h-40  p-top-3">

      <h2 className="h-10vh">Mes courses</h2>
      {!data.user.rentals[0].isFinished ? (
        <>
        <h3>Location en cours</h3>
        <p>Commencée le {data.user.rentals[0].createdDate}</p>
        <p>Vous utilisez le véhicule n° {data.user.vehicules[0].vehiculeNumber}</p>
        <div className="flex-center border-bottom p-full">
        <button className=" c-button w-50 d-flex align-items-center justify-content-center" onClick={ () => handleEndRental()}>Terminer la location</button>
        </div>
      </>
      ) : (
        <h3>Vous n'avez pas de location en cours</h3>
      )}
        </div>

      {userRentals !== undefined ? (
        <>
        <h3 className="p-top-3">Historique de vos locations ({userRentals.length})</h3>
        {userRentals.map( (rental) => (
          <div key={rental._id}>
        <p>Location effectuée le {rental.createdDate} sur le véhicule {rental.vehicule[0].vehiculeNumber}</p>
        </div>
        ))}
        </>
        ) : (
          <h3>Vous n'avez pas encore effectué de locations</h3>
        )}
    </div>
    </>
  );
}

export default User;
