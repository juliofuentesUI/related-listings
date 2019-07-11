import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// describe('App Component', () => {
//   it('renders correctly', () => {    
//     const component = shallow(<Modal />);
//     const wrapper = component.find('button');
//     expect(wrapper.length).toBe(1);
//   })
// });