import React from 'react';
import Carousel from './Carousel.jsx';

class Modal extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      heartClicked: true
    }

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(){
    this.setState({
      heartClicked: !this.state.heartClicked
    })
  }

  render(){
    let svgStyles = {
      height: '28px',
      width: '28px',
      display: 'block',
      overflow: 'visible'
    }
    return(
      this.state.heartClicked ? (
        <div className="modal-container">
          <div className="modal">
            <div className="exit-button">
              <button onClick={this.closeModal} className="x-button">x</button>
            </div>
            <div>
              <h2>Save to list</h2>
              <h4><a href="#">Create new list</a></h4>
            </div>
            <hr></hr>
            <div>
              <p>Faves</p>
              <svg viewBox="0 0 24 24" fill="#484848" fillOpacity="0.5" stroke="#ffffff" strokeWidth="2" focusable="false" aria-label="Add listing to a list" role="img" strokeLinecap="round" strokeLinejoin="round" style={svgStyles}><path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" strokeLinejoin="round"></path></svg> 
            </div>
            <div>
              <div>
                <img src="" alt="testfornow"></img>
              </div>
              <span><p>Place Name</p></span>
              <span><p>Place info</p></span>
              <span>STARS / REVEIWS HURRR</span>
            </div>
          </div>
        </div>
      ) : (
        <Carousel />
      )
    )
  }
}

export default Modal;