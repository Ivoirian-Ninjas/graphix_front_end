import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react'

// Change style here
const mapStyles = {
    width: '100%',
    height: '500px',
    "overflow-x": 'hidden',
    position:'absolute',
  };


  const markers ={
    abidjan: {
        lat: 5.34,
        lng: -4.02,
       
    },
    grandprairie: {
        lat: 32.73,
        lng: -97.00,
      
    }
  }
 class MapContainer extends Component {
    render() {
        return (
            // Avoid having overflow-x: hidden on the map
            <Map
            google={this.props.google}
            zoom={4}
            style={mapStyles}
            initialCenter={{lat: 20.73, lng: -30.00}}
            className={`Saas`}
          >

            <Marker position={markers.abidjan}/>

            <Marker position={markers.grandprairie}/>  
   
        </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
  })(MapContainer);