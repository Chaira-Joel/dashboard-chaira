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

                <th className="table-head-row">Name
                    <button>Sort</button>
                </th>
                <th className="table-head-row">Assignment
                    <button>Sort</button></th>
                <th className="table-head-row">Difficulty
                    <button>Sort</button></th>
                </thead>

                <tbody className="table-body">{ListItems}</tbody>

            </table>
        </div>
    )
}

export default Table