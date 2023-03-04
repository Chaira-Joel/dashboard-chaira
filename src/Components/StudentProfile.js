import React from "react"
import {useParams} from "react-router-dom";
import Barchart from "./Barchart";

function StudentProfile({items}){
    const {id}= useParams();
    const student = items.find((item) => item.id ===parseInt(id));


    const {name, difficulty, fun, assignment} = student;

    return(
        <div>
            <h1>{name}</h1>
            <Barchart items={[{assignment, difficulty,fun}]}/>
        </div>
    )
}




export default StudentProfile