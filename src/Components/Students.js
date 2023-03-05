import React from "react";
import { Link } from "react-router-dom";

//this component renders a link for every student. the result would be localhost/studentname
function Students({ items }) {
    const ListStudents = items
        ? items.map((item) => (
            <div className="student-links" key={item.id}>
                <Link to={`/${item.name}`}>
                    <h5>{item.name}</h5>
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
