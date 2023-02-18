import { render, screen } from '@testing-library/react';
import Checkboxes from '../Components/Checboxes';

test('Renders the Difficult Checkbox', ()=>{
    render (<Checkboxes/>);
    const checkBoxElement = screen.getByTestId('difficult')
    expect(checkBoxElement).toBeVisible();
});
test('Renders the Fun Checkbox', ()=>{
    render (<Checkboxes/>);
    const checkBoxElement = screen.getByTestId('fun')
    expect(checkBoxElement).toBeVisible();
});
