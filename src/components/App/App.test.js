import React from 'react';
import App from './App';

describe("App test", () => {
  it("should render App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  })
})
