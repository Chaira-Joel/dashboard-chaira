import React from "react"
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup} from "victory";


const data = [
    {id: 1, name:"piet", assignment: "a45", difficulty:1, fun: 5},
    {id: 2, name:"klaas", assignment: "8hb", difficulty:5, fun: 4},
    {id: 3, name:"petra", assignment: "2b", difficulty:4, fun: 2},
    {id: 4, name:"harrie", assignment: "5b", difficulty:1, fun: 1},
    {id: 5, name:"petra", assignment: "a45", difficulty:3, fun: 3},
];

function Barchart(){
    return(
        <div data-testid="barchart">

<VictoryChart
    width={400}
    height={300}
    domainPadding={20}
    theme={VictoryTheme.material}>

    <VictoryAxis
        tickValues={[1,2,3,4,5]}
        tickFormat={data.assignment}
        />

    <VictoryAxis
        dependentAxis
        tickFormat={(x)=>(`${x /1}`)}
        />

    <VictoryGroup
        offset={20}
        colorScale={"qualitative"}>

            <VictoryBar
                barWidth={10}
                style={{ data: { fill: "red" } }}
                data={data}
                x={"assignment"}
                y={"difficulty"}
       />

            <VictoryBar
             barWidth={10}
             style={{ data: { fill: "blue" } }}
               data={data}
             x={"assignment"}
             y={"fun"}
    />
    </VictoryGroup>
</VictoryChart>
        </div>
    )
}
export default Barchart


