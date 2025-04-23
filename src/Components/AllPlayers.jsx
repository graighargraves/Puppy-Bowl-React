import { useState, useEffect } from "react";

function AllPlayers({players, setPlayers}){
console.log(players)

async function handleRemove(id) {
    try{
        await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-pt/players/${id}`,{
            method: "Delete",
        })
        const updatePlayers = players.filter((player)=> player.id !== id)
        setPlayers(updatePlayers)
    } catch (error){
        console.error("Error removing player:", error)
    }
}

    return(
        <>
        {players.map((player)=>{
                const {name, id, imageUrl} = player;
                return (
                    <div key={id}> 
                        <img src ={imageUrl} style={{height: "400px"}}/>
                        <h4>{name}</h4>
                        <button onClick={()=> handleClick(id)}>View Player</button>
                        <button onClick={()=> handleRemove(id)}Remove>Remove Player</button>
                    </div>
                )
            })
        }
        </>
    )

}

export default AllPlayers