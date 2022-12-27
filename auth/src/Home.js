import React from "react";

function Home() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div className="container center mt-5">
            <h1>Home Page</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}
export default Home;