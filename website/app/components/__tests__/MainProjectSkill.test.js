import { render, screen, cleanup, getByTestId, getByText } from "@testing-library/react";
import { MainProjectSkill } from "../MainProjectSkill";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup()
})
 
describe("Main Project Skill", () => {
  it("renders properly", () => {
    const project = {"skills": [""]}
    render(<MainProjectSkill project = { project }/>)
    const skill = screen.getByTestId("mainSkill")
    expect(skill).toBeInTheDocument()
    const tick = screen.getByRole("img")
    expect(tick).toBeInTheDocument()
  });

  it("renders a skill", () => {
    const project = {"skills": ["skill"]}
    render(<MainProjectSkill project = { project }/>)
    const skill = screen.getByText("SKILL")
    expect(skill).toBeInTheDocument()
  });

  it("renders correct skill", () => {
    const project = {"skills": ["skill", "other skill"]}
    render(<MainProjectSkill project = { project }/>)
    const skill = screen.getByText("SKILL")
    expect(skill).toBeInTheDocument()
  });
});