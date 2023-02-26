import React from "react"
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup} from "victory";

function Barchart({items}){
    return(
        <div data-testid="barchart">

<VictoryChart
    width={550}
    height={300}
    domainPadding={20}
    theme={VictoryTheme.material}>

    <VictoryAxis
        tickValues={[1,2,3,4,5,6,7]}
        tickFormat={items.name}
        />

    <VictoryAxis
        dependentAxis
        tickFormat={(x)=>(`${x /1}`)}
        />

    <VictoryGroup
        offset={20}
        colorScale={"qualitative"}>

            <VictoryBar
                barWidth={1}
                style={{ data: { fill: "red" } }}
                data={items}
                x={"assignment"}
                y={"difficulty"}
       />

            <VictoryBar
             barWidth={1}
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


