import {render, screen} from '@testing-library/react'
import About from '../Components/About'

test('Renders the About component', ()=>{
    render(<About/>)
    const AboutElement = screen.getByTestId('about');
    expect(AboutElement).toBeVisible();
});