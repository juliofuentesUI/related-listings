import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import React from 'react';
import App from '../client/src/components/App.jsx';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('renders correctly', done => {    
    // fetch = jest.fn(() => new Promise(resolve => resolve()));
    const options = {
      disableLifecycleMethods: true
    }
    const wrapper = shallow(<App />, options)
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
    ReactDOM.unmountComponentAtNode(div);
    done();
  });
  it('should have state', done =>{
    const options = {
      disableLifecycleMethods: true
    }
    const wrapper = shallow(<App />, options)
    expect(wrapper.state()).toExist;
    done(); 
});

describe('left and right button', () => {
  it('left button changes state', () => {
    const options = {
      disableLifecycleMethods: true
    }
    const wrapper = shallow(<App />, options)
    wrapper.find('.left-button').simulate('click');
    expect(wrapper.state().count).toBe(-1);
  });

  it('right button changes state', () => {
    const options = {
      disableLifecycleMethods: true
    }
    const wrapper = shallow(<App />, options)
    wrapper.find('.right-button').simulate('click');
    expect(wrapper.state().count).toBe(1);
  });
})

});