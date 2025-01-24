 import styles from './Chat.module.css'


 const Welcome_Message= {
    role:"assistant",
    content:"Hello, How can I Assist you? "
 }
 
 
 function Chat({messages}){


    return (
         <div className={styles.Chat}>
         {[Welcome_Message, ...messages].map(({ role,content},index) => (
        <div key={index} className={styles.Message} data-role={role}>
            {content}</div>

    ))}
    </div>
    )
}

export default Chat


