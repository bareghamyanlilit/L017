"use client";

import { useState } from "react";
import { Calendar } from "../components/calendar";
import { motion } from "framer-motion";
import { MusicPlayer } from "@/components/music";
import { anim, text, txt2 } from "@/data/data";
import { TimeBox } from "@/components/TimeBox";
import { Footer } from "./footer";
import Image from "next/image";
import AttendanceGuests from "./RSVP";
import Timeline from "./TimeLine";
import { Program } from "./Program";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className=" bg-guyn FontSHK_Dzeragir max-w-xl overflow-hidden m-auto">

      <div className={`max-w-xl m-auto`}>
        {/* music button */}
        <div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="fixed z-10 bg-[#4A4A4A70] right-5 top-6 rounded-[10px] w-16 h-16flex justify-center items-center"
          >
            <Image
              src="/musIcon.png"
              alt="music"
              width={20}
              height={20}
              className="w-full p-3 invert-100"
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

        <h1 className=" tracking-[8%]  text-center my-8 mb-13 text-5xl ">
          {text.firstwho}
        </h1>

        <Image
          src="/svg (1).png"
          alt=""
          width={1000}
          height={1000}
          className="w-full px-15 mx-auto "
        />
        <div className="text-center FontSHK_Dzeragir tracking-[8%] px-5 pt-8">
          <motion.h2 {...anim} className="mb-5 text-vrayi text-2xl">
            {text.title1}
          </motion.h2>
          <motion.p {...anim} className=" text-2xl text-vrayi">
            {text.descr1}
          </motion.p>
        </div>

        <Timeline />

        {/* 2 img */}
        <section
          className="text-6xl text-[#fdf8f5] h-120 bg-center bg-no-repeat bg-cover mt-10"
          style={{
            backgroundImage: "url('/img2.webp')",
          }}
        >
          <div className="h-full p-8 backdrop-brightness-50 flex flex-col justify-center gap-30 text-center ">
            <motion.div
              {...anim}
              className="relative w-[70%] mx-auto flex flex-col gap-6"
            >
              <p className="text-5xl text-start ">SAVE </p>
              <p className="text-center absolute text-[#e3e3e353] -z-1  w-full text-8xl">
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
            <p className=" absolute -z-1 w-max text-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-hetevi ">
              {text.txtEnd}
            </p>
          </motion.h2>
        </section>

        {/* RSVP */}
        <AttendanceGuests />

        {/* <section className="text-center FontSHK_Dzeragir tracking-[8%] px-5 pt-5">
          <TimeBox />
        </section> */}

        <div className="grid grid-cols-2 text-4xl font-bold gap-10 text-center my-20 text-vrayi ">
          <div className="flex flex-col gap-15">
            <motion.h3 {...anim} className="">MY</motion.h3>

            <motion.div {...anim} className="">
              <Image
                src="/img5.jpg"
                width={500}
                height={500}
                alt="img"
                className="w-full object-cover "
              />
            </motion.div>

            <motion.div {...anim} className="">
              <Image
                src="/img7.jpg"
                width={500}
                height={500}
                alt="img"
                className="w-full object-cover "
              />
            </motion.div>
          </div>

          <div className="flex flex-col gap-15">

            <motion.div {...anim} className="">
              <Image
                src="/img6.jpg"
                width={500}
                height={500}
                alt="img"
                className="w-full object-cover "
              />
            </motion.div>

            <motion.div {...anim} className="">
              <Image
                src="/img8.jpg"
                width={500}
                height={500}
                alt="img"
                className="w-full object-cover "
              />
            </motion.div>
            <motion.h3 {...anim} className="">LOVE</motion.h3>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
