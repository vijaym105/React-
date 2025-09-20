import React, { useEffect, useRef, useState } from 'react';

function CompA(){
    const ref1 = useRef("Vijay")
    const ref2 = useRef("kishor");
    const ref3 = useRef("Malusare");

    useEffect(() => {
        console.log("Component Rerendered");;
    });

    function handleClick1(){
        ref1.current.focus();
        ref1.current.style.backgroundColor = "pink"
        ref2.current.style.backgroundColor = ""
        ref3.current.style.backgroundColor = ""
    }
     function handleClick2(){
        ref2.current.focus();
        ref1.current.style.backgroundColor = ""
        ref2.current.style.backgroundColor = "pink"
        ref3.current.style.backgroundColor = ""
    }
     function handleClick3(){
        ref3.current.focus();
        ref3.current.style.backgroundColor = "pink"
        ref1.current.style.backgroundColor = ""
        ref2.current.style.backgroundColor = ""
    }

    return (
        <div>
            <button onClick={handleClick1}>First Name</button>
            <input ref={ref1} />
             <button onClick={handleClick2}>Middle Name</button>
            <input ref={ref2} /> 
             <button onClick={handleClick3}>Last Name</button>
            <input ref={ref3} />
        </div>
    );
};

export default CompA;