// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

contract VotingSystem {

    address ElectionCommissioner;

    address[] staff;

    struct candidate {
        uint8 index;
        bytes32 name;
        uint16 voteCount;
        string image;
        address own_address;
    }

    struct candidate1 {
        uint8 index;
        bytes32 name;
        string image;
        address own_address;
    }

    struct voter {
        uint16 index;
        bytes32 name;
        address ownAddress;
        uint8 weight;
        bool voted;
        string image;
    }

    uint8 indexIncrementerCandidate = 0;
    uint16 indexIncrementerVoter = 0;
    uint8 indexIncrementerStaff = 0;

    voter[] private Voters;

    candidate[] private Candidates;
    candidate1[] private Candidates1;

    bool electionEnded = false;
    bool electionStarted = false;

    constructor() {
        ElectionCommissioner = msg.sender;
    }

    function addStaff(address AddStaff) external {
        require(msg.sender == ElectionCommissioner,"You are not Election commissioner");
        staff[indexIncrementerStaff] = AddStaff;
        indexIncrementerStaff++;
    }

    function ifStaff() external view returns(bool) {
        bool check = false;
        if(msg.sender == ElectionCommissioner){
            check = true;
        }
    for (uint i = 0; i < staff.length; i++) {
        if (staff[i] == msg.sender) {
            check = true;
            break;
        }
    }
        return check;
    }

    function commissioner() public view returns(address)
    {
        return ElectionCommissioner;
    }

    function ifCommissioner() public view returns(bool){
        bool check = false;
        if(msg.sender == ElectionCommissioner) {
            check = true;
        }
        return check;
    }

    function getCandidatesCount() public view returns(uint8) {
        return indexIncrementerCandidate;
    }

    function getVotersCount() external view returns(uint16) {
        return indexIncrementerVoter;
    }

    function addCandidate(bytes32 candidateName,address Candidate_Address,string memory image) external {
        require(msg.sender == ElectionCommissioner,"You are not Election commissioner");
        require(electionStarted == false,"Election have been started");
        if(!alreadyAdded(candidateName)) {
        Candidates.push(candidate({
                index: indexIncrementerCandidate,
                name: candidateName,
                own_address: Candidate_Address,
                voteCount: 0,
                image: image
            }));
        Candidates1.push(candidate1({
                index: indexIncrementerCandidate,
                name: candidateName,
                own_address: Candidate_Address,
                image: image
            }));
            indexIncrementerCandidate ++;
       }
       else {
           revert("Already added candidate");
       }
    }

    function getCandidates() public view returns(candidate1[] memory) {
      return Candidates1;
    }

    function getVoters() public view returns(voter[] memory) {
      return Voters;
    }

    function getCandidate(uint8 index) external view returns(uint8, bytes32,string memory) {
        return (Candidates1[index].index, Candidates1[index].name,Candidates1[index].image);
    }

    function alreadyAdded(bytes32 candidateName) internal view returns(bool found) {
        found = false;
        bytes32 checkCandidate;

        for(uint8 i = 0 ;i<indexIncrementerCandidate;i++)
        {
            candidate storage check = Candidates[i];
            checkCandidate = check.name;
            if(checkCandidate == candidateName)
            {
                found = true;
            }
        }
    }

    function getCandidateDetails(uint indexOfCandidate) external view returns (candidate memory) {
        require(msg.sender == ElectionCommissioner,"You are not Election commissioner");
        require(electionEnded == true,"To access this function election have to be ended");
        return Candidates[indexOfCandidate];
    }

    function addVoter(bytes32 voterName,address voterAddress,string memory image1) external {
        bool isCommissioner = false;
        if(msg.sender == ElectionCommissioner){
            isCommissioner = true;
        }
    for (uint i = 0; i < staff.length; i++) {
        if (staff[i] == msg.sender) {
            isCommissioner = true;
            break;
        }
    }
        require(isCommissioner,"You are not Election commissioner");
        require(electionStarted == false,"Election have been started");
        if(!alreadyJoined(voterAddress)){
            Voters.push(voter({
                index: indexIncrementerVoter,
                name:voterName,
                ownAddress : voterAddress,
                weight : 0,
                voted : false,
                image : image1
            }));
            indexIncrementerVoter++;
        }
        else {
            revert("Already joined election");
        }
    }

    function alreadyJoined(address voterAddress) internal view returns(bool found) {
        found = false;
        address checkAddress;
        for(uint16 i = 0 ;i<indexIncrementerVoter;i++)
        {
            checkAddress = Voters[i].ownAddress;
            if(checkAddress == voterAddress)
            {
                found = true;
            }
        }
    }

    function getVoterDetails(uint16 indexOfVoter) external view returns(voter memory) {
        require(msg.sender == ElectionCommissioner,"You are not Election commissioner");
        return Voters[indexOfVoter];
    }

    function startElection() external {
        require(msg.sender == ElectionCommissioner,"You are not Election commissioner");
        require(electionEnded == false,"Election have been already started");
        require(electionStarted == false,"Election have been already started");
        address rightToVoter;
        electionStarted = true;
        for(uint16 i = 0 ;i<indexIncrementerVoter;i++)
        {
            voter storage rightToVoterIndex = Voters[i];
            rightToVoter = rightToVoterIndex.ownAddress;
            giveVotingRights(rightToVoter);
        }
    }

    function giveVotingRights(address rightToVoter) internal {
        uint16 voterIndex;
        for(int16 i=0;i<int16(indexIncrementerVoter);i++) {
            if(rightToVoter == Voters[uint16(i)].ownAddress){
                voterIndex = uint16(i);
            }
        }
        Voters[voterIndex].weight = 1;
    }

    function vote(uint8 Candidate) external {
        require(electionStarted == true,"Election have not been started yet");
        require(electionEnded == false,"Election have been already ended");
        address voterAddress = msg.sender;
        uint16 voterIndex;
        for(int16 i =0;i<int16(indexIncrementerVoter);i++) {
            if(Voters[uint16(i)].ownAddress == voterAddress) {
                voterIndex = uint16(i);
            }
        }
        require(!Voters[voterIndex].voted, "Already voted.");
        require(Voters[voterIndex].weight != 0, "Has no right to vote");
        Voters[voterIndex].voted = true ;
        Candidates[Candidate].voteCount += 1;
        Voters[voterIndex].weight = 0 ;
    }

    bytes32 winningCandidateName;

    function endElection() external
    {
        require(msg.sender == ElectionCommissioner,"You are not Election commissioner");
        require(electionStarted == true,"Election have not been started yet");
        //require(electionEnded == false,"Election have been already ended");
        uint8 winningCandidateIndex;
        uint16 winningVoteCount = 0;
        electionEnded = true;
        for (uint8 w = 0; w < Candidates.length; w++) {
            if (Candidates[w].voteCount > winningVoteCount) {
                winningVoteCount = Candidates[w].voteCount;
                winningCandidateIndex = w;
            }
        }
        winningCandidateName = Candidates[winningCandidateIndex].name;
    }

// function endElection() external {
//     require(msg.sender == ElectionCommissioner, "You are not the Election commissioner");
//     require(electionStarted == true, "Election has not been started yet");
//     require(electionEnded == false, "Election has already ended");

//     uint8 winningCandidateIndex;
//     uint16 winningVoteCount = 0;
//     electionEnded = true;

//     for (uint8 w = 0; w < Candidates.length; w++) {
//         if (Candidates[w].voteCount > winningVoteCount) {
//             winningVoteCount = Candidates[w].voteCount;
//             winningCandidateIndex = w;
//         }
//     }
//     winningCandidateName = Candidates[winningCandidateIndex].name;
// }


    function winner() external view returns (bytes32){
        return winningCandidateName;
    }
}