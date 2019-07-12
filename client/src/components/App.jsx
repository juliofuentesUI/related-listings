import React from "react";
import Carousel from "./Carousel.jsx";
import Modal from "./Modal.jsx";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      roomInfo: [],
      transform: 0,
      count: 0,
      heartClicked: false
    }

    this.translateXMinus = this.translateXMinus.bind(this);
    this.translateXPlus = this.translateXPlus.bind(this);
    this.addCount = this.addCount.bind(this);
    this.subtractCount = this.subtractCount.bind(this);
    this.heartClickFunction = this.heartClickFunction.bind(this);
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
      transform: (this.state.transform - 104)
    })
  }

  translateXPlus(){
    this.setState({
      transform: (this.state.transform + 104)
    })
  }

  heartClickFunction(){
    this.setState({
      heartClicked: !this.state.heartClicked
    })
  }
  
  render(){
    return(
      this.state.heartClicked ? (
        <div>
          <div className="main-container" style={{opacity: '0.5'}}>
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
                  <Carousel roomInfo={this.state.roomInfo} transform={this.state.transform} heartClickedF={this.heartClickFunction} heartClicked={this.state.heartClicked}/>
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
            <Modal roomInfo={this.state.roomInfo} heartClicked={this.state.heartClicked} heartClickedF={this.heartClickFunction} visibility={'visible'}/>
        </div>
      ) : (
        <div>
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
                  <Carousel roomInfo={this.state.roomInfo} transform={this.state.transform} heartClickedF={this.heartClickFunction} heartClicked={this.state.heartClicked}/>
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
            <Modal visibility={'hidden'}/>
        </div>
      )
    )
  }
}

export default App;


// {this.state.heartClicked ? (
//   <Modal roomInfo={this.state.roomInfo} heartClicked={this.state.heartClicked} heartClickedF={this.heartClickFunction} visibility={'visible'}/>
// ) : (
//   <Modal visiblity={'hidden'}/>
// )}