import React from "react";
import { Link } from "react-router-dom";
import './Students.css'

//this component renders a link for every student. the result would be localhost/studentname
function Students({ items }) {
    const ListStudents = items
        ? items.map((item) => (
            <div className="student-links" data-testid="student-links"  key={item.id}>
                <Link to={`/${item.name}`}>
                    <h5>{item.name}</h5>
                </Link>
            </div>
        ))
        : null;

    return (
        <div className="student-links-container">
            {ListStudents}
        </div>
    );
}

export default Students;
