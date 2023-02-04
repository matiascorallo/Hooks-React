import { useState } from "react";

export const useCounter = (initialValue = 10) => {


  const [counter, setcounter] = useState(initialValue)

  const increment = () => {
    setcounter ( counter + 1 );
  }

  const decreasing = () => {
    
    if ( counter === 0 ) return;

    setcounter ( counter - 1 );
  }

  const reset = () => {
    setcounter ( initialValue );
  }

return{
counter,
increment,
decreasing,
reset,
}
}