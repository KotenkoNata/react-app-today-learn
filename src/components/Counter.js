import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount((count) => count+1);
    }

    return (
        <div>
            <span style={{fontSize: '40px'}}>{count}</span>
            <button className='btn btn-large' onClick={handleClick}>+1</button>
        </div>
    )
}

export default Counter;