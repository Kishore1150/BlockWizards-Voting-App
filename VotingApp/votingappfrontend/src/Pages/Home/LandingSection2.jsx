import React from 'react'

const LandingSection2 = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-center gap-24 mt-10">
          <div className="flex flex-col gap-3  items-center">
            <h1 className="font-bold text-5xl">₹1.4T+</h1>
            <p className="text-md text-bordergray">Voting Volume</p>
          </div>

          <div className="flex flex-col gap-5  items-center">
            <h1 className="font-bold text-5xl">151M+</h1>
            <p className="text-md text-bordergray">All Time Votes</p>
          </div>

          <div className="flex flex-col gap-3  items-center">
            <h1 className="font-bold text-5xl">300</h1>
            <p className="text-md text-bordergray">Integrations</p>
          </div>

          <div className="flex flex-col gap-3  items-center">
            <h1 className="font-bold text-5xl">4,400+</h1>
            <p className="text-md text-bordergray">Community Delegates</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingSection2