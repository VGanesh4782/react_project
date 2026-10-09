import {useEffect} from "react";
function UseEffectbasic(){
    useEffect(()=>{
        console.log("useeffect is called");

    },[]);
    return (
        <div>
            <h1> usefeect basic</h1>
            <p>check the browsers console</p>
        </div>
    )
}
export default UseEffectbasic;