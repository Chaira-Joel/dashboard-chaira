import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import studentDataArray from "../StudentData/Data";
import Barchart from "./Barchart";



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
        <div className ="student-profile">
            <h4> This is the page of {studentData.name}</h4>
            <p>{studentData.name} gave the following rating</p>
            <Barchart items={[studentData]}/>
        </div>
    );
}

export default StudentProfile;
