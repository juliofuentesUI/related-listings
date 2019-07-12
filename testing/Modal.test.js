import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import React from 'react';
import Modal from '../client/src/components/Modal.jsx';

configure({ adapter: new Adapter() });

describe('Modal component', () => {
  it('should have state', () => {
    const wrapper = shallow(<Modal roomInfo={{roomname: 'ravanna'}}/>);
    expect(wrapper.state()).toExist;
  })
});