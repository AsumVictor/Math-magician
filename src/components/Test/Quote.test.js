import React from "react";
import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Quote from "../Quote";

describe("Quote component", () => {

  it("should render quote and author correctly", () => {
    const quoteText = "This is a test quote";
    const authorName = "Test Author";
    const { getByText, getByAltText } = render(
      <Quote quote={quoteText} author={authorName} />
    );

    const quoteElement = getByText(quoteText);
    const authorElement = getByText(authorName);
    const avatarElement = getByAltText(authorName);

    expect(quoteElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(avatarElement).toBeInTheDocument();
  });

  it("should display PropTypes validation warning", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});

    render(<Quote />);
    expect(spy).toHaveBeenCalledTimes(2);

    spy.mockRestore();
  });

 

});
