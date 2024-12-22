import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setUserDetails}=useContext(UserContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password)
        setUserDetails({username, password})
    }

    // const handleLinkClick = (e) => {
    //     // e.preventDefault();
    //     alert("Link click prevented!");
    // }

    // const handleRightClick = (e) => {
    //     e.preventDefault();
    //     alert("Right-click disabled!");
    // }
    return (
        <div>
            <h1>Login</h1>
            <form>


            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' name='username' />
            <br />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' name='password' />
            <br />
            <button type='submit' onClick={handleSubmit}>Sumit</button>

            {/* <a href="https://www.google.com/" onClick={handleLinkClick}>Click Me</a> */}
            </form>
        </div>
    )
}

export default Login