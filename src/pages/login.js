import './Login.css';
import { useState } from 'react';

function Login() {
  return <Bar />;
}

export default Login;

function Bar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [status,setStatus]=useState(" ");
  const handelSubmit=(e)=>
  {
  e.preventDefault();
  console.log("Email:",email)
  console.log("Password:",password)
  if(check(email,password))
  {
    console.log("Login Successfully");
    setStatus("Logged In")
  }else
  {
    console.log("Invalid ");
    setStatus("Failed to loged in");
  }
  setEmail('');
  setPassword('');
  }

  return (
    <div className="login-container">
      <form className="form" onSubmit={handelSubmit}>
        <h2>Login</h2>
        <div>
          <label>Email</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log in</button>
      </form>
        <h3 style={{ color: status === "Logged In" ? "green" : "red" }}> 
    {status}
     </h3>
    </div>
  );
}
function check(email,password)
{
  if(email=="try@gmail.com"&&password=="123")
  {
    return true;

  }
  return false;
}
