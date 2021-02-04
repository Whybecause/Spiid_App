import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';

const style = {
    width: '100%',
    height: '100%',
  }
const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '80vh',
  }

  export class SimpleMap extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      }
    }

    getVehiculePos() {
        axios.get("/api/availableVehicule", {})
        .then(res => {
            this.setState({data: res.data.vehicules})
        })
        .catch( (error) => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.getVehiculePos()
    }

    displayUserPos = () => {
      return  <Marker
      title={'You are here'}
      name={'Location'}
      position={{lat: this.props.userLat, lng: this.props.userLong}}
      onClick={ () => console.log('you are here')}
      />
    }
    displayMarkers = () => {
        return this.state.data.map((vehicule, index) => {
            return <Marker 
            key={index} 
            id={index} 
            position={{
                lat: vehicule.lat,
                lng: vehicule.long
            }}
            onClick={ () => console.log(`You clicked on vehicule ${vehicule.vehiculeNumber}`)}
            />       
        })

    }
    
    render() {
      return (
        <>
          <Map
            containerStyle={containerStyle}
            google={this.props.google}
            zoom={12}
            style={style}
            initialCenter={{ lat: this.props.userLat, lng: this.props.userLong}}
          >
            {this.displayMarkers()}
            {this.displayUserPos()}

          </Map>
          </>
      );
    }
  }

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
})(SimpleMap);


//   export const SimpleMap = (props) => {
//       return (
//         <Map
//         containerStyle={containerStyle}
//         style={style}
//           google={props.google}
//           zoom={12}
//           initialCenter={{
//            lat: props.userLat,
//            lng: props.userLong
//           }}>
//           <Marker
//               title={'Location'}
//               name={'coucou'}
//               position={{lat: props.vehiculeLat, lng: props.vehiculeLong}}
//               />
//         </Map>
//       );
//     }