import React, { Component } from 'react';
import Conditional from './Conditional'
class LifeCycleMethod extends Component{
    constructor(){
        super()
        this.state={
            isLoading:true
        }
    }
    componentDidMount(){
        setTimeout(() => {
           this.setState({ 
               isLoading:false
           })
        }, 1500);
    }

render() {
    return (
         <div>
         {this.state.isLoading ?
         <h1>Loading...</h1>:
         <Conditional/>}
         
         {/*OR <Conditional isLoading={this.state.isLoading}/> */}
         </div>
    );
}

}
export default LifeCycleMethod;
// class LifeCycleMethod extends Component{
//     constructor(){
//         super()
//         this.state={}
//     }

// static getDerivedStateProps(props,state){
//     //return the new updated state based upon the props
// }

// getSnapshotBeforeUpdate(){
//     // allow to create a backup of the current way things are
// }

//     componentDidMount(){
// //Get the data i need to correctly display
//     }

//     // componentWillRecieveProps(nextProps){
//     //     if(nextProps.whatever!==this.props.whatever){
//     //         //do something important her
//     //     }
//     // } -->depericated this method

//     shouldComponentUpdate(nextProps,nextState){//recieve incoming props ,incoming State
//         //it's optimize the our app
//     //return true if want it to update
//     //return false if don't want to update
//     }

//     componentWillUnmount(){
//         // use for disappear of screen/unmount of screen
// //cleanup or teardown your code before your component disappears
//    //(ex. remove event listeners)
//     }


//     render(){
//         return(
//             <div>

//             </div>

//         )
//     }
// }

// export default LifeCycleMethod;