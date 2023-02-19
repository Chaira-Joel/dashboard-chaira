import React from "react"
import StudentProfile from "./StudentProfile";
import Barchart from "./Barchart";
import Table from "./Table";


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
            <h1>Click on the name</h1>
            <a href="">{ListStudents}</a>
        </div>

    );
}

export default Students;
