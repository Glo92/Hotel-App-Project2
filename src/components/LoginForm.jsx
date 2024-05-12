import { useEffect, useState } from "react"



function LoginForm() {
    const [log, setLog] =useState([])
    console.log(log)

    useEffect(() => {
        fetch('db.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((log) => setLog(log.customers))
    }, [])
    
  return (
    <div className='form'>
         <h2 id='log'>*LOGIN*</h2>

<form className='login-form'>

  <label htmlFor="username" id='label'>Username:</label>
  <input type="text" id="username" name="username"/>

  <label htmlFor="password" id='label'>Password:</label>
  <input type="password" id="password" name="password"/>

  <button type='submit'id='button'onClick={() => setLog('you logined in ')}>login</button>
</form>
    </div>
  )
}

export default LoginForm