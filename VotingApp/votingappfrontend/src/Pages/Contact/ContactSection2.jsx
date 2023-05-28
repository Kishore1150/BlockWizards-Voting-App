import React from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

import contact from "../../Assets/images/Home/contact/contacts.jpg";

const ContactSection2 = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_a54pkdo",
        "template_mp4eibq",
        e.target,
        "7c8Zp_UJiaLlqMF9Q"
      )
      .then((res) => {
        // console.log(res);
        toast.success("Email Sent Successfully");
      });
  }

  return (
    <>
      <main className="h-[40rem]">
        <section className="flex gap-5 justify-center">
          <figure className="">
            <img
              src={contact}
              width="550"
              alt="ready for vacation?"
              className="rounded-lg "
            />
          </figure>
          <form
            onSubmit={sendEmail}
            className="w-[34rem] bg-black text-black p-8 rounded-xl">
            <div className="flex flex-col gap-7">
              <h1 className="font-bold text-white mt-3 font-poppins text-4xl">
                Send us message
              </h1>
              <div className="flex gap-8 ">
                <div className="flex flex-col gap-1 ">
                  <p className="text-lightgray">
                    Your name <span>*</span>
                  </p>
                  <input
                    className="rounded-md
                     border-bordergray text-black p-2 h-[2.5rem] w-[14rem]"
                    type="text"
                    name="user_name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-lightgray">
                    Email address <span>*</span>
                  </p>
                  <input
                    className="rounded-md border-bordergray  p-2  text-black  h-[2.5rem] w-[14rem]"
                    type="text"
                    name="user_email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lightgray">
                  Mobile Number <span>*</span>
                </p>
                <input
                  type="text"
                  name="user_mobilenumber"
                  className="rounded-md border-bordergray  p-2  text-black  h-[2.5rem] w-[30rem]"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lightgray">
                  Message <span>*</span>
                </p>
                <textarea
                  className="rounded-md border-bordergray  p-2  text-black h-[5.5rem] w-[30rem]"
                  type=""
                  name="message"
                  required
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  className="rounded-[5px] bg-blue border-none "
                  type="checkbox"
                  name=""
                  value=""
                  required
                />
                <p className="text-lightgray text-sm">
                  By submitting this form you agree to our terms and conditions.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-white text-black  mt-5 px-4 py-2 font-semibold  rounded-lg">
                Send Message
              </button>
              <input
                type="reset"
                value="Clear"
                className="bg-white text-black  mt-5 px-4 py-2 font-semibold  rounded-lg"
              />
            </div>
          </form>
          <Toaster />
        </section>
      </main>
    </>
  );
};

export default ContactSection2;
