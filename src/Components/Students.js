import React from "react";
import { Link } from "react-router-dom";

//this component renders a link for every student. the result would be localhost/studentname
function Students({ items }) {
    const ListStudents = items
        ? items.map((item) => (
            <div key={item.id}>
                <Link to={`/${item.name}`}>
                    <h2>{item.name}</h2>
                </Link>

            </div>
        ))
        : null;

    return (
        <div>
            {ListStudents}
        </div>
    );
}

export default Students;
