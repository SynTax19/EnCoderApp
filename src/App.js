import { Button , FormControl, InputLabel, Input  } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState (['hello' , 'hi' , 'WhatsUp']);

  console.log(input);
  console.log(messages);
  
  const sendMessages = (event) => {
    //all the logic to send messages goes here . . .
    event.preventDefault(); //so that jabbhi enter press krta hun, the message gets reloaded on the screen. . .
    setMessages([...messages , input]); // using spread operator so that message cont. rhe purane array se ...
    setInput('');
  }


  return (
    <div className="App">
     <h1> Hello Suvrodeep! </h1>
      
    <form>   

       <FormControl>
           <InputLabel >Enter a Message . . .</InputLabel>
           <Input value={input} onChange = {event => setInput(event.target.value)} />
           <Button disabled={!input}  variant="contained" color="secondary"  type="submit" onClick={sendMessages}> Send Messages </Button> 
          
       </FormControl>

    </form>

     {/* Messages Themselves */}
     
     {
       messages.map(message => (
         <p>{message}</p>
       ))
     }
      
    </div>
  );
}

export default App;
