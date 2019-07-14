import React from 'react';
import ModalFooter from './ModalFooter.jsx';
import styles from '../app.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalHeartClicked: false,
      modalFooterClicked: false,
    };

    this.modalHeartClicked = this.modalHeartClicked.bind(this);
    this.modalFooterClicked = this.modalFooterClicked.bind(this);
  }

  modalHeartClicked() {
    this.setState({
      modalHeartClicked: !this.state.modalHeartClicked,
    });
  }

  modalFooterClicked() {
    this.setState({
      modalFooterClicked: !this.state.modalFooterClicked,
    });
  }

  render() {
    const svgStyles = {
      height: '28px',
      width: '28px',
      display: 'block',
      overflow: 'visible',
    };
    const svgExitButtonStyle = {
      height: '16px',
      width: '16px',
      display: 'block',
      fill: 'rbg(118, 118, 118)',
    };

    return (
      <div className={styles.modalContainer} style={{ visibility: this.props.visibility, opacity: '1' }}>
        <div className={styles.modalInnerContainer}>
          <div>
            <div>
              <svg className={styles.xButton} onClick={this.props.heartClickedF} viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={svgExitButtonStyle}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" /></svg>
            </div>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalSave}>Save to list</h2>
              <h4><a className={styles.newListLink} href="#">Create new list</a></h4>
            </div>
            <hr className={styles.horizontalRule} />
            <div className={styles.modalFavorites}>
              <div>
                <p>Japan Vacation - List</p>
              </div>
              <div>
                {!this.state.modalHeartClicked ? (
                  <svg onClick={this.modalHeartClicked} viewBox="0 0 24 24" fill="#fff" fillOpacity="0.5" stroke="#484848" strokeWidth="2" focusable="false" aria-label="Add listing to a list" role="img" strokeLinecap="round" strokeLinejoin="round" style={svgStyles}><path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" strokeLinejoin="round" /></svg>
                ) : (
                  <svg onClick={this.modalHeartClicked} viewBox="0 0 24 24" fill="rgb(255, 90, 95)" fillOpacity="1" stroke="rgb(255, 90, 95)" strokeWidth="2" focusable="false" aria-label="Add listing to a list" role="img" strokeLinecap="round" strokeLinejoin="round" style={svgStyles}><path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" strokeLinejoin="round" /></svg>
                )}
              </div>
            </div>
          </div>
        </div>
        {!this.state.modalFooterClicked ? (
          <ModalFooter modalFooterClicked={this.modalFooterClicked} height="20%" overflow="hidden" />
        ) : (
          <ModalFooter modalFooterClicked={this.modalFooterClicked} height="100%" overflow="auto" />
        )}
      </div>
    );
  }
}

export default Modal;
