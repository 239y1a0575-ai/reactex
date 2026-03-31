import {useState} from "react";


function SimpleForm(){
    const [name,setName]
    =useState("");
    const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`Submitted name:${name}`);

    };

return(
    <form onSubmit={handleSubmit}>
        <input type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <button type="submit">Submit</button>

    </form>

);
}
export default SimpleForm;