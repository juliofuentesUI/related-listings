import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import React from 'react';
import App from '../client/src/components/App.jsx';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  // it('renders correctly', done => {    
  //   // fetch = jest.fn(() => new Promise(resolve => resolve()));
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  //   done();
  // });
//   it('should have state', done =>{
//     const wrapper = shallow(<App />);
//     expect(wrapper.state()).toExist;
//     done(); 
// });

  it('has clicking functionality', () => {
    const mockClick = jest.fn();
    const button = shallow(<svg onClick={mockClick}></svg>);
    button.find('svg').simulate('click');
    expect(mockClick.mock.calls.length).toBe(1);
  });
});