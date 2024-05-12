


function LoginForm() {

    
  return (
    <div className='form'>
         <h2 id='log'>*LOGIN*</h2>

<form className='login-form'>

  <label htmlFor="username" id='label'>Username:</label>
  <input type="text" id="username" name="username"/>

  <label htmlFor="password" id='label'>Password:</label>
  <input type="password" id="password" name="password"/>

  <button type='submit'id='button'onClick={() => alert('you logined in ')}>login</button>
</form>
    </div>
  )
}

export default LoginForm