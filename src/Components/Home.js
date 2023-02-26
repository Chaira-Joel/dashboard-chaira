import React from "react"
import {useState} from "react";
import Barchart from "./Barchart";
import Checkboxes from "./Checkboxes";
import Table from "./Table";
import studentDataArray from "../StudentData/Data";
import Students from "./Students";


function HomePage(){
    const transformedStudentData = studentDataArray.map((item, index)=>{
        return {
            id: index+1,
            name: item.name,
            assignment: item.assignment,
            difficulty: parseInt(item.difficulty),
            fun: parseInt(item.fun)
        };
    })
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


    return(
        <div>
            <h1> This is the homepage </h1>
            <Students
            items={uniqueStudents}/>

            <Checkboxes/>

            <Barchart
                items={items}/>


            <Table
                items={items}
                sortAZ={sortAZ}
                sorRating={sortRating}/>

        </div>


    )
}

export default HomePage
