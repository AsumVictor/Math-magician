import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "../Button";

describe("Button component", () => {
  it("renders correctly with provided props", () => {
    const mockValue = "Click Me";
    const mockClassExtend = "bg-red-500";
    const mockHandleClick = jest.fn();

    render(
      <Button
        value={mockValue}
        classextend={mockClassExtend}
        handleClick={mockHandleClick}
      />
    );

    const buttonElement = screen.getByText(mockValue);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "border",
      "flex",
      "items-center",
      "justify-center",
      "border-white",
      "font-bold",
      "text-",
      "rounded-md",
      mockClassExtend
    );
  });

  it("calls handleClick when the button is clicked", () => {
    const mockValue = "Click Me";
    const mockClassExtend = "bg-red-500";
    const mockHandleClick = jest.fn();

    render(
      <Button
        value={mockValue}
        classextend={mockClassExtend}
        handleClick={mockHandleClick}
      />
    );

    const buttonElement = screen.getByText(mockValue);
    fireEvent.click(buttonElement);

    expect(mockHandleClick).toHaveBeenCalled();
  });

  it("uses default prop classextend when not provided", () => {
    const mockValue = "Click Me";
    const mockHandleClick = jest.fn();

    render(<Button value={mockValue} handleClick={mockHandleClick} />);

    const buttonElement = screen.getByText(mockValue);
    expect(buttonElement).toHaveClass(
      "border",
      "flex",
      "items-center",
      "justify-center",
      "border-white",
      "font-bold",
      "text-",
      "rounded-md",
      "bg-slate-200",
      "text-black"
    );
  });

  it("requires value prop and handleClick prop", () => {
    const originalError = console.error;
    console.error = jest.fn();
    render(<Button />);
    expect(console.error).toHaveBeenCalled();
    console.error = originalError;
  });
});
