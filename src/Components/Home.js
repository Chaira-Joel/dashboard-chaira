import React from "react"
import {useState} from "react";
import Barchart from "./Barchart";
import Table from "./Table";
import Students from "./Students";
import studentDataArray from "../StudentData/Data";

const transformedStudentData = studentDataArray.map((item, index)=>{
    return {
        id: index+1,
        name: item.name,
        assignment: item.assignment,
        difficulty: parseInt(item.difficulty),
        fun: parseInt(item.fun)
    };
})

function HomePage(){

    const [items, setItems] = useState(transformedStudentData);

    const sortAZ= (key) => {
        const newStudentList = [...items]
        newStudentList.sort((a,b)=>(a[key].toLowerCase() < b[key].toLowerCase()) ? -1 :1)
        setItems(newStudentList)
    }

    const sortRating = (key) =>  {
        const newStudentList = [...items]
        newStudentList.sort((a, b) => (a[key] - b[key]))
        setItems(newStudentList)
    }

    const uniqueStudents = transformedStudentData.reduce((result, current)=>{
        if(result.some(item=> item.name === current.name)){
            return result;
        }
        result.push(current);
        return result;
    }, []);

    const uniqueAssignments = transformedStudentData.reduce((result, current)=>{
        if(result.some(item=> item.assignment === current.assignment)){
            return result;
        }
        result.push(current);
        return result;
    }, []);


    return(
        <div className="main-homepage" data-testid="main-homepage" >
            <h1> This is the homepage </h1>
            <Students items={uniqueStudents}/>
            <Barchart
                items={uniqueAssignments}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <Table items={items}
                   sortAZ={sortAZ}
                    sortRating={sortRating}/>

        </div>


    )
}

export default HomePage
