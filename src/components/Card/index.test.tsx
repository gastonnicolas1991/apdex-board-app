import { render, screen, fireEvent } from "@testing-library/react";
import { Host } from "../../domain/type";
import Card from ".";

describe("Card component", () => {
  const props: Host = {
    hostName: "7983b3a1-b4c4.marilie.biz",
    appList: [
      { score: 88, appName: "test1", releaseVersion: 1 },
      { score: 99, appName: "test2", releaseVersion: 4 },
      { score: 66, appName: "test3", releaseVersion: 1 },
      { score: 55, appName: "test4", releaseVersion: 1 },
      { score: 77, appName: "test5", releaseVersion: 1 },
    ],
  };

  test("should render basic layout of the card component", () => {
    render(<Card host={props} />);

    const hostName = screen.getByRole("heading", {
      name: "7983b3a1-b4c4.marilie.biz",
    });

    const firstElement = screen.getByTestId("0-test2");
    const secondElement = screen.getByTestId("1-test1");
    const thirdElement = screen.getByTestId("2-test5");
    const fourthElement = screen.getByTestId("3-test3");
    const fifthElement = screen.getByTestId("4-test4");
    const modal = screen.queryByTestId("action-modal");

    expect(hostName).toBeInTheDocument();
    expect(firstElement).toBeInTheDocument();
    expect(secondElement).toBeInTheDocument();
    expect(thirdElement).toBeInTheDocument();
    expect(fourthElement).toBeInTheDocument();
    expect(fifthElement).toBeInTheDocument();
    expect(modal).not.toBeInTheDocument();
  });

  test("should show modal when clicking on an app", () => {
    render(<Card host={props} />);
    const element = screen.getByTestId("0-test2");
    fireEvent.click(element);

    const modal = screen.getByTestId("action-modal");
    expect(modal).toBeInTheDocument();
  });
});
