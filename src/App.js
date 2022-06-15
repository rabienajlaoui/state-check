import React, { Component } from 'react';
import Rabie from './Rabie.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  state = {
    fullName:'Rabie nalaoui',
    bio: 'makes a amazing websites',
    profession: `i'am a web developer`,
    imgSrc: Rabie,
    shows:false,
    count:0
  }

  componentDidMount(){
    setInterval(()=>this.setState({count:this.state.count+1}),1000)
  }

  toggle =()=>{this.setState({shows:!this.state.shows})}
  render() {
    return (
      <div>
        <p>{this.state.count} seconds</p>
        {this.state.shows ? (
          <>
        <p style={{position:'absolute', left:450,top:100}}>Hi i'm <span style={{fontWeight:'bold'}}>{this.state.fullName}</span>, i {this.state.bio} so, <span style={{fontWeight:'bold'}}>{this.state.profession}</span></p>
        <img src={this.state.imgSrc} style={{width:200,height:200 , position:'absolute' ,left: 580, top:160}} alt='mypic'/>
        </>
        ) : (<p style={{fontWeight:'bold', textAlign:'center'}}>My profile is hidden</p>)
        }
        <button class="btn btn-primary" style={{position: 'absolute', left: 650, top:400}} onClick={this.toggle}> {!this.state.shows ? "Shows" : "Hide"}</button>{' '}
      </div>
    ) 
  }
}
