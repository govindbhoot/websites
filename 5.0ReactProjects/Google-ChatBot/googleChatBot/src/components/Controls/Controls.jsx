import { useState } from 'react'
import styles from './Controls.module.css'

function Controls({onSend}){
    const [content,setContent] = useState("");

    function handleContentChange(event){
        setContent(event.target.value)
    }

    function handleContentSend(){
        if(content.length > 0){
            onSend(content);
            setContent("");

        }
    }

    function handleEnterPress(event){
        if(event.key==='Enter'&& !event.shiftkey){
            event.preventDefault();
            handleContentChange();
        }

    }





    return(
        <div className={styles.Controls}>
            <div className={styles.TextAreaContainer}>
                <textarea className={styles.TextArea} 
                placeholder="Message AI Chatbot"
                value={content}
                onKeyDown={handleEnterPress}
                onChange={handleContentChange}>

                </textarea>
            </div>
            <button
            className={styles.Button}
            onClick={handleContentSend}>
                <SendIcon/>
                </button>
        </div>
    )
}

function SendIcon(){

    return (
        <svg
         xmlns="http://www.w3.org/2000/svg" height="24px" 
        viewBox="0 -960 960 960" width="24px" fill="#5f6368">
        <path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z"/></svg>
    )
}

export default Controls