import { render, screen, cleanup, getByTestId, getByText } from '@testing-library/react';
import { LinksBtns } from '../LinkBtns';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup()
})
 
describe('External link btns', () => {
  it('renders external link buttons', () => {
    const project = {"links": [{"type": '', "link": ''}]}
    render(<LinksBtns  project = { project }/>)
    const link = screen.getByTestId('ExternalLinkBtn')
    expect(link).toBeInTheDocument()
  });

  it('renders link correctly', () => {
    const project = {"links": [{"type": '', "name": 'download', "link": "/testdownload"}]}
    render(<LinksBtns  project = { project }/>)
    const link = screen.getByTestId('ExternalLinkBtn')
    expect(link).toHaveAttribute("href", "/testdownload")
    const text = screen.getByText('download')
    expect(text).toBeInTheDocument()
  });

  it('correct icon rendered', () => {
    const project = {"links": [{"type": '', "name": 'download', "link": "/testdownload"}]}
    render(<LinksBtns  project = { project }/>)
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/images/icons/externalLinkBlack.png')
  });
});