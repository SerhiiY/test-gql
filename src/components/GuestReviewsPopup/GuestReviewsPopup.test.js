import React from 'react';
import GuestReviewsPopup, {
  ModalWindow, QuestionsList,
} from './GuestReviewsPopup';
import dataReviews from "gql/mocks";

describe("GuestReviewsPopup test", () => {
  let wrapper;
  const props = {
    isOpen: false,
    onClose: jest.fn(),
  }

  beforeEach(() => {
    wrapper = shallow(<GuestReviewsPopup {...props}/>);
  })

  it("should render GuestReviewsPopup", () => {
    expect(wrapper).toHaveLength(1);
  })

  it("should render ModalWindow with props", () => {
    const Modal_Window = wrapper.find(ModalWindow);
    expect(Modal_Window).toHaveLength(1);

    const { headerTitle, onClose, isOpen, isLoading } = Modal_Window.props();
    expect(headerTitle).toEqual("GUEST REVIEWS");
    expect(typeof onClose).toEqual("function");
    expect(isOpen).toEqual(props.isOpen);
    expect(isLoading).toEqual(true);  
  })

  it("should render QuestionsList", async () => {
    await new Promise(resolve => setTimeout(() => {
      wrapper.update();
      resolve();
    }, 1500))
      .then(() => {
        const Questions_List = wrapper.find(QuestionsList);
        expect(Questions_List).toHaveLength(3);

        const questions = dataReviews[0].result.guestReviewsList[0].questions;
        expect(Questions_List.first().props().questions).toEqual(questions);
      })
      .catch(err => console.error(err));
  })
})