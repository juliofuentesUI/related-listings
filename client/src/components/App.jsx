import React from "react";
import Carousel from "./Carousel.jsx";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      roomInfo: null
    }
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
      })
      this.setState({
        roomInfo: reducedData
      })
  }

  render(){
    return(
      <div className="related-listings">
        <div>
          <span className="rooms-title">More places to stay</span>
        </div>
        <div>
          {/* {this.state.roomInfo.map(singleInfo => {
            <Carousel roomInfo={singleInfo} />
          })} */}
          <Carousel roomInfo={this.state.roomInfo}/>
        </div>
      </div>
    )
  }
}

export default App;