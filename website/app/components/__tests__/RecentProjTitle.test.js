import { render, screen, cleanup, getByTestId, getByText } from "@testing-library/react";
import { RecentProjTitle } from "../RecentProjTitle";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup()
})
 
describe("Title of recent projects page", () => {
  it("Renders properly", () => {
    render(<RecentProjTitle/>)
    const title = screen.getByTestId("recentProjTitle")
    expect(title).toBeInTheDocument()
    const titleShown = screen.getByText("Recent Projects")
    expect(titleShown).toBeInTheDocument()
  });

  it("No category shown when filter is \"All\"", () => {
    render(<RecentProjTitle activeFilter= {"All"}/>)
    const badTitle = screen.queryByText("All projects")
    expect(badTitle).not.toBeInTheDocument()
  });

  it("Category shown when filter is not \"All\"", () => {
    render(<RecentProjTitle activeFilter= {"Category"}/>)
    const title = screen.queryByText("Category projects")
    expect(title).toBeInTheDocument()
  });
});