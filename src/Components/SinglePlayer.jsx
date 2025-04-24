import { useParams } from "react-router-dom"



function SinglePlayer ({players}){
    const {id} =  useParams();

    const player = players.find((p)=> p.id === Number(id))

    if (!player) return <p>No Puppy Found</p>

return(
    <>
    <div>
        <p style={{fontSize: "40px", fontWeight: "bold"}}>{player?.name}</p>
        <img src={player?.imageUrl} style={{height: "500px"}}/>
        <p>Breed: {player?.breed}</p>
        <p>Status: {player?.status}</p>
        <p>Team ID: {player?.teamID}</p>
    </div>
    </>
)

}
export default SinglePlayer