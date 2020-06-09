import React from 'react';
import MainPage, { GuestReviewsPopup, Button } from './MainPage';

describe("MainPage test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainPage />);
    wrapper.update();
  })

  it("should render MainPage", () => {
    expect(wrapper).toHaveLength(1);
  })

  it("should render GuestReviewsPopup with props", () => {
    const Btn = wrapper.find(Button);
    Btn.simulate("click");

    const Guest_reviews_popup = wrapper.find(GuestReviewsPopup);
    expect(Guest_reviews_popup).toHaveLength(1);
    expect(Guest_reviews_popup.props().isOpen).toEqual(true);
    expect(typeof Guest_reviews_popup.props().onClose).toEqual("function");
  })

  it("should render toggle button", () => {
    const Btn = wrapper.find(Button);
    expect(Btn).toHaveLength(1);
    expect(typeof Btn.props().onClick).toEqual("function");
  })
})