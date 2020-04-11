import React from 'react';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Timer from './';

configure({ adapter: new Adapter() });

describe('Components > Timer', () => {
  test('renders correctly', () => {
    const { asFragment } = render(
      <Timer minutes='1' />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  describe('countdown triggers', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Timer minutes='1' />);
    });

    test('toogle timer', async () => {
      const button = wrapper.find('#js-icon-button');

      // Starts the countdown
      button.simulate('click');
      expect(wrapper.state('started')).toBe(true);

      // Stops the countdown
      button.simulate('click');
      expect(wrapper.state('started')).toBe(false);
    });
  });
});
