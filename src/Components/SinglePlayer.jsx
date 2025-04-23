import { useParams } from "react-router-dom"



function SinglePlayer (singlePlayer, setSinglePlayer){
    const {id} =  useParams();

return(
    <div>
        <h2>Player ID: {id}</h2>
    </div>

)

}
export default SinglePlayer