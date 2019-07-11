import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Modal from '../client/src/components/Modal.jsx';

configure({ adapter: new Adapter() });

// describe('Modal Component', () => {
  // it('should have state', () => {
  //   const wrapper = mount(<Modal />);
  //   expect(wrapper.state()).toExist;
  // });
// });