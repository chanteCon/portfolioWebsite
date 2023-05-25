import { render, screen, cleanup, getByTestId, getByText } from '@testing-library/react';
import { ProjectsByCategory } from '../ProjectsByCategory';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup()
})
 
describe('Projects by category link', () => {
  it('renders properly', () => {
    render(<ProjectsByCategory />)
    const link = screen.getByTestId("projectCategory")
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', "/projects?filter=")
  });

  it('filter gives correct link', () => {
    render(<ProjectsByCategory filter = { "category" }/>)
    const link = screen.getByTestId("projectCategory")
    expect(link).toHaveAttribute('href', "/projects?filter=category")
  });

  it('filter gives correct text', () => {
    render(<ProjectsByCategory filter = { "category" }/>)
    const text = screen.getByText('category Projects')
    expect(text).toBeInTheDocument()
  });
});