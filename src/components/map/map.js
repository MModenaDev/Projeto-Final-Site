import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import MapStyles from './mapStyle'
import Loader from 'react-loader-spinner'

class MapGoogle extends React.Component {
  constructor(props) {
    super(props) 
    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    this.state = {
      stores: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedStore: {},
      mapCenter: {},
      isLoading: false,
}
    let mapCenter = {};
    this.displayMarkers = this.displayMarkers.bind(this)
    this.calcCenter = this.calcCenter.bind(this)
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onMapClicked = this.onMapClicked.bind(this)
}

  componentDidMount() {
    this.setState({isLoading: true})
    this.calcCenter();
  
  }

  componentDidUpdate() {
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedStore: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
 
  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  calcCenter() {
    if(this.props.city === "SaoPaulo"){
      this.mapCenter = {lng: -46.632892, lat: -23.550957}    
    } else if (this.props.city === "Bangkok"){
      this.mapCenter = {lng: 100.592528, lat: 13.769269}    
    } else if (this.props.city === "Budapest"){
      this.mapCenter = {lng: 19.076159, lat: 47.498821}    
    } else if (this.props.city === "Taipei"){
      this.mapCenter = {lng: 121.472191, lat: 25.058235}    
    }
    this.setState({isLoading: false})
  }

  displayMarkers() {    
    return this.props.houses.map((house, index) => {
      return <Marker key={index} id={index} position={{
       lat: house.location.coordinates[1],
       lng: house.location.coordinates[0],
     }}
     onClick={this.onMarkerClick}
     icon={{
       url: '/images/wander-icon.svg',
       scaledSize: new window.google.maps.Size(25, 25),
     }} 
     />
    })
  }

  render() {    
    return (
      (!this.state.isLoading)?(
        <Map
          google={this.props.google}
          zoom={12}
          styles={MapStyles}
          center={this.mapCenter}
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
      ):(
        <div className="house-loading">
          <Loader className="house-loader" type="Plane" color="#FB5D30" height={100} width={100}/>
        </div>  
      )
    )
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB36sT0tIu-0uCfJR1zWHsD8Ku1d5mKLrA'
})(MapGoogle);
