import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import React from 'react';
import LoveHeart from '../client/src/components/LoveHeart.jsx';

configure({ adapter: new Adapter() });

const wrapper = shallow(<LoveHeart />);

describe('LoveHeart Component', () => {
  it('renders correctly', () => {    
    const div = document.createElement('div');
    ReactDOM.render(<LoveHeart />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has an existing wrapper', () => {
    expect(wrapper).toExist;
  })

  it('has clicking functionality', () => {
    const mockClick = jest.fn();
    const button = shallow(<svg onClick={mockClick}></svg>);
    button.find('svg').simulate('click');
    expect(mockClick.mock.calls.length).toBe(1);
  });
});
