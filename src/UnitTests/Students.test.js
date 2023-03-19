import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Students from "../Components/Students";

describe("Students component", () => {
    const items = [
        { id: 1, name: "Marieke", assignment: "b88", difficulty: "5", fun: "3" },
        { id: 2, name: "Peter", assignment: "b88", difficulty: "3", fun: "5" },
        { id: 3, name: "Winston", assignment: "b98", difficulty: "9", fun: "1" },
    ];

    test("renders a list of student profile components", () => {
        render(
            <MemoryRouter>
                <Students items={items} />
            </MemoryRouter>
        );
        const studentLinks = screen.getAllByTestId("student-links");
        expect(studentLinks).toHaveLength(items.length);

        items.forEach((item) => {
            expect(screen.getByText(item.name)).toBeInTheDocument();
        });
    });
});
