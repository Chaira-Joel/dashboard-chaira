import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import studentDataArray from "../StudentData/Data";
import Barchart from "./Barchart";
import './Studentprofile.css'


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
    const assignments = studentDataArray
        .filter(item => item.name.toLowerCase() === name.toLowerCase())
        .map((item, index)=>{
        return {
            id: index+1,
            name: item.name,
            assignment: item.assignment,
            difficulty: parseInt(item.difficulty),
            fun: parseInt(item.fun)
        };
        })

    return (
        <div className ="student-profile" data-testid="student-profile" >
            <h4> This is the page of {studentData.name}</h4>
            <p>{studentData.name} gave the following rating</p>
            <Barchart items={assignments}/>
        </div>
    );
}

export default StudentProfile;
