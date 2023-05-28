import React,{ useEffect, useState ,useContext} from 'react'
import { Link, Navigate } from 'react-router-dom'
import '../styles/homecss.css'
import { VotingContext } from '../utils/VotingContext';
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { shortenAddress } from '../utils/shortenAddress';

const Home = () => {
  const [authenticated, setauthenticated] = useState(null);
  // const {first} =
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    console.log(loggedInUser);
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  const{connectWallet,currentAccount} =useContext(VotingContext);

  if (authenticated === false) {
    return <Navigate replace to="/signup" />;
  } else {
  return (
    <div>
      <div id="navdiv">
      <nav id="navbar">
      <button id="button"><Link to="/admin">Admin Page</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button id="button"><Link to="/votingpage">Voting Page</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button id="button"> <Link to="/signup">Sign up</Link></button>
    </nav>
      </div>
    <div className="home_background">

      <div className="Divmain_home">

         <div className=" eth-card .white-glassmorphism Div1_home ">
            <div className="Div2_home">
              <div className="Div3_home">
                <div className="Div7">
                  <SiEthereum fontSize={35} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#000" />
              </div>
              <div className='Div5_home'>
                <p className="font-light text-sm">
                {shortenAddress(currentAccount)}
               </p>
                <p className="font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div >
        </div>
        <div className="connectwallet_home">
          {!currentAccount && (
    <button onClick={connectWallet}>Connect wallet</button>
      )}
      {currentAccount && (
        <h4 className='connectwallet_home_h4'>Wallet connected</h4>
      )
      }
      </div>
    </div>
    </div>
  )
}
}

export default Home