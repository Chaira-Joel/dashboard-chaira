import React from "react"

function TableItem({id, name, assignment, difficulty, fun}){
    return(
        <tr
            key={id}>
            <td>{name}</td>
            <td>{assignment}</td>
            <td>{difficulty}</td>
            <td>{fun}</td>
        </tr>
    )
}
export default TableItem
