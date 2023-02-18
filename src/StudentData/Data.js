import Papa from 'papaparse'
import {useEffect} from "react"
import MockData from './StudentData.csv'

function Data(){
    useEffect(()=>{
        const fetchParseData = async()=>{
            Papa.parse(MockData, {
                download:true,
                delimiter:",",
                complete:((result)=>{
                    console.log(result.data)
                    result = result.data
                    return result
                })
            })
        }
        fetchParseData()
    }, [])

    return(
        <div>
            <h1>Data</h1>
        </div>
    )
}

export default Data

