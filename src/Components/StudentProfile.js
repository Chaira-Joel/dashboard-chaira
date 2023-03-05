import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import studentDataArray from "../StudentData/Data";

function StudentProfile() {
    const { name } = useParams();
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        const student = studentDataArray.find(
            (item) => item.name.toLowerCase() === name.toLowerCase()
        );
        if (student) {
            setStudentData(student);
        }
    }, [name]);

    if (!studentData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{studentData.name}</h1>
        </div>
    );
}

export default StudentProfile;
