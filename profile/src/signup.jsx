

import './App.scss';
import React, { Component } from 'react';
//import axios from 'axios';
import {userActions} from '../actions';


//const url = `http://192.168.0.89:8080/user/register`

class Signup extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      email: '',
      phone: '',
      otp: ''

    }
    this.Username = this.Username.bind(this);
    this.Password = this.Password.bind(this);
    this.Email = this.Email.bind(this);
    this.Phone = this.Phone.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.Otp = this.Otp.bind(this);
    this.handleOTP = this.handleOTP.bind(this);
  }
  Username(event) {

    this.setState({ name: event.target.value })
  }
  Password(event) {
    this.setState({ password: event.target.value })
  }
  Email(event) {
    this.setState({ email: event.target.value })
  }
  Phone(event) {
    this.setState({ phone: event.target.value })
  }
  Otp(event) {
    this.setState({ otp: event.target.value })
  }


  handleSubmit(event){
    event.preventDefault();
    const {user } =this.state;
    this.props.register(user);
  }

  // async handleOTP(event) {
  //   event.preventDefault()
  //   let newotp = {
  //     phone: this.state.phone,
  //     otp: this.state.otp
  //   }
  //   await axios.post(`http://192.168.0.89:9229/user/register`, newotp, {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((response) => {
  //     console.log(response);
  //   })

  // }

  // async handleSubmit(event) {
  //   event.preventDefault()

  //   let data = {
  //     name: this.state.name,
  //     password: this.state.password,
  //     email: this.state.email,
  //     phone: this.state.phone,


  //   }
  //   await axios.post(`http://192.168.0.89:9229/user/register`, data, {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then((res) => {
  //       console.log(res);

  //     })



  // }
  render() {
    return (


      <div className="login-box">
        <form  >
          <div className="container" >
            <h1>Signup with Myntra</h1>



            <label htmlFor="test"><b>username</b></label>
            <input type="text" onChange={this.Username} placeholder="username" name="email" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" onChange={this.Password} placeholder="Enter Password" name="psw" required />


            <label htmlFor="tel" className="telph"><b>Mobile Number</b></label>
            <input type="tel" onChange={this.Phone} placeholder="Enter number" name="tel" required />

            <label htmlFor="email"><b>Email address</b></label>
            <input type="email" onChange={this.Email} placeholder="email address" name="email" required />

            <div className="clearfix">
              <button type="button" className="cancelbtn">Cancel</button>
              <button type="submit" onClick={this.handleSubmit} className="signupbtn">REGISTER</button>
            </div>
            <div className="clearfix">
              <label htmlFor="psw"><b>OTP</b></label>
              <input type="number" onChange={this.Otp} placeholder="Enter OTP" name="otp" required />

              <button type="submit" onClick={this.handleOTP} className="signupbtn">Submit OTP</button>
            </div>
          </div>
        </form>



      </div>



    );
  }


}
const actionCreators ={
  register: userActions.register
}
const connectedRegisterPage = connect(actionCreators)(Signup)

export  {onnectedRegisterPage as Signup};