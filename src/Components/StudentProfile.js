import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import studentDataArray from "../StudentData/Data";
import Barchart from "./Barchart";

const transformedStudentData = studentDataArray.map((item, index)=>{
    return {
        id: index+1,
        name: item.name,
        assignment: item.assignment,
        difficulty: parseInt(item.difficulty),
        fun: parseInt(item.fun)
    };
})

const uniqueAssignments = transformedStudentData.reduce((result, current)=>{
    if(result.some(item=> item.assignment === current.assignment)){
        return result;
    }
    result.push(current);
    return result;
}, []);

function StudentProfile() {
    const { name } = useParams();
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        const student = transformedStudentData.find(
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
        <div className ="studentprofile">
            <h4> This is the page of {studentData.name}</h4>
            <p>{studentData.name} gave the following rating</p>
            <Barchart items={uniqueAssignments}/>
        </div>
    );
}

export default StudentProfile;
