import React from 'react'

class Modal extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalHeartClicked: false
    }

    this.modalHeartClicked = this.modalHeartClicked.bind(this);
  }

  modalHeartClicked(){
    this.setState({
      modalHeartClicked: !this.state.modalHeartClicked
    })
  }

  render(){
    let svgStyles = {
      height: '28px',
      width: '28px',
      display: 'block',
      overflow: 'visible'
    }
    let svgExitButtonStyle = {
      height: '16px',
      width: '16px',
      display: 'block',
      fill: 'rbg(118, 118, 118)'
    }

    return(
        <div className="modal-container" style={{visibility: this.props.visibility, opacity: '1'}}>
          <div className="modal-inner-container">
            <div className="modal">
              <div className="exit-button">
                <svg className="x-button" onClick={this.props.heartClickedF} viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={svgExitButtonStyle}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>
              </div>
              <div className="modal-header">
                <h2 className="modal-save">Save to list</h2>
                <h4><a className="new-list-link" href="#">Create new list</a></h4>
              </div>
              <hr className="horizontal-rule"></hr>
              <div className="modal-favorites">
                <div>
                  <p>Japan Vacation - List</p>
                </div>
                <div>
                  {!this.state.modalHeartClicked ? (
                    <svg onClick={this.modalHeartClicked} viewBox="0 0 24 24" fill="#fff" fillOpacity="0.5" stroke='#484848' strokeWidth="2" focusable="false" aria-label="Add listing to a list" role="img" strokeLinecap="round" strokeLinejoin="round" style={svgStyles}><path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" strokeLinejoin="round"></path></svg>
                  ) : (
                    <svg onClick={this.modalHeartClicked} viewBox="0 0 24 24" fill="rgb(255, 90, 95)" fillOpacity="1" stroke='rgb(255, 90, 95)' strokeWidth="2" focusable="false" aria-label="Add listing to a list" role="img" strokeLinecap="round" strokeLinejoin="round" style={svgStyles}><path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" strokeLinejoin="round"></path></svg>
                  )}
                </div>
              </div>
            </div>
          </div>
            <div className="modal-footer">
              <div className="modal-inner-footer">
                <div className="small-img-container">
                  <img className="small-img" src="https://loremflickr.com/320/240/dog" alt="Room image"></img>
                </div>
                <div className="modal-footer-info">
                  <span><p className="modal-roomname">ENTIRE VILLA - Atami-Shi</p></span>
                  <span><p className="modal-roomLocation">Y's Village Fukuori</p></span>
                  <div className="reviews-container-modal">
                    <div className="star-container-modal">
                      <svg className="star-img" viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                      <svg className="star-img" viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                      <svg className="star-img" viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                      <svg className="star-img" viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                      <svg className="star-img" viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#D8D8D8'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                    </div>
                    <div>
                      <p className="modal-reviews">  reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      ) 
  }
}

export default Modal;