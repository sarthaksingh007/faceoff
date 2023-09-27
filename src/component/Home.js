import React from "react";
// import universe from "../images/universe.jpg";
// import groupimage  from "../images/group.jpg";
// import astranot from "../images/astranot.jpg";
// import down from "../images/down.jpg"
export default function Home() {
  return (
    <div className="mt-36 mx-6">
      <div className="px-6">
        {/* <img src={universe} alt="universeimage" /> */}
      </div>
       <div className="flex">
      <div className="w-2/4 px-6">
        <p className="pl-4 pt-4">
          At odissey, our mission is to inspire, educate, and ignite your
          passion for the cosmos. We are your premier destination for all things
          related to space exploration, astronomy, and the mysteries of the
          universe. Whether you're a seasoned astronomer or a curious novice,
          join us on a journey to the furthest reaches of the cosmos.
        </p>
        <div className="flex">
        <button className="bg-black text-white px-6 py-3 mr-6 ml-4 my-6 rounded-lg">Get Started </button>
        <button className="font-semibold">Watch the Video </button>
        {/* <button className="mx-6"><img className="w-8 h-8" src={groupimage} alt="grpimg" /></button> */}
        </div>
      </div>
        {/* <img className=" h-3/4 absolute right-48 top-52 bg-transparent" src={astranot} alt="astranot" /> */}
        {/* <img className='absolute left-2/4 bottom-6' src={down} alt="down" /> */}
      </div>
    </div>
  );
}
