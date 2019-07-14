import React from 'react';
import Listings from './Listings.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomInfo: [],
    };
  }

  render() {
    const {
      roomInfo,
      heartClickedF,
      heartClicked,
      transform,
    } = this.props;
    return (
      <Listings
        roomInfo={roomInfo}
        heartClickedF={heartClickedF}
        heartClicked={heartClicked}
        transform={transform}
      />
    );
  }
}

export default Carousel;
