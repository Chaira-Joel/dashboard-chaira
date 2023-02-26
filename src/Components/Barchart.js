import React from "react"
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup} from "victory";

function Barchart({items}){
    return(
        <div data-testid="barchart">

<VictoryChart
    width={500}
    height={300}
    domainPadding={{ x: [20, 20], y: [0, 10] }}
    theme={VictoryTheme.material}>

    <VictoryAxis
        tickValues={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]}
        tickFormat={items.assignment}
        style={{
            tickLabels:{
                fontSize:2.5,
                angle:-90,
                verticalAnchor: 'middle',
                padding:15
            }}}
    />

    <VictoryAxis
        dependentAxis
        tickFormat={(x)=>(`${x /1}`)}
        style={{
            tickLabels:{
                fontSize:2.5
            }}
        }/>

    <VictoryGroup
        offset={10}
        colorScale={"qualitative"}>
            <VictoryBar
                barWidth={2}
                style={{ data: { fill: "red" } }}
                data={items}
                x={"assignment"}
                y={"difficulty"}
       />

            <VictoryBar
             barWidth={2}
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


