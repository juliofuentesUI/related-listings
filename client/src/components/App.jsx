import React from "react";
import Carousel from "./Carousel.jsx";
import Modal from "./Modal.jsx";
import styles from "../app.css";

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
          <div style={{opacity: '0.5'}}>
            <div className={styles.buttonContainer}>
              {this.state.count === 0 ? (
                <div className={styles.leftButton} onClick={() => {this.subtractCount(), this.translateXPlus()}} style={{visibility: 'hidden'}}></div>
              ) : (
                <div className={styles.leftButton} onClick={() => {this.subtractCount(), this.translateXPlus()}} style={{backgroundImage: "url('https://fec-hrsf119.s3-us-west-1.amazonaws.com/arrowLeft.png')"}}></div>
              )}
            </div>
            <div className={styles.relatedListings}>
              <div>
                <span className={styles.roomsTitle}>More places to stay</span>
              </div>
              <div className={styles.carouselContainer}>
                  <Carousel roomInfo={this.state.roomInfo} transform={this.state.transform} heartClickedF={this.heartClickFunction} heartClicked={this.state.heartClicked}/>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              {this.state.count === 8 ? (
                <div className={styles.rightButton} onClick={() => {this.addCount(), this.translateXMinus()}} style={{visibility: 'hidden'}}></div>
              ) : (
                <div className={styles.rightButton} onClick={() => {this.addCount(), this.translateXMinus()}} style={{backgroundImage: "url('https://fec-hrsf119.s3-us-west-1.amazonaws.com/arrowRight.png')"}}></div>
              )}
            </div>
          </div>
            <Modal roomInfo={this.state.roomInfo} heartClicked={this.state.heartClicked} heartClickedF={this.heartClickFunction} visibility={'visible'}/>
        </div>
      ) : (
        <div>
          <div>
            <div className={styles.buttonContainer}>
              {this.state.count === 0 ? (
                <div className={styles.leftButton} onClick={() => {this.subtractCount(), this.translateXPlus()}} style={{visibility: 'hidden'}}></div>
              ) : (
                <div className={styles.leftButton} onClick={() => {this.subtractCount(), this.translateXPlus()}} style={{backgroundImage: "url('https://fec-hrsf119.s3-us-west-1.amazonaws.com/arrowLeft.png')"}}></div>
              )}
            </div>
            <div className={styles.relatedListings}>
              <div>
                <span className={styles.roomsTitle}>More places to stay</span>
              </div>
              <div className={styles.carouselContainer}>
                  <Carousel roomInfo={this.state.roomInfo} transform={this.state.transform} heartClickedF={this.heartClickFunction} heartClicked={this.state.heartClicked}/>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              {this.state.count === 8 ? (
                <div className={styles.rightButton} onClick={() => {this.addCount(), this.translateXMinus()}} style={{visibility: 'hidden'}}></div>
              ) : (
                <div className={styles.rightButton} onClick={() => {this.addCount(), this.translateXMinus()}} style={{backgroundImage: "url('https://fec-hrsf119.s3-us-west-1.amazonaws.com/arrowRight.png')"}}></div>
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