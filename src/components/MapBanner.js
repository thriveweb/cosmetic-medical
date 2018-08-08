import React from 'react'

import GoogleMap from './GoogleMap'
import './MapBanner.css'

const mapStyle = `[
    {
        "stylers": [
            {
                "hue": "#ff1a00"
            },
            {
                "invert_lightness": true
            },
            {
                "saturation": -100
            },
            {
                "lightness": 33
            },
            {
                "gamma": 0.5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4a516d"
            }
        ]
    }
]`

export default ({ lat, lng, apiKey, id }) => (
  <div className='MapBanner relative' id={id}>
    <GoogleMap
      apiKey={apiKey}
      lat={parseFloat(lat)}
      lng={parseFloat(lng)}
      styles={mapStyle}
      zoom={15}
      icon='/images/mapMarker.svg'
      disableDefaultUI
    />
    <div className='MapBanner--Overlay' />
  </div>
)
