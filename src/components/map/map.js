import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import MapStyles from './mapStyle'

class MapGoogle extends React.Component {
  constructor(props) {
    super(props) 
    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    this.state = {
    stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
      {latitude: 47.359423, longitude: -122.021071},
      {latitude: 47.2052192687988, longitude: -121.988426208496},
      {latitude: 47.6307081, longitude: -122.1434325},
      {latitude: 47.3084488, longitude: -122.2140121},
      {latitude: 47.5524695, longitude: -122.0425407}],
    showingInfoWindow: false,
    activeMarker: {},
    selectedStore: {},
}
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedStore: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  displayMarkers() {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={this.onMarkerClick}
     icon={{
       url: './favicon.ico',
       scaledSize: new window.google.maps.Size(25, 25),
     }} />
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          styles={MapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
          onClick={this.onMapClicked}
        >
        {this.displayMarkers()}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedStore.name}</h1>
            </div>
        </InfoWindow>
        </Map>
    )
  }

}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_KEY
})(MapGoogle);
