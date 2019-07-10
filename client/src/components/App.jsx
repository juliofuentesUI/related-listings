import React from "react";
import Carousel from "./Carousel.jsx";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      roomInfo: [],
      transform: 0,
      count: 0
    }

    this.translateXMinus = this.translateXMinus.bind(this);
    this.translateXPlus = this.translateXPlus.bind(this);
    this.addCount = this.addCount.bind(this);
    this.subtractCount = this.subtractCount.bind(this);
  }

  componentDidMount(){
    const reducedData = [];
    fetch('/rooms/related-listings')
      .then(res => res.json())
      .then(json => {
        json.forEach(data => {
          if(reducedData.length <= 10){
            reducedData.push(data);
          }
        })
        this.setState({
          roomInfo: reducedData
        })
      })
  }

  addCount(){
    this.setState({
      count: this.state.count + 1
    })
  }

  subtractCount(){
    this.setState({
      count: this.state.count - 1
    })
  }

  translateXMinus(){
    this.setState({
      transform: (this.state.transform - 105)
    })
  }

  translateXPlus(){
    this.setState({
      transform: (this.state.transform + 105)
    })
  }

  
  render(){
    return(
      <div className="main-container">
        <div className="button-container">
          {this.state.count === 0 ? (
            <div onClick={() => {this.subtractCount(), this.translateXPlus()}} className="left-button" style={{visibility: 'hidden'}}></div>
          ) : (
            <div onClick={() => {this.subtractCount(), this.translateXPlus()}} className="left-button"></div>
          )}
        </div>
        <div className="related-listings">
          <div>
            <span className="rooms-title">More places to stay</span>
          </div>
          <div className="carousel-container">
              <Carousel roomInfo={this.state.roomInfo} transform={this.state.transform} />
          </div>
        </div>
        <div className="button-container">
          {this.state.count === 8 ? (
            <div onClick={() => {this.addCount(), this.translateXMinus()}} className="right-button" style={{visibility: 'hidden'}}></div>
          ) : (
            <div onClick={() => {this.addCount(), this.translateXMinus()}} className="right-button"></div>
          )}
        </div>
      </div>
    )
  }
}

export default App;