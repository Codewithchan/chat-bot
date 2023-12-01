
import React from 'react'
import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import ChatMessage from './ChatMessage'
import { analyze } from '../utils'

export const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      message: 'Hi, May i have your name?'
    }
  ]);

  const [text, setText] = useState('0');

  const onsend =()=>{
  let list=[...messages , {message:text, user:true}];

    if(list.length>2){
      const reply = analyze(text);
      list = [
        ...list, 
       {
        message: reply
       }
      ];
    }

    else{
      list=[
        ...list,
        {
          message: `Hi , ${text}`
        },
        {
          message: "How can i help you"
        },
      ];
    }
    setMessages(list)
    setText("")
    setTimeout(()=>{
      document.querySelector("#copyrights").scrollIntoView();
    },1);
  };


  return (
    <>
      <div className='d-flex align-item-center justify-content-center' >
        <img src='chat.png' alt='icon' height={200} width={200} ></img>
      </div>

      <div className='chat-message'>
        {
          messages.length > 0 && messages.map((data) => <ChatMessage {...data}/>)
        }
        <div className='d-flex mt-2'>
          <input type='text' className='form-control' value={text} onChange={(e) => setText(e.target.value)}/>
          <button class="ui pink button ms-3" fdprocessedid="1h95oq" onClick={onsend}> Send</button>
        </div>
        <div id='copyrights' className='mt-3'>Copyrights reserved CK Chan 2023....</div>
      </div>
    </>
  )
}
