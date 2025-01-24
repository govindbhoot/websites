/* import styles from './Button.module.css'

function Button(){
    return(
        <button className={styles.button}>click me</button>
    )
}

export default Button*/

//External css
//Inline CSS

/*function Button(){
    const styles={
        backgroundColor: "hsl(200,100%,50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius:"5px",
        border:"none",
        cursor:"pointer",
    } 
    return(
        <button style={styles}>click me</button>
    )
}*/

function Button(){
    const handelclick = (e) => e.target.textContent = "OUCH!";




  

    


    return(<button onDoubleClick={(e) => handelclick(e)}>Click Me 🤪</button>)
}





export default Button