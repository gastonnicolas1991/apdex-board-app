import { render, screen } from "@testing-library/react";
import Modal from ".";

describe("Modal component", () => {
  const props = {
    setIsOpen: () => jest.fn(),
    content: "This is testing content",
  };

  test("should render basic layout of the Modal component", () => {
    render(<Modal {...props} />);

    const title = screen.getByRole("heading", {
      name: "Details",
    });

    const content = screen.getByText("This is testing content");

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
