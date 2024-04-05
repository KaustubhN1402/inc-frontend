import { useState , useEffect } from "react";

function EscortsList() {
    const [escorts, setEscorts] = useState( [] )
    useEffect( () => {
        fetch( "http://localhost:8080/escorts" )
            .then( (res) => { return res.json() } )
            .then( (data) => {
                console.log( data )
                setEscorts( data )
            })
    } , [] )
    return (
        <div>
            {
                escorts.map( (escort) => {
                    return (
                    <div>
                        <p>ID: {escort.escortId}</p> 
                        <p>Name: {escort.name}</p>
                        <p>Contact Number: {escort.contactNumber}</p>
                        <p>Allocated Judge: {escort.judgeId}</p>
                    </div>
                    )
                } )
            }
        </div>
    )
}

export default EscortsList;