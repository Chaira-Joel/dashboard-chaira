import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders the header component', () => {
  render(<App />);
  const headerElement = screen.getByText(/WINC academy Student Dashboard/i);
  expect(headerElement).toBeVisible();
});

test('Renders the footer component', ()=>{
  render(<App/>)
  const footerElement = screen.getByText(/Footer/);
  expect(footerElement).toBeVisible();
});



test('Renders the Data component', ()=>{
  render(<App/>)
  const DataComponent = screen.getByText(/Data/);
  expect(DataComponent).toBeVisible();
});