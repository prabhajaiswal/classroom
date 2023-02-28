import {useState,useEffect} from 'react'
import './App.css'
import {Button,FormControl,InputLabel,Input} from '@mui/material'
import Message from './Message';
import db from './firebase';

function App() {
  const[input,setInput] = useState('');
  const[messages,setMessages] = useState([]);
  const [username,setUsername] = useState('');
  console.log(input)
 useEffect(() => {
 db.collection('messages').onSnapshot(snapshot =>{
  setMessages(snapshot.docs.map(doc => doc.data()))
 })
 }, [input])
  useEffect(() => {
  setUsername(prompt('User name'))
  }, [])
  const sendMessage = (event) =>{
    event.preventDefault();
    setMessages([...messages,{username:username ,text :input}]);
    setInput('');
  }
  return (
    <div className="App">
      <form>
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
      <Button disabled={!input} variant="contained" type='submit' onClick={sendMessage}>Send messagess</Button>
        </FormControl>
      </form>
      <div className="section">
      {messages.map((message,i) =>{
        return(
       <div className="message" key={i}>
        <Message username={message.username} key={i} text={message.message}
        />
       </div>
        )
         } )
      }
      </div>
     </div>
  );
}

export default App;
