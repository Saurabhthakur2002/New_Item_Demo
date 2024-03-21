import React, { useEffect, useState } from "react";
function Demo(){
    const [no,setNo] = useState(0)

    useEffect(() => {
        console.log("Hello Saurabh,Anshika")
    })
    return(
        <div>
            {`No is ${no}`}
            <button onClick={() => setNo(no+1)}>Increment</button>
            <button onClick={() => setNo(no-1)}>Decrement</button>
            <button onClick={() => setNo(no*no)}>Double Value</button>
            <button onClick={() =>setNo(no*no)}>Return</button>
        </div>
    )
}
export default Demo;