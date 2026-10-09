import { useRef } from "react";
function FocusInput(){
    const inputRef=useRef();
    function HandleFocus(){
        inputRef.current.focus();
    }
    return(
        <>
        <input ref={inputRef}/>
        <button onClick={HandleFocus}> Focus Input</button>
        </>
    );
}