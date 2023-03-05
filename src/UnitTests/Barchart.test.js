import React from "react"
import {render} from "@testing-library/react"
import Barchart from "../Components/Barchart";

describe('Barchart', () => {

    it('Renders a Victory BarChart Component', ()=>{
        const {getByTestId} = render(<Barchart/>);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const barchartComponent = getByTestId("barchart");
        expect(barchartComponent).toBeInTheDocument();
    });

    it('Accepts props', () => {
        const items = [
            { assignment: 1, fun: 3, difficulty: 2 },
            { assignment: 2, fun: 5, difficulty: 1 },
            { assignment: 3, fun: 2, difficulty: 4 },
        ];

        const { container } = render(<Barchart items={items} />);
        // eslint-disable-next-line testing-library/no-node-access
        expect(container.firstChild).toBeDefined();
    });
});


