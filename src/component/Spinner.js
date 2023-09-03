import React from 'react'
import loader from './spinner.gif'

export default  function Spinner (){
    return (
      <>
      <div style={{width:"100%",height:"100%",display:'flex',justifyContent:'center',alignItems:'center'}}>
        <img className="mt-5"
        src={loader} alt="spinner" style={{width:"50px"}}></img>
      </div>
      </>
    )
}
