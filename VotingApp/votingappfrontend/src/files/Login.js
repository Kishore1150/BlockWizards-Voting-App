import React, { useState,useContext} from 'react'
import { shortenAddress } from '../utils/shortenAddress';
import { VotingContext } from '../utils/VotingContext';
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";


const Login = () => {

  const{connectWallet,currentAccount} =useContext(VotingContext);

  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [voterId, setVoterId] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const[error,setError] = useState('');

    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get("http://localhost:8080/blockchainvoting/signup/login",{
        name:name,
        email:email,
        voterid:voterId,
        password:password,
        walletaddress:currentAccount,
        checkbox:isChecked,
      }).then((response)=> setError(response.data))


      if(error === "login success") {
      navigate("/");
      }
      else {
      navigate("/login");
      }
    };
  return (
    <div id="loginmaindiv">
    <div id="logindiv">
      <h1>Login</h1>
      <p className='error-message'>{error}</p>
      <form onSubmit={handleSubmit} action="/Home.js" id="signupform">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        {/* <p className="error-message">{formError.email}</p> */}
        <br/>

        <div>
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        {/* <p className="error-message">{formError.voterId}</p> */}
        <br/>
        <div>
          <label htmlFor="voterId">Voter ID:</label>
          <input
            type="text"
            id="voterId"
            value={voterId}
            onChange={(event) => setVoterId(event.target.value)}
            required
          />
        </div>

        {/* <p className="error-message">{formError.password}</p> */}
        <br/>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        {/* <p className="error-message">{formError.confirmPassword}</p> */}
        <br/>

        {!currentAccount && (
  <button onClick={connectWallet}>Connect wallet</button>
    )}
    {currentAccount && (
      <p>Wallet connected  {shortenAddress(currentAccount)}</p>
    )
    }

    {/* <p className="error-message">{formError.isChecked}</p> */}
    <br/>
        <div>
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={(event) => setIsChecked(event.target.checked)}
        />

        <label htmlFor="checkbox">I agree to the terms and conditions</label>
      </div>
        <button type="submit">login</button>
      </form>
      <p>Didn't signup yet?</p><button><Link to='/signup'>Signup</Link></button>
    </div>
    </div>
  );
}

export default Login