import React from 'react'

const Child = (props) => {
    return (
        <div>
            {/*  <input type='text' name="name" ></input>
           
            <input type='email' name='email' ></input>
           
            <input type='password' name='password' ></input> */}
           <input type='text' name="serach" onChange={(e)=>props.handleSearch(e.target.value)}></input>
         
        </div>
    )
}

export default Child
