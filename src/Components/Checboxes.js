import React from "react"

function Checkboxes(){
    return (
        <div>
            <label>Fun</label>
            <input
                type="checkbox"
                id="fun"
                value="fun"
                />

            <label>Difficult</label>
            <input
                type="checkbox"
                id="difficult"
                value="difficult"
            />
        </div>
    )
}

export default Checkboxes