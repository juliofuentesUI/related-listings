import React from 'react';
const faker = require('faker');

class Carousel extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <div className="testBox">
        <span>
          <img className="testImage" src="https://loremflickr.com/320/240/dog" alt="random pic"/>
        </span>
        <span>
          <p className="room-details-room-name">ENTIRE HOUSE - SHINJUKU</p>
          <p className="room-details-room-info">FUJI TRIP HOUSE Kawaguchiko</p>
          <p className="room-details-room-price">$14/night</p>
          {setTimeout(() => {
            <span>{this.props.roomInfo[0].stars}</span>
          }, 0)}
        </span>
      </div>
    )
  }
}

export default Carousel;