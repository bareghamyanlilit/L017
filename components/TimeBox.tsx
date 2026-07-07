import { anim, text } from "@/data/data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const weddingDate: any = text.time; 

export function TimeBox() {
  const [timeLeft, setTimeLeft] : any= useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now: any = new Date();
      const diff = weddingDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

        setTimeLeft({
          days: pad(days),
          hours: pad(hours),
          minutes: pad(minutes),
          seconds: pad(seconds),
          finished: false,
        });
      } else {
        setTimeLeft((prev: any) => ({ ...prev, finished: true }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
     <motion.section {...anim}  className=" my-5  text-center  text-vrayi">

      <div className="">
        {timeLeft.finished ? (
          <div className="text-white text-2xl font-semibold px-4  rounded-xl ">
            Հարսանիքն արդեն սկսվել է 
          </div>
        ) : (
          <div className="flex items-center justify-center   ">
            <TimeBoxItem label="Օր" value={timeLeft.days} /> <span className="w-12 rotate-90 h-px  bg-[#2D2D2D]"></span>
            <TimeBoxItem label="Ժամ" value={timeLeft.hours} /> <span className="w-12 rotate-90 h-px  bg-[#2D2D2D]"></span>
            <TimeBoxItem label="Րոպե" value={timeLeft.minutes} /> <span className="w-12 rotate-90 h-px  bg-[#2D2D2D]"></span>
            <TimeBoxItem label="Վրկ." value={timeLeft.seconds} />
          </div>
        )}
      </div>
    </motion.section>
  );
}

const TimeBoxItem = ({ label, value }: any) => (
  <div className=" text-4xl px-1 text-center ">
    <h2 className="mt-1 ">{value}</h2>
    <p className=" text-xl">{label}</p>
  </div>
);
