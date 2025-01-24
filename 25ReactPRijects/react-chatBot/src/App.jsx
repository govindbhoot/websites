import { useState } from 'react'
import { Assistant } from './Assistant/openai';

import styles from './App.module.css'
import Chat from './components/Chat'
import Controls from './components/Controls/Controls';
import Loader from './components/Loader';

 


 function App()  {
  const assistant =new Assistant()

  const [messages,setMessages] = useState([]);
  const [isLoading,setisLoading] = useState(false)


  function addMessage(message){
    setMessages((prevMessages) => [...prevMessages, message ])

  }

  async function handleContentSend(content){
    addMessage({ content, role: "user"})
    setisLoading(true);

    
    try {
      const result =await assistant.chat(content,messages)
      
      addMessage({ content:result, role: "assistant"})

      
    } catch (error) {
      addMessage({ content: "sorry, I coudn't process your request. please try again", 
        role: "system"})
      
    }finally {
      setisLoading(false)
    }
  }
  

  return (
    
      <>
      <div className={styles.App}>
        {isLoading && <Loader/>}
        <header className={styles.Header }>
        <img className={styles.Logo } src="/chatbot.png" alt="" />
        <h2 className={styles.Title}>AI ChatBot</h2>
        </header>
        <div className={styles.ChatContainer}>
          <Chat messages={messages}/>
          </div> 
          <Controls isDisabled={isLoading} onSend={handleContentSend}/>
        </div>

      </>
  )
}






export default App