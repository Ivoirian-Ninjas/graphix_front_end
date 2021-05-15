import React from 'react'

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

function MyMap(props) {


    const markers ={
        abidjan: {
            lat: 5.345317,
            lng: -4.024429,
           
        },
        grandprairie: {
            lat: 32.738773,
            lng: -97.003098,
          
        }
    }

  
    return (
        
         <Map 
            google={props.google} 
            zoom={8} 
            initialCenter={{
                lat: markers.grandprairie.lat,
                lng: markers.grandprairie.lng
            }}
         
         >
        <Marker
            name={'Abidjan'}
            position={markers.abidjan} />
        <Marker
            name={'Grand Prairie'}
            position={markers.grandprairie} />
        </Map>
             
       
       
    )
    }
    export default GoogleApiWrapper({
        apiKey: (process.env.REACT_APP_GOOGLE_MAP_API_KEY)
      })(MyMap)