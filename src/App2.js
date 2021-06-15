import React, { useState } from 'react'
import Child from './Child';

const App2 = () => {
    /* state={
        text:'',
        search:''
    } */
    const [person, setPerson]=useState({
        name :'',
        email:'',
        password:'',
    })
    
    
/*     const handleNameChange = (val)=>{
        setPerson({...person,name:e.target.value})
       
    } */

const [serach, setSerach] = useState("teqt")


    const handleSearch =(val)=>{
        setSerach(val)
    }

    return (
        <div>
            <Child handleSearch={handleSearch}/>
           {/* {person.name}<br/><hr></hr>
           {person.email}<br></br>
           {person.password} */}
           {serach}
           
        </div>
       
    )
}

export default App2
