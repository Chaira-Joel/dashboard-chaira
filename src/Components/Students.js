import React from "react"
import {Link} from "react-router-dom";
import StudentProfile from "./StudentProfile";


function Students({items}) {
    const ListStudents = items ? items.map(item => (

        <Link to={`/students/${item.id}`} key={item.id}>
            {item.name}

        <StudentProfile
            key= {item.id}
            id = {item.id}

        />
            </Link>
    )) : null;

    return (
        <div>
            <h1>Click on the name</h1>
            {ListStudents}
        </div>

    );
}

export default Students;
