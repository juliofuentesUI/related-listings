import React from 'react';
import { shallow } from 'enzyme';

import Modal from '../client/src/components/Modal';

// const clickFN = jest.fn();

describe('App Component', () => {
  it('renders correctly', () => {    
    const component = shallow(<Modal />);
    // const wrapper = component.find('button');
    // expect(wrapper.length).toBe(1);
    // expect(1).toBe(1);
  })
});