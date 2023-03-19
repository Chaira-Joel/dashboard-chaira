import React from "react"
import {useState} from "react";
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup, VictoryContainer} from "victory";
import '../Styles/Barchart.css'

function Barchart({items}){

    const [showFun, setShowFun] = useState(true); //state variable for fun filter
    const [showDifficulty, setShowDifficulty] = useState(true);// state variable for difficulty filter

    const dataDifficulty = items?.map ((item) => ({
        assignment: item.assignment,
        difficulty: item.difficulty,
    }));
    const dataFun = items?.map ((item) => ({
        assignment: item.assignment,
        fun: item.fun
    }));

    return(
        <div className="checkbox">

            <label className="switch">
                <input
                    type="checkbox"
                    checked={showFun}
                    onChange={(e)=> setShowFun(e.target.checked)}
                    />

                Show fun ratings
            </label>
                <label className="switch">
                    <input type="checkbox"

                           checked={showDifficulty}
                           onChange={(e)=> setShowDifficulty(e.target.checked)}
                           />

                    Show difficulty ratings
                </label>

    <div className="barchart" data-testid="barchart">
<VictoryChart
    containerComponent={<VictoryContainer height={400}/>}
    width={900}
    height={350}
    domainPadding={{ x: [20, 20], y: [0, 10] }}
    theme={VictoryTheme.material}
   >


    <VictoryAxis
        label="assignment"
        tickValues={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]}
        tickFormat={(value, index) => items && items[index] ? items[index].assignment.toString() : ""}
        style={{
            axisLabel: { padding: 4, fontSize: 9 },
            tickLabels:{
                fontSize:5,
                angle:-90,
                padding:42
            }}}
    />

    <VictoryAxis
        label="grading"
        dependentAxis
        tickFormat={x => `${x}`}
        style={{
            axisLabel: { padding:25, fontSize: 9 },
            tickLabels:{
                fontSize:5
            }}
        }/>

    <VictoryGroup
        offset={10}
        colorScale={"qualitative"}>

        {showDifficulty &&
            <VictoryBar
                barWidth={3}
                style={{ data: { fill: "tomato" } }}
                data={dataDifficulty}
                x={"assignment"}
                y={"difficulty"}
                animate={{
                    duration:1500,
                    onLoad: {duration:1000},
                }}

       />
        }
        {showFun &&

            <VictoryBar
             barWidth={3}
             style={{ data: { fill: "gold", width: 8 } }}
               data={dataFun}
             x={"assignment"}
             y={"fun"}
             animate={{
                 duration:1500,
                 onLoad: {duration:1000},
             }}
    />
        }
    </VictoryGroup>
</VictoryChart>
        </div>
        </div>
    )
}
export default Barchart


