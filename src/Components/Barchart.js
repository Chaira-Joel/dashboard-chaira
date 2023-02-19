import React from "react"
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup} from "victory";


function Barchart({items}){
    return(
        <div data-testid="barchart">

<VictoryChart
    width={400}
    height={300}
    domainPadding={20}
    theme={VictoryTheme.material}>

    <VictoryAxis
        tickValues={[1,2,3,4,5,6,7]}
        tickFormat={items.assignment}
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
                data={items}
                x={"assignment"}
                y={"difficulty"}
       />

            <VictoryBar
             barWidth={10}
             style={{ data: { fill: "blue" } }}
               data={items}
             x={"assignment"}
             y={"fun"}
    />
    </VictoryGroup>
</VictoryChart>
        </div>
    )
}
export default Barchart


