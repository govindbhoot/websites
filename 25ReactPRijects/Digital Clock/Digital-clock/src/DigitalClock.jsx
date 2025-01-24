import { useState,useEffect } from "react";


function DigitalClock(){

    const[time,settime]= useState(new Date());


    useEffect(()=>{
        const IntervalId=setInterval(()=>{
            settime(new Date())
        },1000)

        return(()=>{
            clearInterval(IntervalId);
        })

    },[])

    function FormatTime(){
        let hours = time.getHours();
        const minutes =time.getMinutes();
        const seconds =time.getSeconds();
        const maridiam= hours >=12  ? "PM" : "AM"

        hours =hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${maridiam}`;
        }


        function padZero(number){
            return (number <10 ? "0" :"") + number

        }



    return(<div className="clock-container">
        <div className="clock">
            <span>{FormatTime()}</span>
        </div>

    </div>)

}
export default DigitalClock