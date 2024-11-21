import {useEffect, useState,useRef} from 'react';

function Scheduler(){
    let data= 0;
    let [count, setCount] = useState(0);
    let myRef  =  useRef(0);
    console.log("In Scheduler ", myRef.current);
    console.log("setCount ", count);
    console.log("data ", data);

    function handleClick(){
        setCount(count+1);
        myRef.current = myRef.current + 1;
        data = data +  1;
        console.log("In handleClick ", myRef.current);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // console.log(count);

        // setCount(++count);
        // setCount(++count);
        // setCount(++count);
        // setCount(++count);
        // setCount(++count);
        // setCount(++count);
        // setCount(++count);
        // setCount(++count);
        // setCount(++count);
        // setCount(++count);
        // setCount(++count);
        // setCount(++count);
        // setCount(++count);
        // setCount(++count);
        // setCount(++count);
        // setCount(++count);
        // setCount(++count);

        // setCount((newCount)=> newCount + 1);
        // setCount((newCount)=> newCount + 1);
        // setCount((newCount)=> newCount + 1);
        // setCount((newCount)=> newCount + 1);
        // setCount((newCount)=> newCount + 1);
        // setCount((newCount)=> newCount + 1);
        // setCount((newCount)=> newCount + 1);
        // setCount((newCount)=> newCount + 1);
        // setCount((newCount)=> newCount + 1);
        // console.log(count);
    }
    // useEffect(()=>{
    //     console.log("...sid ", count);
    // },[count])

    return (
        <>
            <div onClick={()=> handleClick()}>scheduler div {count}</div>
        </>
    )
}
export default Scheduler;