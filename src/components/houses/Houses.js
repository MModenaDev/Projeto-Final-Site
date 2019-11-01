import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Houses.css';
import NavbarLog from '../navbar/NavbarLog';
import Axios from 'axios';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Link } from 'react-router-dom'


class Houses extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      house: {images: []},
      bgImg: '/images/places.png',
      canRender: false,
      dateStartInput: '',
      dateFinishInput: '',
      slots: [],
      loadSlots: false,
    }

    this.id = this.props.match.params.id
    this.bgImg = '/images/places.png'
    this.getHouse = this.getHouse.bind(this)
    this.arrayOfImages = []
    this.bgImage = this.bgImage.bind(this)
    this.setSlots = this.setSlots.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.updateBooking = this.updateBooking.bind(this)
  }

  componentDidMount(){

    this.getHouse();
    // this.state.house.images.forEach(image => { 
    //   console.log(image);      
    //   this.arrayOfImages.push(`url(https://res.cloudinary.com/gtmori/image/upload/v1572468634/${image.public_id}.png)`)
    // })

  }

  getHouse() {
    this.setState({isLoading: true})
    Axios.get(`${process.env.REACT_APP_API_URL}/house/${this.id}`)
      .then(response => {
        this.setState({house: response.data, isLoading: false}, () => this.bgImage())
      })
      .catch(err => console.log(err))
  }

  adjustMonth(month) {    
    switch (month) {
      case 'Jan':
        return '01'
      case 'Feb':
        return '02'
      case 'Mar':
        return '03'
      case 'Apr':
        return '04'
      case 'May':
        return '05'
      case 'Jun':
        return '06'
      case 'Jul':
        return '07'
      case 'Aug':
        return '08'
      case 'Sep':
        return '09'
      case 'Oct':
        return '10'
      case 'Nov':
        return '11'
      case 'Dec':
        return '12'  
      }    
  }

  adjustDateShow(date) {
    let dateArr = date.split(' ');
    return this.adjustMonth(dateArr[1]) + "-" + dateArr[2]  + "-" + dateArr[3]
  }

  // bgImage() {
  //   if (this.state.house.images.length === 0) {
  //     return {backgroundImage: 'url(/images/places.png)'}
  //   } else {
  //     return {backgroundImage: `url(https://res.cloudinary.com/gtmori/image/upload/v1572468634/${this.state.house.images[0].public_id}.png)`}
  //   }
  // }

  bgImage() {
    this.state.house.images.forEach((image, idx) => {
      this.arrayOfImages.push(`https://res.cloudinary.com/gtmori/image/upload/v1572468634/${image.public_id}.png`)
      if (idx === this.state.house.images.length - 1) {
        this.setState({
          bgImg: this.arrayOfImages[0],
          canRender: true
        })
      } 
    })
  }

  setSlots() {
    this.setState({loadSlots: true})
  }

  getBookings(e) {
    this.setState({isLoading: true})
    Axios.get(`${process.env.REACT_APP_API_URL}/booking/search/${this.id}?dateStart=${this.state.dateStartInput}&dateFinish=${this.state.dateFinishInput}`)
      .then(response => {
        console.log(response);
        this.setState({slots: response.data, isLoading: false}, () => this.setSlots())
      })
      .catch(err => console.log(err))
  }

  updateBooking(e) {

  }

  showBookings() {
    // this.setState({loadSlots: false})
    return this.state.slots.map((slot, idx) => {      
      return (
        <div key={idx} className="booking-card" id={idx}>
          <h1 className="booking-title">{this.adjustDateShow(slot.dateStart)}</h1>
          <div className="booking-content">
            <span>{slot.usersBooked.length + '/'}</span>
            <span>{slot.house.maxBooking}</span>
          </div>
        </div>
        )
      })
  }

  handleImgActive = (e) => {
    console.log(e.target);
    this.setState({bgImg: e.target.src});

    let allImgs = document.querySelectorAll('.house__side-images--img');
    allImgs.forEach((el) => {
      el.classList.remove("house__side-images--img-active");
    })

    e.target.classList.add("house__side-images--img-active");
  }

  onChangeHandler(e)  {
    let { name, value, type, checked } = e.target;
    value = (type==="checkbox")?checked:value;
    console.log(value);    
    this.setState({ [name]: value })
} 

  render(){
    // let arrayOfImages = [
    //   "https://christchurch.crowneplaza.com/wp-content/uploads/sites/10/2017/03/Deluxe-Room.jpg",
    //   "http://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/148/2018/02/14062901/Rooms_Suites-Introduction-OneBR.jpg",
    //   "https://q-cf.bstatic.com/images/hotel/max1024x768/111/111929367.jpg",
    //   "https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/indian-springs-calistoga/media/indiansprings-header-theviewrooms-5c4ba99cb73c7.jpg"
    // ]
    
    return(
      (!this.state.isLoading)?(
        <Fragment>
        <NavbarLog />
        <div className="container-fluid">
          <div className="row house-page">
            <div className="col-12 col-md-6 p-0" >
              <div className="row">
                {/* <div className="col-12 left-side p-0" style={this.bgImage()}> */}
                <div className="col-12 left-side p-0" style={{backgroundImage: `url(${this.state.bgImg})`}}>
                  <div className="row house-info1">
                    
                    <div className="house__side-images">
                      {(this.state.canRender)
                      ? this.arrayOfImages.map((item, index) => {                        
                        return (
                        <img className="house__side-images--img" src={item} alt="" key={index} onClick={(e) => this.handleImgActive(e)}/>
                      )})
                      :null}
                    </div>

                    <div className="col-12 d-flex align-items-end">
                      <div className="row house-info">
                        <div className="col-12 house-title">{this.state.house.name}</div>
                        <div className="col-10 house-address">{this.state.house.adress}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                  <Link to={`/profile`} className="col-12 d-flex justify-content-center book-room align-items-center">
                    <span onClick={(e) => this.updateBooking(e)}>RESERVAR QUARTO</span>
                  </Link>
              </div>

            </div>
            <div className="col-12 col-md-6 right-side">
              <div className="row d-flex justify-content-center">
                <div className="col-6 flex-column text-center">
                  <label className="booking_titles mr-3" for="dateStart">Date Start:</label>
                  <input className="booking_inputs" type="date" name="dateStartInput" placeholder="YYYY/MM/DD" value={this.state.dateStart} onChange={(e) => this.onChangeHandler(e)}/>
                
                  <label className="booking_titles mr-3" for="dateFinish">Date Finish:</label>
                  <input className="booking_inputs" type="date" name="dateFinishInput" placeholder="YYYY/MM/DD" value={this.state.dateFinish} onChange={(e) => this.onChangeHandler(e)}/>
                  <button className="btn btn-search-booking" onClick={(e) => this.getBookings(e)}>Search</button>
                </div>
                
                <div className="booking-container">
                  {this.showBookings()}
                </div>
              </div>
            </div>
          </div>
        </div>

      </Fragment>
      ):(
        <div className="house-loading">
          <Loader className="house-loader" type="Plane" color="#FB5D30" height={100} width={100}/>
        </div>  
      )
    )
}}

export default Houses