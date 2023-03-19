import React from "react"
import {render, screen} from "@testing-library/react"
import Home from "../Components/Home";
import {MemoryRouter} from "react-router-dom";


describe('Homepage', () => {
    it('Renders the Home component', ()=>{
        render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>  );
        const homeComponent = screen.getByTestId("main-homepage");
        expect(homeComponent).toBeInTheDocument();
    });
});


