import React, { useState } from 'react'

const MyApp = () => {
    const [data,setData]=useState({
        login:'',
        password:''
    })

/* const handleLoginChange = (e)=>{
    setData({...data,
        login:e.target.value
}
)} */
const handleChange = (e)=>{
    setData({...data,
        [e.target.id]:e.target.value
}
)}
/* const handlePwdChange = (e)=>{
    setData({
        ...data,
        password:e.target.value
}
)} */

    return (
        <div>
            <h1>App</h1>
            login<input id='login' onChange={(e)=>handleChange(e)} type='text'></input><br></br>
            password<input id='password' onChange={(e)=>handleChange(e)} type='text'></input>
            <div>

            </div>
        </div>
    )
}

export default MyApp
