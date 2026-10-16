import React from 'react'

const Login = () => {
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");
    function handleLogin(e){
        e.preventDefault();
        if (uname === "admin" && pass === "manager") {
          navigate("/admin");
        }
        else if (uname === "user" && pass === "abes") {
          navigate("/user");
        }
        else
        {
          setError("Authentication Error : Check user credentials");   
          navigate("/");
        }
    }
  return (
    <div className="login">
       <h1>SignIn Here</h1>
       <h2 style={{color : "red"}}>{error}</h2>
       <form>
        UserName :
        <input type="text" value = {uname} placeholder="Enter the User Name" onChange={(e)=>setUname(e.target.value)}/>
        Password :
        <input type="password" value = {pass} placeholder="Enter the Password" onChange={(e)=>setPass(e.target.value)}/>
       </form>
    </div>
  )
}

export default Login
