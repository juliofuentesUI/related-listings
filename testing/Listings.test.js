import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Listings from '../client/src/components/Listings.jsx';

configure({ adapter: new Adapter() });

describe('Listings Component', () => {
  it('shoud exist', () => {
    const wrapper = shallow(<Listings roomInfo={[{name: 'amar'}, {name: 'Faith'}]}/>);
    expect(wrapper).toExist;
  });
});
