import { useState, useEffect } from "react";
import { Link } from "react-router-dom"



function AllPlayers({players, setPlayers}){
    const [searchTerm, setSearchTerm] = useState("")
console.log(players)
const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


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
        <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: "1rem", padding: "0.5rem", width: "200px" }}
        />
        {filteredPlayers.map((player)=>{
                const {name, id, imageUrl} = player;
                return (
                    <div key={id}> 
                        <img src ={imageUrl} style={{height: "400px"}}/>
                        <h4>{name}</h4>
                        <Link to={`/players/${id}`}><button>View Player</button></Link>
                        <button onClick={()=> handleRemove(id)}Remove>Remove Player</button>
                    </div>
                )
            })
        }
        </>
    )

}

export default AllPlayers