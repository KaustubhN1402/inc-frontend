import { useState , useEffect } from "react";

function TeamsList() {
    const [teams, setTeams] = useState( [] )
    useEffect( () => {
        // http://localhost:8080/escorts
        fetch( "teams.json" )
            .then( (res) => { return res.json() } )
            .then( (data) => {
                console.log( data )
                setTeams( data )
            })
    } , [] )
    return (
        <div className="main">
            {
                teams.map( (team) => {
                    return (
                    <div>
                        <p>ID: {team.teamId}</p> 
                        <p>Name: {team.name}</p>
                        <p>Abstract: {team.abstract}</p>
                        <p>Domain: {team.domain}</p>
                        <p>project Type: {team.projectType}</p>
                        <p>Block No: {team.roomNumber}</p>
                        <p>Institute: {team.instituteName}</p>
                    </div>
                    )
                } )
            }
        </div>
    )
}

export default TeamsList;