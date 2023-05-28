import React, { useContext, useState } from "react";
import { VotingContext } from "../utils/VotingContext";
import Web3 from "web3";
import "../styles/votingpage.css";
const VotingPage = () => {
  const { contract, provider, currentAccount } = useContext(VotingContext);
  const [candidateCount, setCandidateCount] = useState(null);
  const [candidatesList, setCandidatesList] = useState(null);

  const [errorVote, setErrorVote] = useState(null);

  const web3 = new Web3(provider);

  const getCandidatesCount = async () => {
    let val = await contract.getCandidatesCount();
    console.log(val);
    setCandidateCount(val);
  };

  const getCandidatesList = async () => {
    let val = await contract.getCandidates();
    console.log(val);
    setCandidatesList(val);
  };

  const Vote = async (index) => {
	setErrorVote('');
    try {
      console.log(index);
      await contract.vote(index);
    } catch (e) {
      let err = e.reason;
      setErrorVote(err);
    }
  };

  return (
    <div className="votingpagediv">
      <p id="idlabel">Current Login account: &nbsp;{currentAccount}</p>
      <div>
        <button onClick={getCandidatesCount} style={{ marginTop: "5em" }}>
          {" "}
          Get Candidates count{" "}
        </button>
      </div>
      {candidateCount}

      <div>
        <button onClick={getCandidatesList} style={{ marginTop: "5em" }}>
          {" "}
          Get Candidates list{" "}
        </button>
      </div>
	  <p className="error-message">{errorVote}</p>
      <div id="div123">
        {candidatesList?.map((candidate) => {
          return (
            <div className="VotingPageCandidateList">
              <p id="idlabel">
                {candidate.index + 1}{" "}
                {web3.toAscii(candidate.name.replace(/00+/, ""))}
              </p>
              <button onClick={() => Vote(candidate.index)}>Vote</button>
            </div>
          );
        })}
        <br/> <br/> <br/> <br/> <br/> <br/>
      </div>
    </div>
  );
};

export default VotingPage;
