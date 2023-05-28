import React from 'react'
import apps from '../../Assets/images/Home/apps.png'
const LandingSection3 = () => {
  return (
    <>
      <section className="mt-20">
        <div className="flex items-start justify-around">
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 text-2xl">
              <button>VOTE ECOSYSTEM </button>
              <span>
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </div>
            <div className="text-3xl w-[20rem] leading-[50px]">
              A growing network of DeFi Apps.
            </div>
            <p className="w-[25rem] text-xl text-lightgray">
              Developers, voters, and governance participants participate
              together in a decision-making marketplace that is open and
              accessible to all.
            </p>
          </div>
          <div>
            <figure className="h-50">
              <img
                className="rounded-xl"
                src={apps}
                width="530"
                height="300"
                alt=""
              />
              <div className='relative flex flex-col gap-3 bottom-56 left-12 w-fit
              '>
                <span className='text-5xl font-bold '>10+ </span>
                <span className='text-bordergray text-xl'>Integrations </span>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingSection3