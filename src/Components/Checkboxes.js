import React from "react"

function Checkboxes({items}){
    return (
        <div className="checkboxes">
            <label>Fun
            <input
                type="checkbox"
                id="fun"
                value="fun"
                data-testid="fun"
                />
            </label>

            <label>Difficult
            <input
                type="checkbox"
                id="difficult"
                value="difficult"
                data-testid="difficult"
            />
            </label>
        </div>
    )
}

export default Checkboxes