import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Booking.css';
import Axios from 'axios';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import ReactDOM from 'react-dom';

class Booking extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slots: [],
      dateStart: '',
      dateFinish: '',
      activeStart: false,
      activeCard: [],
      isLoading: false,
    }
    this.getBooking = this.getBooking.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.showSlots = this.showSlots.bind(this)
    this.adjustDate = this.adjustDate.bind(this)
    this.adjustMonth = this.adjustMonth.bind(this)
    this.adjustDateShow = this.adjustDateShow.bind(this)
    this.activeCard = this.activeCard.bind(this)
  }

  componentDidMount() {
    this.setState({isLoading: true})
    this.getBooking()
  }

  getBooking() {
    const { params } = this.props.match    
    Axios.get(`https://projfinal-dev.herokuapp.com/api/booking/search/${params.id}`)
      .then(response => {
        this.setState({slots: response.data, isLoading: false}, () => this.setActive())
      })
      .catch(err => console.log(err))    
  }

  setActive() {
    this.setState({activeStart: true})
  }

  onChangeHandler(e)  {
    let { name, value, type, checked } = e.target;
    value = (type==="checkbox")?checked:value;
    console.log(value);
    
    this.setState({ [name]: value })
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

  adjustDate(date) {    
    let dateArr = date.split(' ');
    return dateArr[3] + "-" + this.adjustMonth(dateArr[1]) + "-" + dateArr[2]
  }

  adjustDate(date) {    
    let dateArr = date.split(' ');
    return dateArr[3] + "-" + this.adjustMonth(dateArr[1]) + "-" + dateArr[2]
  }

  adjustDateShow(date) {
    let dateArr = date.split(' ');
    return this.adjustMonth(dateArr[1]) + "-" + dateArr[2]  + "-" + dateArr[3]
  }

  activeCard(e, idx) {    
    (this.state.activeStart) ? (this.setState({activeStart: !this.state.activeStart})) : this.setState({activeStart: !this.state.activeStart})

  }

  activateCard(idx) {
    let el = document.getElementsById(`${idx}`)
  }

  showSlots() {
    let dateToday = new Date()
    let dateTodayAdj = dateToday.toString();
    
    let dateTodayNew = new Date(this.adjustDate(dateTodayAdj)+"GMT-0000")
    return this.state.slots.map((slot, idx) => {      
      let dateStartAdj = slot.dateStart.toString();
      let dateStartNew = new Date(this.adjustDate(dateStartAdj)+"GMT-0000")
      let activeStartCopy = this.state.activeCard
      if (dateStartNew >= dateTodayNew) { 
        return (
          <div key={idx} className={(this.state.activeStart) ? "booking-card" : "booking-card active-card"} id={idx} onClick={(e, idx) => this.activeCard(e, idx)}>
            <h1 className="booking-title">{this.adjustDateShow(dateStartAdj)}</h1>
            <div className="booking-content">
              <span>{slot.usersBooked.length + '/'}</span>
              <span>{slot.house.maxBooking}</span>
            </div>
          </div>
        )
      }
    })    
  }



render() {
  return(
    (!this.state.isLoading && this.state.slots !== []) ? (
      <div className="booking-container">{this.showSlots()}</div>        
    ) : (
      <div className="house-loading">
        <Loader className="house-loader" type="Plane" color="#FB5D30" height={100} width={100}/>
      </div>  
    )
    )
  }
}

export default Booking