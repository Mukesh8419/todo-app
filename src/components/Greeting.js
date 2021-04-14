import React from "react";
function Greeting() {
  const date = new Date(2021,4,14,15);
  const hours = date.getHours();
  let timeofDay;
    const styles = {  
    fontSize: 30 
    };

  
  if (hours < 12) {
    timeofDay = "morning";
    styles.color="green";
  } else if (hours >= 12 && hours < 17) {
    timeofDay = "afternoon";
    styles.color="yellow"
  } else {
    timeofDay = "night";
    styles.color="black"
  }

  return <h1 style={styles}>Good {timeofDay}</h1>;
}
export default Greeting;
