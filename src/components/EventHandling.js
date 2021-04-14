import React from 'react';

function handleClick() {
    console.log("I was clicked");
}

function EventHandling() {
    return(
        <div>
        <img onMouseOver={()=>console.log("Hovered!")}  
        src="https://www.fillmurray.com/200/100" alt="fillmurray"/>
        <br/>
        <br/>
        <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default EventHandling;