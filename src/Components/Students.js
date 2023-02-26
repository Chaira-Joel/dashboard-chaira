import React from "react"
import StudentProfile from "./StudentProfile";


function Students({items}) {

    const ListStudents = items ? items.map(item => (
        <StudentProfile
            key={item.id}
            name ={item.name}
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
