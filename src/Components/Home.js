import React from "react"
import Student from "./Students";
import Barchart from "./Barchart";
import Checkboxes from "./Checkboxes";
import Table from "./Table";
import Data from '../StudentData/Data'

    class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [

                {id: 1, name:"piet", assignment: "a45", difficulty:1, fun: 5},
                {id: 2, name:"klaas", assignment: "8hb", difficulty:5, fun: 4},
                {id: 3, name:"petra", assignment: "2b", difficulty:4, fun: 1},
            ]
        };
        this.sortAZ = this.sortAZ.bind(this)
        this.sortRating = this.sortRating.bind(this)
    }

        sortAZ(key){
            const newStudentList = [...this.state.items]
            newStudentList.sort((a,b)=>(a[key].toLowerCase() < b[key].toLowerCase()) ? -1 :1)
            this.setState({items:newStudentList})
        }

        sortRating(key) {
            const newStudentList = [...this.state.items]
            newStudentList.sort((a, b) => (a[key] - b[key]))
            this.setState({songs: newStudentList})
        }
    render() {
        return (
            <div>
                <h1> This is the homepage </h1>
                <Student
                    items={this.state.items}
                    />
                <Checkboxes/>

                <Barchart
                items={this.state.items}/>

                <Data/>

                <Table
                items={this.state.items}
                sortAZ={this.sortAZ}
                sorRating={this.sortRating}/>

            </div>
        );

    }}

    export default HomePage;