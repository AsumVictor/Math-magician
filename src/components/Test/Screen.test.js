import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Screen from "../Screen";

describe("Screen component", () => {
  const findByTextContent = (container, text) => {
    const elements = container.querySelectorAll("*");
    for (const element of elements) {
      if (element.textContent === text) {
        return element;
      }
    }
    return null;
  };

  it("should render without crashing", () => {
    const props = {
      next: "123",
      operation: "+",
      total: "345",
    };
    const { container } = render(<Screen {...props} />);
    expect(container).toBeTruthy();
  });

  it("should render 0 when all props are empty", () => {
    const props = {
      next: "",
      operation: "",
      total: "",
    };
    const { getByText } = render(<Screen {...props} />);
    expect(getByText("0")).toBeInTheDocument();
  });

  it("should render the correct values for next, operation, and total", () => {
    const props = {
      next: "456",
      operation: "-",
      total: "234",
    };
    const { container } = render(<Screen {...props} />);
    const combinedText = "234-456";
    const elementWithText = findByTextContent(container, combinedText);
    expect(elementWithText).toBeInTheDocument();
  });

  it("should display PropTypes validation warning for missing props", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    render(<Screen />);
    expect(spy).toHaveBeenCalledTimes(3);

    spy.mockRestore();
  });

  it("should display PropTypes validation warning for invalid prop types", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});

    const props = {
      next: 123,
      operation: "+",
      total: "456",
    };
    render(<Screen {...props} />);
    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockRestore();
  });
});
