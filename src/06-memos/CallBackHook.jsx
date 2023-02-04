import { useState, useCallback } from 'react'
import { ShowIincrement } from './ShowIincrement'


export const CallBackHook = () => {

    const [counter, setcounter] = useState(10)

    const incrementFather = useCallback(
      () => {
        setcounter((value) => value + 1);
      },
      [],
    )
    

    // const incrementFather = ( ) => {
    //     setcounter ( counter + 1);
    // }

  return (
        <>
            <h1>UseCallBack Hoock: {counter} </h1>
            <hr />

            <ShowIincrement  increment= { incrementFather } />
        </>  
)
}
