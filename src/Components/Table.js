import React from "react"

function Table(){
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

                <tbody className="table-body"></tbody>

            </table>
        </div>
    )
}

export default Table