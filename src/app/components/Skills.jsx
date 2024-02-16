import React from "react";
import "./components.css";
const skillsData = [
  {
    id: 1,
    name: "HTML",
  },
];

export default function Skills() {
  return (
    <section className="Skills w-full" id="skills">
       <div class="lamp">
  <span class="lamp-glow"></span>
</div>
         <h1 className="text-white text-2xl text-center">
          Skills for success, simplified.
        </h1>
      <div className="container flex flex-wrap">
       
        {/* 1circular bar */}
       <div className="circle-wrap ">
        <div className="circle">

        <div className="mask full-1">
            <div className="fill-1"></div>
        </div>

        <div className="mask half">
            <div className="fill-1"></div>
        </div>

        <div className="inside-circle w-[124px] h-[124px] rounded-[50%] bg-black absolute mt-[13px] ms-[13px] z-[100] text-[2rem] font-bold text-center text-white">90%</div>

        </div>
       </div>


      </div>
    </section>
  );
}
