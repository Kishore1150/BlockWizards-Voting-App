import React from 'react'
import { BsHeadset } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import { BsFillInboxesFill } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";


const ContactSection1 = () => {

   const call = () =>
   {
    window.location.href='tel:9626209856'
   }

  return (
    <>
      <main className="h-[45rem] w-[80rem]">
        <section className="relative top-32 left-32 w-[70rem]">
          <div className="w-[60rem] flex flex-col gap-2">
            <h1 className="text-6xl leading-[1.2] font-bold  font-poppins">
              Let's connect and get to know each other
            </h1>
            <p className="text-lightgray text-xl">
              Let's unite and engage in a voting system, Where voices are heard
              and choices are given. Passage the path of democratic essence,
              Where participation brings meaningful presence.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3  w-[70rem]  ">
            <figure className="flex  flex-col items-center pt-5 gap-2.5 h-[15rem]  w-[21rem] rounded-2xl bg-black shadow-2xl py-5 ">
              <BsHeadset className="text-2xl bg-lightgreen   relative top-0 p-4 w-14 h-14 text-brightgreen rounded-full" />
              <h1 className="font-bold font-poppins text-xl ">Call us</h1>
              <p className="w-80 text-lightgray text-center">
                Imprudence attachment him his for sympathize. Large above be to
                means.
              </p>
              <div className="flex gap-2 items-center">
                <button
                  onClick={call}
                  className="flex gap-2 items-center bg-hoverpurple text-purple px-3 py-2 rounded-md font-semibold text-sm hover:bg-purple hover:text-white transition-all delay-75 ease-in-out duration-700">
                  <AiOutlineMobile />
                  <span>91+9626209856</span>
                </button>
                <button
                  onClick={call}
                  className="flex gap-2 items-center bg-gray text-black px-3 py-2 rounded-md font-semibold text-sm hover:bg-purple hover:text-white transition-all delay-75 ease-in-out duration-700">
                  <i class="fa-solid fa-phone"></i> <span>04218384224</span>
                </button>
              </div>
            </figure>
            <figure className="flex flex-col items-center  gap-3 h-[15rem]  w-[21rem] rounded-2xl bg-black shadow-2xl py-5 ">
              <BsFillInboxesFill className=" bg-lightred  px-4 relative top-0 w-14 h-14  text-red rounded-full" />
              <h1 className="font-bold font-poppins text-xl">Email us</h1>
              <p className="w-80 text-lightgray text-center">
                Large above be to means. Him his for sympathize.
              </p>
              <div className="flex gap-2 items-center">
                <button className="flex gap-2 items-center  rounded-md font-semibold text-sm text-purple">
                  <i class="fa-solid fa-envelope"></i>
                  <span className="">
                    <a
                      className="underline"
                      href="mailto:   kk106767@gmail.com">
                      kk106767@gmail.com
                    </a>
                  </span>
                </button>
              </div>
            </figure>
            <figure className="flex flex-col items-center pt-4 gap-2 h-[15rem] w-[21rem] rounded-2xl bg-black shadow-2xl  ">
              <BsGlobe
                className="text-xl bg-lightorange
               p-4 w-14 h-14 text-orange rounded-full  relative top-0"
              />
              <h1 className="font-bold font-poppins text-xl">Social Media</h1>
              <p className="w-80 text-lightgray text-center">
                Sympathize Large above be to means.
              </p>
              <div className="flex gap-2 items-center">
                <a
                  href="https://www.facebook.com/profile.php?id=100092852084376"
                  target="_blank">
                  <button className="bg-facebook px-2.5 text-md py-1 rounded-md">
                    <i class="fa-brands fa-facebook-f  text-white"></i>
                  </button>
                </a>
                <button className="bg-instagram px-2.5 text-md py-1 rounded-md">
                  <i class="fa-brands fa-instagram  text-white"></i>
                </button>
                <a href="https://twitter.com/Skyglide115" target="_blank">
                  <button className="bg-twitter px-2.5 text-md py-1 rounded-md">
                    <i class="fa-brands fa-twitter text-white"></i>
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/kishore-kumar-530504225/
                  "
                  target="_blank">
                  <button className="bg-linkedin px-2.5 text-md py-1 rounded-md">
                    <i class="fa-brands fa-linkedin text-white bg-transparent"></i>
                  </button>
                </a>
              </div>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactSection1