import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react'

// Change style here
const mapStyles = {
    width: '100%',
    height: '500px',
    "ßoverflow-x": 'visible'
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
            zoom={3}
            style={mapStyles}
            initialCenter={markers.grandprairie}

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