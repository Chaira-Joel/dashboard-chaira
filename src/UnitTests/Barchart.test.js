import React from "react"
import {render} from "@testing-library/react"
import Barchart from "../Components/Barchart";

test('Renders a Victory BarChart Component', ()=>{
    const {getByTestId} = render(<Barchart/>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const barchartComponent = getByTestId("barchart");
    expect(barchartComponent).toBeInTheDocument();

});

