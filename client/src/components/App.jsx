import React from "react";
import Carousel from "./Carousel.jsx";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      roomInfo: [],
      transform: 0
    }

    this.translateXMinus = this.translateXMinus.bind(this);
    this.translateXPlus = this.translateXPlus.bind(this);
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
          <div onClick={this.translateXPlus} className="left-button"></div>
        </div>
        <div className="related-listings">
          <div>
            <span className="rooms-title">More places to stay</span>
          </div>
          <div className="carousel-container">
              <Carousel roomInfo={this.state.roomInfo} transform={this.state.transform}/>
          </div>
        </div>
        <div className="button-container">
          <div onClick={this.translateXMinus} className="right-button"></div>
        </div>
      </div>
    )
  }
}

export default App;