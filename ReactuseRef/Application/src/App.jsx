import React, { use } from 'react'
import { useEffect } from 'react';
const App = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: ""
  })
  useEffect(() => {
    console.log("Form Data Update:", formData);
  }, [formData])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form action="">
        <input type="text" placeholder='Enter your name' value={formData.name} onChange={handleChange }/>
        <br/>
        <input type="email" placeholder='Enter your email' value={formData.email} onChange={handleChange } />
        <br />
        <input type="password" placeholder='Enter your password' value={formData.password} onChange={handleChange } />
        <button type='submit'>Registration</button>
      </form>
    </div>
  )
}

export default App