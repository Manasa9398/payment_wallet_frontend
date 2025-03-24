// import { useState } from "react";

// const Counter=()=>{
//     const[count,setCount]=useState(0);

//     return(
//         <div>
//         <p>Count: {count}</p>
//         <button onClick={()=>setCount(count+1)}>Increment</button>
//         <button onClick={()=>setCount(count-1)}>Decrement</button>
        
        
//         </div>
//     )

// }
// export default Counter;
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Container className="text-center mt-5">
      <h3>Count: {count}</h3>
      <Button variant="success" className="mx-2" onClick={() => setCount(count + 1)}>Increment</Button>
      <Button variant="danger" className="mx-2" onClick={() => setCount(count - 1)}>Decrement</Button>
    </Container>
  );
}

export default Counter;
