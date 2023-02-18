import React from "react"
import {render} from "@testing-library/react"
import Table from '../Components/Table'

test('Renders a list of table row components', ()=>{
    const items=[
        {id: 1, name: "Marieke", assignment:"b88", difficulty:"5", fun:"3"},
        {id: 2, name: "Peter", assignment:"b88", difficulty:"3", fun:"5"},
        {id: 3, name: "Winston", assignment:"b98", difficulty:"9", fun:"1"}
    ];
    const{getByText} = render(<Table items={items}/>);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Marieke")).toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Peter")).toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Winston")).toBeInTheDocument();
});