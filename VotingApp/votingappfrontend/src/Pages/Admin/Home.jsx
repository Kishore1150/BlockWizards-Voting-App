import React, { useState, useContext } from "react";
import CanditateList from "../../Components/Admin/CanditateList";
import VoterRequestList from "../../Components/Admin/VoterRequestList";
import VotersList from "../../Components/Admin/VotersList";
import { StateProvider } from "../../context/ContextProvider";
import AdminServices from "../../services/AdminServices";
import { FaEthereum } from "react-icons/fa";
import { VotingContext } from "../../utils/VotingContext";
import { contractAddress } from "../../utils/config";
import Web3 from "web3";
const AdminHome = () => {
  const [addCanditate, setAddCanditate] = useState(false);
  const { contract, provider ,currentAccount} = useContext(VotingContext);
  const [staffAddress, setStaffAddress] = useState("");
  const web3 = new Web3(provider);
  const [canditate, setCanditate] = useState({
    name: "",
    imgurl: "",
    walletaddress: "",
    contents: [],
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await AdminServices.addCanditate(canditate);
    // let check = await contract.ifCommissioner();
    // console.log(check);
    // if (check) {
    //   let byte32Candidate = web3.fromAscii(canditate.name);
    //   console.log(canditate);
    //   await contract.addCandidate(
    //     byte32Candidate.padEnd(66, "0"),
    //     canditate.walletaddress,
    //     canditate.imgurl
    //   );
    // }
  };
  const StartElection = async () => {
    await contract.startElection();
  };

  const EndElection = async () => {
    // const gasPriceGwei = "50";
    // const gasLimit = 300000;
    // const transactionObject = {
    //   from: currentAccount,
    //   to: contractAddress,
    //   data: null,
    //   gasPrice: web3.utils.toWei(gasPriceGwei, "gwei"),
    //   gas: gasLimit,
    // };

    // web3.eth.sendTransaction(transactionObject);
    await contract.endElection();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCanditate({ ...canditate, [name]: value });
  };
  return (
    <div className="min-h-screen bg-bluegray mt-24">
      {addCanditate && (
        <div className="absolute z-50 flex w-full h-full justify-center items-center bg-black bg-opacity-60">
          <form
            onSubmit={handleSubmit}
            className="flex absolute bg-bluegray  items-center justify-between border-[1px] p-9 rounded-lg  max-w-2xl">
            <div className="">
              <div className="font-bold flex justify-between items-center  mb-5 text-2xl">
                <h1 className="">Add Candidate</h1>
                <i
                  onClick={() => setAddCanditate(false)}
                  class=" font-semibold text-2xl text-white  cursor-pointer fa-solid fa-xmark"></i>
              </div>
              <div className="md:flex items-center gap-3 mb-6">
                <i class="fa-solid fa-user text-2xl"></i>
                <div className="md:w-3/3 ">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 text-black rounded-md w-[250px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center gap-2.5 mb-6">
                <FaEthereum className="text-2xl" />
                <div className="w-[200px]">
                  <input
                    className="bg-gray-200 appearance-none text-black border-2 border-gray-200 rounded w-[250px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-email"
                    type="text"
                    name="walletaddress"
                    placeholder="Enter Wallet Address"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center gap-3 mb-6">
                <i class="fa-solid fa-lock text-2xl"></i>
                <div className="w-[200px]">
                  <input
                    className="bg-gray-200 appearance-none text-black border-2 border-gray-200 rounded w-[250px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="text"
                    placeholder="Image "
                    required
                    name="imgurl"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="md:flex md:items-center">
                <div className="w-full flex justify-center items-center">
                  <button
                    className="shadow bg-purple-500  hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white bg-purple font-bold py-2 px-4 rounded"
                    type="submit"
                    onClick={handleSubmit}>
                    Add Candidate
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
      <CanditateList
        addCanditate={addCanditate}
        setAddCanditate={setAddCanditate}
      />
      <VoterRequestList />
      <VotersList />
      <div className="flex items-center justify-center mt-28">
        <label className="font-poppins text-xl pb-5 flex flex-col justify-center">
          Add Staff{" "}
          <input
            type="text"
            onChange={(e) => setStaffAddress(e.target.value)}
            name=""
            id=""
            className=" outline-none ml-8 mt-2 bg-transparent rounded-lg  border-[1px] border-white indent-2 py-1"
          />
        </label>

        <button
          className="px-3 mt-2 py-1 bg-purple mx-10 rounded-lg"
          onClick={async () => {
            await contract.addStaff(staffAddress);
          }}>
          Add Staff
        </button>
      </div>
      <div className="w-full flex justify-center items-center my-20">
        <button
          className="min-w-[100px] px-2 bg-green-500 py-1 rounded-lg mx-5"
          onClick={StartElection}>
          Start Election
        </button>
        <button
          className="min-w-[100px] px-2 bg-red py-1 rounded-lg mx-5"
          onClick={EndElection}>
          End Election
        </button>
      </div>
    </div>
  );
};

export default AdminHome;
