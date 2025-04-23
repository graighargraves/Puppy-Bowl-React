import { useState } from "react"

function NewPlayerForm (){
const [name, setName] = useState("")
const [breed, setBreed] = useState("")
const [status, setStatus] = useState("")
const [imageUrl, setImageUrl] = useState("");

const defaultImage = ""
async function handleSubmit(event) {
    event.preventDefault()
    try{
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-pt/players", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                name,
                breed,
                status,
                imageUrl,
            })
        })
        const result = await response.json()
        console.log("Response:", data)
        setName("")
        setBreed("")
        setStatus("")
        setImageUrl("")
    } catch (error){
        console.error("Error adding players", error)
    }
}
 

return(
<>
<form onSubmit={handleSubmit}>
    <h2>ADD A NEW PUPPY PLAYER</h2>
    <label>
        Name: 
        <input value={name} onChange={(e)=> setName(e.target.value)} />
    </label>
    <br />
    <label>
        Breed:
        <input value={breed} onChange={(e)=> setBreed(e.target.value)} />
    </label>
    <br />
    <label>
          Image URL:
          <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <br />
    <label>
        Status:
    </label>
    <label>
        <input type="radio" name="status" value="bench" checked={status === "bench"} onChange={(e)=> setStatus(e.target.value)} />
        Bench
    </label>
    <label>
        <input type="radio" name="status" value="field" checked={status === "field"} onChange={(e)=> setStatus(e.target.value)} />
        Field
    </label>
    <br />
    <button type="submit">Add Puppy Player</button>
</form>
</>
)
}
export default NewPlayerForm