import React from "react"
import {render} from "@testing-library/react"
import Students from "../Components/Students";

test('Renders a list of student profile components', ()=>{
const items=[
    {id: 1, name: "Marieke", assignment:"b88", difficulty:"5", fun:"3"},
    {id: 2, name: "Peter", assignment:"b88", difficulty:"3", fun:"5"},
    {id: 3, name: "Winston", assignment:"b98", difficulty:"9", fun:"1"}
];
const {getByText} = render(<Students items={items}/>);

// eslint-disable-next-line testing-library/prefer-screen-queries
expect(getByText("Marieke")).toBeInTheDocument();
// eslint-disable-next-line testing-library/prefer-screen-queries
expect(getByText("Peter")).toBeInTheDocument();
// eslint-disable-next-line testing-library/prefer-screen-queries
expect(getByText("Winston")).toBeInTheDocument();
// eslint-disable-next-line testing-library/prefer-screen-queries,testing-library/no-node-access
expect(getByText("Marieke").parentElement.childElementCount).toBe(3);
});