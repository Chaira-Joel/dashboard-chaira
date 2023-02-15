import Papa from 'papaparse'
import {useEffect} from "react"
import MockData from './StudentData.csv'

function StudentData(){
    useEffect(()=>{
        const fetchParseData = async()=>{
            Papa.parse(MockData, {
                download:true,
                delimiter:",",
                complete:((result)=>{
                    console.log(result.data)
                })
            })
        }
        fetchParseData()
    }, [])

    return(
        <div>Data</div>
    )
}

export default StudentData
