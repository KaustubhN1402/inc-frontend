import { useState , useEffect } from "react";

function JudgesList() {
    const [judges, setJudges] = useState( [] )
    useEffect( () => {
        // http://localhost:8080/escorts
        fetch( "judges.json" )
            .then( (res) => { return res.json() } )
            .then( (data) => {
                console.log( data )
                setJudges( data )
            })
    } , [] )
    return (
        <div className="main">
            {
                judges.map( (judge) => {
                    return (
                    <div>
                        <p>ID: {judge.judgeId}</p> 
                        <p>Name: {judge.name}</p>
                        <p>Contact Number: {judge.contactNumber}</p>
                        <p>Domain: {judge.domain}</p>
                    </div>
                    )
                } )
            }
        </div>
    )
}

export default JudgesList;