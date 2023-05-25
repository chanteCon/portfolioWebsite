import { render, screen, cleanup, getByTestId } from '@testing-library/react';
import { HomePageLinks } from '../HomePageLinks';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup()
})
 
describe('Filter List', () => {
  it('renders filters list', () => {
    render(<HomePageLinks />)
    const links = screen.getByTestId('homePageLinks')
    expect(links).toBeInTheDocument()
  });

  it('link and image work as expected', () => {
    render(<HomePageLinks link = "/testlink" img = "/testimage"/>)
    const links = screen.getByTestId('homePageLinks')
    expect(links).toHaveAttribute('href', '/testlink')
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute('src', '/testimage')
  });

});