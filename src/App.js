import React from 'react'
import './components/style.css';
// import ContactCardDetails from './components/ContactCardDetails';
// import Greeting from "./components/Greeting";
// import EventHandling from './components/EventHandling';
import  TodoApp from './components/TodoApp'
import LifeCycleMethod from './components/LifeCycleMethod'
function App() {
 return(
     <div>
     {/* <ContactCardDetails/>
     <Greeting/>
     */}
{/* <EventHandling/> */}
<LifeCycleMethod/>
        <TodoApp/>
        </div>

 )

    
}

export default App;