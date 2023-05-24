import { render, screen } from '@testing-library/react';
import { ContactLinks } from '@/app/components/ContactLinks';
import '@testing-library/jest-dom';
 
describe('Contact Links', () => {
  it('renders a heading', () => {
    render(<ContactLinks />);
 
  });
});