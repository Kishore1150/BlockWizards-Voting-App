import React, { useContext, useState, useEffect } from "react";
import { VotingContext } from "../../utils/VotingContext";
import Web3 from "web3";
import toast, { Toaster } from "react-hot-toast";
import AdminServices from "../../services/AdminServices";
import {shortenAddress} from "../../utils/shortenAddress.js"
const VoterRequestList = () => {
  const { contract, provider } = useContext(VotingContext);
  const web3 = new Web3(provider);

  const DeleteVoter = async (data) => {
    let check = await contract.ifStaff();
    if (check) {
      await AdminServices.reject(data.id);
      await AdminServices.getFalse().then((data) => {
        setFalse(data.data);
        toast.success("Candidate added succcessfully");
      });
    } else {
      console.log("not a staff");
      toast.error("User is not a staff");
    }
  };

  const AddVoter = async (data) => {
    try {
      console.log(data);
      let voter = data.name;
      let byte32Voter = web3.fromAscii(voter);
      let address = data.walletaddress;
      let image = data.image;
      let check = await contract.ifStaff();
      if (check) {
        console.log("hi");
        await contract.addVoter(byte32Voter.padEnd(66, "0"), address,image);
        AdminServices.setApprove(data.id);
      } else {
        console.log("not a staff");
      }
    } catch (e) {
      let err = e.reason;
    }
    await AdminServices.getFalse().then((data) => {
      setFalse(data.data);
    });
  };
  const [falses, setFalse] = useState();
  useEffect(() => {
    const getFalseData = async () => {
      await AdminServices.getFalse().then((data) => {
        setFalse(data.data);
      });
    };
    getFalseData();
  }, []);

  return (
    <div className="w-11/12 bg-bluegray mx-auto mt-8">
      <p className="font-poppins font-extrabold text-xl pb-5">
        Voter Request List
      </p>
      <div className=" flex items-center px-10">
        <div className="grid grid-cols-4 gap-10   w-full">
          {falses?.map((fal) => {
            return (
              <div className="w-[17rem] mt-10 bg-lightgray1 text-black rounded-xl p-5">
                <figure className="flex items-center flex-col gap-3">
                  <img
                    src={fal.image}
                    className="w-24 h-24 rounded-full"
                    alt={fal.name}
                  />
                  <p className="font-bold">{fal.name}</p>
                  <p className="font-bold">{fal.voterid}</p>
                  <p>{shortenAddress(fal.walletaddress)}</p>
                </figure>
                <div className="flex items-center mt-2 justify-around ">
                  <button
                    className="bg-purple text-white p-1 mb-2 px-2 rounded-md  "
                    onClick={() => AddVoter(fal)}>
                    <i class="fa-solid fa-check"></i>
                  </button>
                  <button
                    className="bg-red text-white p-1 px-2 rounded-md "
                    onClick={() => DeleteVoter(fal)}>
                    <i class="fa-solid fa-xmark"></i>{" "}
                  </button>
                </div>
              </div>
            );

          })}
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default VoterRequestList;
