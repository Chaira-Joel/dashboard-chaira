import React from "react"
import TableItem from "./TableItem";

function Table({items}){

        const ListItems = items ? items.map (item => (
            <TableItem
                key = {item.id}
                id = {item.id}
                name = {item.name}
                assignment = {item.assignment}
                difficulty = {item.difficulty}
                fun = {item.fun}
            />
        )) : null

    return(
        <div className="table-container">
            <table className="table">
                <thead className="table-head">

                <th className="table-head-row">Name</th>
                <button>Sort</button>

                <th className="table-head-row">Assignment</th>
                <button>Sort</button>

                <th className="table-head-row">Difficulty</th>
                <button>Sort</button>
                </thead>

                <tbody className="table-body">{ListItems}</tbody>

            </table>
        </div>
    )
}

export default Table