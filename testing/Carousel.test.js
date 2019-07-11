import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Carousel from '../client/src/components/Carousel.jsx';

configure({ adapter: new Adapter() });

describe('Carousel Component', () => {
  it('should have state', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.state()).toExist;
  });
});