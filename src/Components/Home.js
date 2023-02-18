import React from "react"

    class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [

                {name:"piet", assignment: "a45", difficulty:"1", fun: "5"},
                {name:"klaas", assignment: "8hb", difficulty:"5", fun: "4"},
                {name:"petra", assignment: "2b", difficulty:"4", fun: "2"},
            ]
        };
    }

    render() {
        return (
            <div>
                <h1> This is the homepage </h1>
                <p> I will consist of: </p>
                <p> 1. bar chart with data of all students showing fun versus difficultulty rating of the assignments </p>
                <p> this bar chart has checkboxes to filter on students</p>

            </div>
        );

    }}

    export default HomePage;