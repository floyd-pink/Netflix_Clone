import React,{useState} from 'react'

function Login() {
  return (
   <>
   <Bar/>
   </>
  )
}

export default Login
function Bar()
{
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelSubmit=(e)=>
  {
  e.preventDefault();
  console.log("Email:",email)
  console.log("Password:",password)
  setEmail('');
  setPassword('');
  }
  return(
  <>
   <div> Login</div>
   <div className='form'>
     <div>
      <label>email</label>
      <input 
      type='email'
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
      id="email"
      required/>
     </div>
     <div>
      <label>Password</label>
      <input 
      type='password'
      id="password"
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      required/>
     </div>
   </div>
   <button onClick={handelSubmit}> Log in </button>
  </>);
}
