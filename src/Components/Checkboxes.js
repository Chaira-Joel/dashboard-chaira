import React from "react"

function Checkboxes({items}){
    return (
        <div className="checkboxes">
            <label>Fun (gold)
            <input
                type="checkbox"
                id="fun"
                value="fun"
                data-testid="fun"
                />
            </label>

            <label>Difficult (red)
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