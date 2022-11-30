import { render, screen } from "@testing-library/react";
import { Host } from "../../domain/type";
import Card from ".";

describe("Card component", () => {
  test("renders a heading", () => {
    const props: Host = {
      hostName: "7983b3a1-b4c4.marilie.biz",
      appList: [{ score: 99, appName: "test", releaseVersion: 6 }],
    };

    render(<Card host={props} />);
    const hostName = screen.getByText("7983b3a1-b4c4.marilie.biz");
    expect(hostName).toBeInTheDocument();
  });
});
