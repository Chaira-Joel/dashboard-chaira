import React from "react"
import TableItem from "./TableItem";

function Table({items,sortAZ,sortRating}){

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
        <div className="table-container" data-testid="table-container" >
            <table className="table" data-testid="table" >
                <thead className="table-head" data-testid="table-head" >
                <th className="table-head-row">Name
                    <button onClick={ ()=> {sortAZ('name')}}>Sort by name</button>
                </th>
                <th className="table-head-row">Sort by assignment
                    <button onClick={()=>{sortAZ('assignment')}}>Sort</button>
                </th>
                <th className="table-head-row">Sort by difficulty
                    <button onClick={()=>{sortRating('difficulty')}}>Sort</button>
                </th>
                </thead>
                <tbody className="table-body">{ListItems}</tbody>
            </table>
        </div>
    )
}

export default Table