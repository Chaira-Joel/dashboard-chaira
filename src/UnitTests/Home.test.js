import {render, screen} from '@testing-library/react'
import Home from '../Components/Home'


test('Renders the Barchart component', ()=>{
    render(<Home/>)
    const BarChartElement = screen.getByText(/Barchart/);
    expect(BarChartElement).toBeVisible();
});