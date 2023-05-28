import React,{useContext,useState,useEffect} from 'react';
import { VotingContext } from '../utils/VotingContext';
import Web3 from 'web3';



const Admin = () => {

  const{contract,provider} =useContext(VotingContext);
  // const[candidatesCount,setCandidatesCount] = useState(null);
  // const[votersCount,setVotersCount] = useState(null);
  const[candidatesList,setCandidatesList] = useState(null);
  const[votersList,setVotersList] = useState(null);
  const[winner,setWinner] = useState(null);

  const[errorAddCandidate,setErrorAddCandidate] = useState(null);
  const[errorAddVoter,setErrorAddVoter] = useState(null);
  const[errorCommissioner,setErrorCommissioner] = useState(null);

  const web3 = new Web3(provider);

  const AddCandidate = async (event) => {
		event.preventDefault();
    try {
    let candidate = event.target.addCandidate.value;
    console.log(candidate);
    let byte32Candidate = web3.fromAscii(candidate);
		await contract.addCandidate(byte32Candidate.padEnd(66,'0'));
    }
    catch(e){
      let err = e.reason;
      setErrorAddCandidate(err);
    }
	}

  const Addvoter = async (event) => {
		event.preventDefault();
    try {
      
    let voter = event.target.addVoterName.value;
    console.log(voter);
    let byte32Voter = web3.fromAscii(voter);
    let address = event.target.addVoterAddress.value;
		await contract.addVoter(byte32Voter.padEnd(66,'0'),address);
    }
    catch(e){
      let err = e.reason;
      setErrorAddVoter(err);
    }
	}

  // const getCandidatesCount = async () => {
	// 	let val = await contract.getCandidatesCount();
  //   console.log(val);
	// 	setCandidatesCount(val);
	// }

  // const getVotersCount = async () => {
	// 	let val = await contract.getVotersCount();
  //   console.log(val);
	// 	setVotersCount(val);
	// }

  const getCandidatesList = async () => {
		let val = await contract.getCandidates();
    console.log(val);
		setCandidatesList(val);
	}

  const getVotersList = async () => {
		let val = await contract.getVoters();
    console.log(val);
		setVotersList(val);
	}

  const startElection = async () => {
    try{
    await contract.startElection();
    }
    catch(e){
      let err = e.reason;
      setErrorCommissioner(err);
    }
  }

  const endElection = async () => {
    // try{
    await contract.endElection();
    // let val = await contract.winner();
    // console.log(val);
    // let winner = web3.toAscii(val.replace(/00+/, ''));
    // setWinner(winner);
    
    // console.log(web3.toAscii(val.replace(/00+/, '')));
  // }
  // catch(e){
  //   let err = e.reason;
  //   setErrorCommissioner(err);
  //   console.log(winner);
  // {
  }

  const updateWinner = async () => {
    let tempWinner = await contract.winner();
    setWinner(web3.toAscii(tempWinner.replace(/00+/, '')));
}

useEffect(() => {
  updateWinner();
  // eslint-disable-next-line
},[]);

  // const updateContract = async () => {

  // }

  return (
    <div className='admindiv'>
    <div >
      {/* <form onSubmit={updateContract}>
        <input id="updateContract" type="text"/>
        <button type={"submit"}> Update Contract </button>
      </form> */}
      <p className="error-message">{errorAddCandidate}</p>
      <form onSubmit={AddCandidate}>
				<input id="addCandidate" type="text"/>
				<button type={"submit"}> Add Canditate </button>
			</form>

      {/* <div>
			<button onClick={getCandidatesCount} style={{marginTop: '5em'}}> Get Candidates count</button>
			</div>
			{candidatesCount} */}

      <div>
			<button onClick={getCandidatesList} style={{marginTop: '5em'}}> Get Candidates list </button>
			</div>

      <div>
      {candidatesList?.map((candidate)=>{
        return(
          <p id="idlabel">{candidate.index+1}{" "}{web3.toAscii(candidate.name.replace(/00+/, ''))}</p>
        )
      })}
      </div>

      <p className="error-message">{errorAddVoter}</p>
      <form onSubmit={Addvoter}>
        <label id="idlabel">Voter name</label>
				<input id="addVoterName" type="text"/>
        <br/>
        <label id="idlabel">Voter address</label>
        <input id="addVoterAddress" type="text"/> 
        <br/>
				<button type={"submit"}> Add Voter </button>
			</form>

      {/* <div>
			<button onClick={getVotersCount} style={{marginTop: '5em'}}> Get Voters count </button>
			</div>
			{votersCount} */}

      <div>
			<button onClick={getVotersList} style={{marginTop: '5em'}}> Get Voters list </button>
			</div>

      <div>
      {votersList?.map((voter)=>{
        return(
          <p id="idlabel">{voter.index+1}{" "}{web3.toAscii(voter.name.replace(/00+/, ''))}{" "}{voter.ownAddress}{" "}{voter.voted}</p>
        )
      })}
      </div>

      <p className="error-message">{errorCommissioner}</p>

      <div>
			<button onClick={startElection} style={{marginTop: '5em'}}> Start election </button>
			</div>

      <div>
			<button onClick={endElection} style={{marginTop: '5em'}}> End election </button>
			</div>
      <p id="idlabel">{winner}</p>
</div>
    </div>
  )
}

export default Admin