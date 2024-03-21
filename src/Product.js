import{ useState } from "react";

function Footer(){
    const [no,setNo] = useState(0)
    const [count,setCount] = useState(0);
   

    const handleClick = () => {
        setCount(count+1)
        setCount(count+1)
        console.log(count)
    }
    

    
    return(
        <div>
            {no}<br/>
            <button onClick={ () =>setNo(no+1)}>Increment</button>
            {/* <button onClick={() => setNo(no-1)}>Decrement</button>
            <button onClick={() => setNo(no*2)}>Multiply</button>
            <button onClick={() => setNo(no-no)}>ComeBack</button> */}
            <button onClick={handleClick}>Touch Here</button>

        </div>
    )
}
export default Footer;