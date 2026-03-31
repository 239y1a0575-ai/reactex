function clickhandler(){
    const handleclick =()=> {
        alert("button clicked!");
    };
    return (
        <div>
            <button onClick={handleclick}>click me</button>
        </div>
    );
}
export default clickhandler;