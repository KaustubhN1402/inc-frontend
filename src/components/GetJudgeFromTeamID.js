import { useState , useEffect } from "react";

function SelectedJudgesList() {
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
        <div>
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

function SearchBox() {
    const [ searchTerm , setSearchTerm ] = useState( '' )
    const [showComponent, setShowComponent] = useState(false);
    const buttonOnClick = () => {
        setShowComponent( true )
    }
    return (
        <div>
            <input 
                type="number"
                value={searchTerm}
                onChange={ (event) => {
                    setSearchTerm( event.target.value )
                }}
                placeholder="Search by team ID ...">
            </input>
            <button onClick={buttonOnClick}>
                Go
            </button>
            {showComponent && <SelectedJudgesList/>}
        </div>
    )
}

function GetJudgeFromTeamID() {
    return (
        <SearchBox />
    )
}

export default GetJudgeFromTeamID;