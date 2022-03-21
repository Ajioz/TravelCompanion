import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, useMediaQuery, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import { Rating } from '@mui/lab'
import useStyles from './styles'
// import mapStyles from './mapStyles'

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData }) => {

  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');


  return (
    <div className={classes.mapContainer} style={{margin: '65px auto 0 auto'}}>
        <GoogleMapReact 
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            // options={{disableDefaultUI:true, zoomControl: true, styles: mapStyles}}
            options={{disableDefaultUI:true, zoomControl: true}}
            onChange={ (e) => {
              setCoordinates({lat: e.center.lat, lng:e.center.lng});
              setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw }) 
            }}
            onChildClick={(child) => { setChildClicked(child)} }>

            {places?.map((place, index) => (
                <div 
                  className={classes.markerContainer}
                  lat={Number(place.latitude)}
                  lng={Number(place.longitude)}
                  key={index}>  
                  {
                    !isDesktop ? (
                        <LocationOnOutlinedIcon color="primary" fontSize='large'/>
                      ) : (
                        <Paper elevation={3} className={classes.paper}>
                            <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                {place.name}
                            </Typography>
                            <img 
                              className={classes.pointer} 
                              src= { place.photo ? place.photo.images.large.url : 'https://wwww.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                              alt={place.name}/>
                              <Rating size="small" value={Number(place.rating)} readOnly/>
                        </Paper>
                      ) 
                  }
                </div>
            ))}
            {weatherData?.list?.map((data, index) => (
              <div key={index} lat={data.coord.lat} lng={data.coord.lon}>
                <img height={90} src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={index} />          
              </div>
            ))}
        </GoogleMapReact>
    </div>
  )
}

export default Map