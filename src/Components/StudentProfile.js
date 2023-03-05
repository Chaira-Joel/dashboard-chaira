import React from "react"


function StudentProfile ({name, assignment, difficulty, fun, id}) {

    return(
        <div>
            {name || ""}
        </div>
    )
}

export default StudentProfile