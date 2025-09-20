import React, { useEffect, useRef, useState } from 'react';

function StopWatch(){
    const[ Isrunning, setRunning] = useState(false);
    const[elapsedtime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);
    const startTime = useRef(0);

    useEffect(() => {
       if(Isrunning){ intervalRef.current = setInterval(()=> {
            setElapsedTime(Date.now() - startTime.current);
        }, 10);}
        else{
            clearInterval(intervalRef.current);
        }

        return() => {
            clearInterval(intervalRef.current);
        }
    }, [Isrunning])

    function start(){
        setRunning(true);
        startTime.current = Date.now() - elapsedtime;
    }
    function stop(){
       let rn = setRunning(false);
        console.log(rn)
    }
    function reset(){
       setElapsedTime(0);
       setRunning(false)
    }
    function formatTime(){
        let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedtime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedtime / (1000) % 60);
        let milisec = Math.floor((elapsedtime % 1000) / 10); 

        // minutes = String().padStart(2, "0");
        // seconds = String().padStart(2, "0");
        // milisec = String().padStart(2, "0");
         return `${minutes}:${seconds}:${milisec}`;
    }
    return (
        <div className='stop-watch'>
            <div className='display'>{formatTime()}</div>
            <div className='controls'>
                <button onClick={start} className='start'>Start</button>
                <button onClick={stop} className='stop'>Stop</button>
                <button onClick={reset} className='reset'>Reset</button>
            </div>
        </div>
    );
};

export default StopWatch;