"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MusicPlayer } from "@/components/music";
import { anim, text, txt2 } from "@/data/data";
import { TimeBox } from "@/components/TimeBox";
import { Footer } from "./footer";
import Image from "next/image";
import AttendanceGuests from "./RSVP";
import Timeline from "./TimeLine";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [openEnvelope, setOpenEnvelope] = useState(false);

  useEffect(() => {
    if (openEnvelope) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [openEnvelope]);

  return (
    <div
      className={`${openEnvelope ? "" : "relative h-dvh"} tracking-wide bg-guyn FontSHK_Dzeragir max-w-xl overflow-hidden m-auto  `}
    >
      <div
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "animate-bounceYB" : ""} bg-center bg-cover z-51 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 top-[0%]  -translate-x-1/2 -translate-y-1/2 rotate-45  shadow-2xl `}
        style={{ backgroundImage: `url("/envelope.png")` }}
      ></div>
      <div
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "animate-bounceYT" : ""} rotate-225 bg-center bg-cover z-50 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 -bottom-[60%] -translate-x-1/2 -translate-y-1/2   `}
        style={{ backgroundImage: `url("/envelope.png")` }}
      ></div>
      <img
        src="/forenvelope.png"
        alt="envelop"
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "opacity-0" : ""} transition-all duration-100  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  cursor-pointer  md:w-50 md:h-50 z-60 w-30 h-30 `}
      />

      <p
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "opacity-0" : ""} w-full text-center z-70 absolute left-1/2 top-1/5 -translate-x-1/2 -translate-y-1/2 text-[#a79b8d] text-3xl tracking-widest `}
        >Դուք ստացել եք <br/> հրավիրատոմս</p>
      <p
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "opacity-0" : ""} z-70 absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 text-[#a79b8d] text-3xl tracking-widest `}
        >Բացել</p>


      <div className={`max-w-xl m-auto`}>
        {/* music button */}
        <div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="fixed z-10  right-5 top-6 rounded-[10px] w-16 h-16flex justify-center items-center"
          >
            <Image
              src="/musIcon.png"
              alt="music"
              width={20}
              height={20}
              className="w-full p-3 "
            />
          </button>
          <MusicPlayer isPlaying={isPlaying} />
        </div>

        {/* 1 img */}
        <div
          className="min-h-[80vh]   max-w-xl m-auto bg-cover  bg-no-repeat  bg-center  text-vrayi flex flex-col items-center justify-end text-center p-8 "
          style={{
            backgroundImage: "url('/img1.png')",
          }}
        >

        </div>

        <h1 className="  tracking-widest text-center mt-8 mb-15  text-5xl ">
          {text.firstwho}
        </h1>

        <TimeBox />
        <Image
          src="/svg (1).png"
          alt=""
          width={1000}
          height={1000}
          className="w-full px-15 mx-auto mt-15 "
        />
        <div className="text-center bg-bg mt-15 mb-8 text-white! FontSHK_Dzeragir tracking-[8%] px-5 pt-15 pb-10">
          <motion.h2 {...anim} className="mb-5 text-2xl">
            {text.title1}
          </motion.h2>
          <motion.p {...anim} className=" text-2xl">
            {text.descr1}
          </motion.p>
        </div>

        <Timeline />

        {/* 2 img */}
        <section
          className="text-6xl text-[#fdf8f5] h-120 bg-center bg-no-repeat bg-cover mt-10"
          style={{
            backgroundImage: "url('/img2.png')",
          }}
        >
          <div className="h-full p-8  flex flex-col justify-center gap-30 text-center ">
            <motion.div
              {...anim}
              className="relative w-[70%] mx-auto flex flex-col gap-6"
            >
              <p className="text-5xl text-start ">SAVE </p>
              <p className="text-center absolute text-hetevi   w-full text-8xl">
                The
              </p>
              <p className="text-5xl text-end ">DATE</p>
            </motion.div>

            <motion.h2
              {...anim}
              className=" tracking-widest  text-4xl"
            >
              {text.day}
            </motion.h2>
          </div>
        </section>

        {/* text info */}
        <section className="text-center  px-2 py-12">
          <motion.h2
            {...anim}
            className="relative z-1  my-4 text-vrayi text-2xl"
          >
            {text.txtEnd}
          </motion.h2>
        </section>

        {/* RSVP */}
        
      <motion.h1
        {...anim}
        className="text-3xl py-5 text-white bg-bg text-center mb-20 tracking-widest"
      >
        Հրավերի պատասխան
      </motion.h1>
        <AttendanceGuests />


        {/* 2 img */}
        <section
          className="text-6xl text-[#fdf8f5] h-120 bg-center bg-no-repeat bg-cover mt-10"
          style={{
            backgroundImage: "url('/img3.jpg')",
          }}
        >
        </section>
        <Footer />
      </div>
    </div>
  );
}
