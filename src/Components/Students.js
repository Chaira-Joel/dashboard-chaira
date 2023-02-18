import React from "react"
import StudentProfile from "./StudentProfile";

function Students({items}) {
    const ListStudents = items ? items.map(item => (
        <StudentProfile
            key={item.id}
            id={item.id}
            name={item.name}
            assignment={item.assignment}
            difficulty={item.difficulty}
            fun={item.fun}
        />
    )) : null;

    return (
        <div>
            <a href="">{ListStudents}</a>
        </div>

    );
}

export default Students;
