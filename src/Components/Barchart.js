import React from "react"
import {useState} from "react";
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup} from "victory";

function Barchart({items}){

    const [showFun, setShowFun] = useState(true); //state variable for fun filter
    const [showDifficulty, setShowDifficulty] = useState(true);// state variable for difficulty filter

    const dataDifficulty = items.map ((item) => ({
        assignment: item.assignment,
        difficulty: item.difficulty,
    }))
    const dataFun = items.map ((item) => ({
        assignment: item.assignment,
        fun: item.fun
    }))

    return(
        <div data-testid="barchart">
            <label>
                <input
                    type="checkbox"
                    checked={showFun}
                    onChange={(e)=> setShowFun(e.target.checked)}
                    />
                Show fun ratings
            </label>
                <label>
                    <input type="checkbox"
                           checked={showDifficulty}
                           onChange={(e)=> setShowDifficulty(e.target.checked)}
                           />
                    Show difficulty ratings
                </label>
<VictoryChart
    width={500}
    height={300}
    domainPadding={{ x: [20, 20], y: [0, 10] }}
    theme={VictoryTheme.material}
    width={800}
    height={200}>

    <VictoryAxis
        label="assignment"
        tickValues={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]}
        tickFormat={items.assignment}
        style={{
            axisLabel: { padding: 30 },
            Label:{fontSize: 6},
            tickLabels:{
                fontSize:2,
                angle:-90,
                verticalAnchor: 'middle',
                fontsize:7,
                padding:15
            }}}
    />

    <VictoryAxis
        label="grading"
        dependentAxis
        tickFormat={x => `${x}`}
        style={{
            axisLabel: { padding:25 },
            Label:{fontSize: 6},
            tickLabels:{
                fontSize:4
            }}
        }/>

    <VictoryGroup
        offset={10}
        colorScale={"qualitative"}>

        {showDifficulty &&
            <VictoryBar
                barWidth={2}
                style={{ data: { fill: "tomato" } }}
                data={dataDifficulty}
                x={"assignment"}
                y={"difficulty"}
                animate={{
                    duration:2000,
                    onLoad: {duration:1000},
                }}

       />
        }
        {showFun &&

            <VictoryBar
             barWidth={2}
             style={{ data: { fill: "gold" } }}
               data={dataFun}
             x={"assignment"}
             y={"fun"}
             animate={{
                 duration:1500,
                 onLoad: {duration:500},
             }}
    />
        }
    </VictoryGroup>
</VictoryChart>
        </div>
    )
}
export default Barchart


