import React from 'react'

export const ShowIincrement = React.memo (({ increment }) => {


  return (
        <>
        <button 
        className="btn btn-primary"
        onClick={() => {
            increment();
        }}>
            incrementar
        </button>
        </>
    )
})
