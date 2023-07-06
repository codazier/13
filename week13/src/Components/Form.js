
import React from 'react'
import LogInButton from './log-in';



export default function Form() {
  return(
    <form>
    <label>
      Username:
      <input type="text" name="name" /><br></br>
      Password:
      <input type="text" name="name" />

    </label>
  </form>
  
  )
  
}





//export default function Form() {
  //export default function Form() {
    //const ageInputId = useId();
    //return (
    
        //<label>
          //Your first name://
          //<input name="firstName" />
       //</label>
        //<hr />
        //<label htmlFor={ageInputId}>Your age:</label>
        //<input id={ageInputId} name="age" type="number"/>
    //);
  //}
        
            
        