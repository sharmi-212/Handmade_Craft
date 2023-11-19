import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in all fields'); 
      return;
    }

    try {
      // Check if the password is "123"
      if (password === '123') {
        // Simulate a successful login
        localStorage.setItem('token', 'fakeToken'); // Set a fake token for demonstration purposes

        alert('Login Successful');
        navigate("/");
      } else {
        alert('Invalid password'); 
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login.'); 
    }
  };
 

  return (
    <div className='log'>
      <div className="login-container" >
        <div className="login-content">
          <div className="login-form">
            <h2>Sign In</h2>
            <p>“ we've got this!”</p>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="text"
                  id="input1"
                  name="input1"
                  required
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="input2"
                  name="input2"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Login</button><br/><br/>
              Don't have an account? <Link to='/SignupPage' style={{color:"#007FFF", textDecoration:"none", fontSize: "15px"}}>Create a new account</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
