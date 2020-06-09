import React from 'react';
import ModalWindow, { X, Spinner, Modal } from './ModalWindow';

describe("ModalWindow test", () => {
  let wrapper;
  const props = {
    isOpen: true,
    onClose: jest.fn(),
    headerTitle: "Some title",
    isLoading: true,
    error: "",
    children: <div id="child">Some children</div>,
  }

  beforeEach(() => {
    wrapper = shallow(<ModalWindow {...props}/>);
  })

  it("should render ModalWindow", () => {
    expect(wrapper).toHaveLength(1);
    console.log(wrapper.props());
    expect(wrapper.props().show).toEqual(props.isOpen);
    expect(typeof wrapper.props().onHide).toEqual("function");
    expect(wrapper.text().includes(props.headerTitle)).toEqual(true);  
  })

  it("should render X button", () => {
    const X_ = wrapper.find(X);
    expect(X_).toHaveLength(1);
    expect(typeof X_.props().onClick).toEqual("function");
  })

  it("on loading", () => {
    const Spinner_ = wrapper.find(Spinner);
    expect(Spinner_).toHaveLength(1);
  });

  it("on error", () => {
    wrapper = shallow(<ModalWindow isLoading={false} error="Some error"/>);

    const Spinner_ = wrapper.find(Spinner);
    expect(Spinner_).toHaveLength(0);

    const ModalBody = wrapper.find(Modal.Body);
    expect(ModalBody.text().includes("Some error")).toEqual(true);
  });

  it("on data", () => {
    wrapper = shallow(<ModalWindow {...props} isLoading={false}/>);
    const Child = wrapper.find("#child");
    expect(Child).toHaveLength(1);
  });

  it("should render header", () => {
    expect(wrapper.find(Modal.Header)).toHaveLength(1);
    
    wrapper = shallow(<ModalWindow headerTitle=""/>);
    expect(wrapper.find(Modal.Header)).toHaveLength(0);
  })
});
