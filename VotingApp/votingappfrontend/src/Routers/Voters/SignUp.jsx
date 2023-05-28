import React, { useState } from "react";
import AdminServices from "../../services/AdminServices";
const SignUp = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    image: "",
    voterid: "",
    walletaddress: "",
    checkbox: false,
    verified: false,
  });
  const handleSignUp = async (event) => {
    event.preventDefault();
    const response =await AdminServices.signUpVoter(signupData);
    console.log(response,signupData);
  };
  const handleChangeSignUpFormData = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };
  return (
    <div className="flex justify-center items-center mt-24">

    <div className="flex w-4/12 flex-col  duration-500">
      <h1 className="text-4xl font-poppins  font-semibold p-3 flex justify-start w-full">
        Sign Up
      </h1>
      <form
        className="flex flex-col justify-center w-full mx-auto"
        action=""
        onSubmit={handleSignUp}>
        <div className="inputBox relative w-9/12 mx-auto">
          <input
            name="name"
            onChange={handleChangeSignUpFormData}
            className="w-full"
            type="text"
            required="required"
            // value={setSignupData.name}
          />
          <span className="absolute">Name</span>
          <i className={`absolute bg-green`}></i>
          {/* <p className="absolute -bottom-4 right-0 text-white text-xs">
            // {signUpError?.usernameError}
          </p> */}
        </div>
        <div className="inputBox relative w-9/12 mx-auto">
          <input
            name="email"
            onChange={handleChangeSignUpFormData}
            className="w-full"
            type="text"
            required="required"
            value={setSignupData.email}
          />
          <span className="absolute">Email</span>
          <i className={`absolute bg-green`}></i>
          {/* <p className="absolute -bottom-4 right-0 text-white text-xs">
            // {signUpError?.emailError}
          </p> */}
        </div>
        <div className="inputBox relative w-9/12 mx-auto">
          <input
            name="image"
            onChange={handleChangeSignUpFormData}
            className="w-full"
            type="text"
            required="required"
            value={setSignupData.image}
          />
          <span className="absolute">Image</span>
          <i className={`absolute bg-green `}></i>
          {/* <p className="absolute -bottom-4 right-0 text-white text-xs">
            // {signUpError?.passwordError}
          </p> */}
        </div>
        <div className="inputBox relative w-9/12 mx-auto">
          <input
            name="voterid"
            onChange={handleChangeSignUpFormData}
            className="w-full"
            type="text"
            required="required"
            value={setSignupData.voterid}
          />
          <span className="absolute">Voter Id</span>
          <i className={`absolute bg-green `}></i>
          {/* <p className="absolute -bottom-4 right-0 text-white text-xs">
            // {signUpError?.passwordError}
          </p> */}
        </div>
        <div className="inputBox relative w-9/12 mx-auto">
          <input
            name="walletaddress"
            onChange={handleChangeSignUpFormData}
            className="w-full"
            type="text"
            required="required"
            value={setSignupData.walletaddress}
          />
          <span className="absolute">WalletAddress</span>
          <i className={`absolute bg-green `}></i>
          {/* <p className="absolute -bottom-4 right-0 text-white text-xs">
            // {signUpError?.passwordError}
          </p> */}
        </div>
        <div className="w-9/12 flex justify-end mx-auto">
          <input
            // onClick={handleSignUp}
            className="p-2 bg-white text-black  mt-4 rounded-lg min-w-[100px] hover:bg-black hover:text-white duration-500 cursor-pointer"
            type="submit"
            value={"SignUp"}
          />
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
