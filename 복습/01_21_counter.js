import React , {useState} from 'react';

const Counter = (props)=>{
    const [count,setCount] = useState(0);
    const increment = ()=>{
        setCount(count+2);
    };

    //삼항연산자 비슷
    const string = props.click || 'ccc';
    return (
        <button onClick={increment}>
             {string} {count}
        </button>
    );
};

export default Counter;