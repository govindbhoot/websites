 import { useRef } from 'react'
import styles from './Chat.module.css'
 import Markdown from 'react-markdown'
import { useEffect } from 'react'


 const Welcome_Message= {
    role:"assistant",
    content:"Hello, How can I Assist you? "
 }
 
 
 
 function Chat({messages}){
   const messageEndRef = useRef(null)

   useEffect(() => {
      messageEndRef.current?.scrollIntoView({behaviour: "smooth"})

   },[messages])


    return (
         <div className={styles.Chat}>
         {[Welcome_Message, ...messages].map(({ role,content},index) => (
        <div key={index} className={styles.Message} data-role={role}>
           <Markdown>{content}</Markdown> 
            </div>

    ))}
    <div ref={messageEndRef}/>
    </div>
     
    
    )
}

export default Chat


