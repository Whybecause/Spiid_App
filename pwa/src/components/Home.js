import React, { useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { getCurrentUser } from '../services/authService';
import GoogleApiWrapper from './Map';
import QrScan from './QrScan';
import scan1 from '../assets/scan1.png';

function Home() {
  const [ currentUser, setCurrentUser ] = React.useState([]);
  const [ userLat, setUserLat ] = React.useState('');
  const [ userLong, setUserLong ] = React.useState('');
  const [ showScanner, setShowScanner ] = React.useState(false);
  
  const handleScanner = () => {
    setShowScanner(!showScanner);
  }



  useEffect(() => {
    getCurrentUser(setCurrentUser)
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserLat(position.coords.latitude)
      setUserLong(position.coords.longitude)
      console.log("Latitude is:", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }, []);
  
  if (!currentUser) {
    return <Redirect to ="/login" />
  }

  return (

    <div className="App">
      <GoogleApiWrapper
      userLat={userLat}
      userLong={userLong}
      />
      <header className="">
        <button className="" onClick={handleScanner}>
        <img className="" src={scan1} />
        </button>
        {showScanner && (
          <QrScan/>
        )}
      </header>

    </div>
  );
}

export default Home;
