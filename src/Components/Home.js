import React from "react"
import Student from "./Students";
import Barchart from "./Barchart";
import Checkboxes from "./Checboxes";
import Table from "./Table";

    class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [

                {id: 1, name:"piet", assignment: "a45", difficulty:"1", fun: "5"},
                {id: 2, name:"klaas", assignment: "8hb", difficulty:"5", fun: "4"},
                {id: 3, name:"petra", assignment: "2b", difficulty:"4", fun: "2"},
            ]
        };
    }

    render() {
        return (
            <div>
                <h1> This is the homepage </h1>
                <Student
                    items={this.state.items}
                    />
                <Checkboxes/>
                <Barchart/>
                <Table/>

            </div>
        );

    }}

    export default HomePage;