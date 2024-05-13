import '/src/log.css'
import { useEffect, useState } from "react"


const initData = {
  username: '',
  password: '',
}

function LoginForm() {

    const [logData,setLogData] = useState(initData)
   
    //Fetch db.json
    useEffect(() => {
      fetch('db.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(initData)
    })
    .then((res) => res.json())
    .then((log) => console.log(log.customers))

    },[])
   

    
//handle onChange event
    const handleInputChange =(e) => {
      setLogData({...logData,[e.target.name]: e.target.value})
   }
  //Handle onClick event
    const onSubmit = (e) => {
        e.preventDefault()
    
        console.log(logData)
       setLogData(initData)
    
       alert("You're logged in")
    }
    
  return (
    <div className='form'>
         <h2 id='log'>*LOGIN*</h2>

  <form onSubmit={onSubmit} className='login-form'>

  <label htmlFor="username" id='label'>Username:</label>
  <input 
  required
  type="text" 
  id="username" 
  name="username" 
  value={logData.username}
  onChange={handleInputChange}/>

  <label htmlFor="password" id='label'>Password:</label>
  <input 
  required
  type="password" 
  id="password" 
  name="password" 
  value={logData.password}
  onChange={handleInputChange}/>

  <button type='submit'id='button'>login</button>
</form>
    </div>
  )
}

export default LoginForm;