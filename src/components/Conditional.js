import React from 'react';
function Conditional(props){
//condition? statement if true :statement if false
 return(//wrapping inside the curley brackets
     <div>
     
     {/* {props.isLoading===true */}
 {props.isLoading?<h1>Loading...</h1>:<h1>Some cool stuff about conditional 
 rendering</h1>}
 
 </div>
 )
}
    // if(props.isLoading===true){
    //     return (
    //         <h1>Loading...</h1>
    //      )
    // }
    // // else{
    // return(
    //      <h1>Some cool stuff about conditional rendering</h1>
    // )
    // }
 //}

export default Conditional