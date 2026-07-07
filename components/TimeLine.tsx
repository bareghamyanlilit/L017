"use client";

import { anim, program, text } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Timeline() {
  const [progress, setProgress] = useState(0);
  const [height, setHeight] = useState(2000);

  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (timelineRef.current) {
        setHeight(timelineRef.current.scrollHeight);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = timelineRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = section.offsetHeight;

      const start = sectionTop - window.innerHeight / 2;
      const end = sectionTop + sectionHeight - window.innerHeight / 2;

      const progress = Math.min(
        Math.max((window.scrollY - start) / (end - start), 0),
        1
      );
      setProgress(progress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-5">

      {/* SVG PATH */}
      <svg
        className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none z-0"
        width="250"
        height={height}
        viewBox={`0 0 250 ${height}`}
        preserveAspectRatio="none"
      >
        <path
          id="timeline-path"
          d={`
            M125 0
            C220 ${height * 0.08}
              30 ${height * 0.16}
              125 ${height * 0.24}

            C220 ${height * 0.32}
              30 ${height * 0.40}
              125 ${height * 0.48}

            C220 ${height * 0.56}
              30 ${height * 0.64}
              125 ${height * 0.72}

            C220 ${height * 0.80}
              30 ${height * 0.88}
              125 ${height}
          `}
          fill="none"
          stroke="#999"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
      </svg>

      {/* HEART */}
      <Heart
        progress={progress}
      />

      {/* CONTENT */}
      <div
        ref={timelineRef}
        className="relative z-10 FontArTarumianBarakU py-5 tracking-[25%]"
      >

        <div className=" relative z-20 mx-auto w-max text-center text-4xl  mb-20">
          <Image
            src="/svg (1).png"
            alt=""
            width={1000}
            height={1000}
            className="w-full mx-auto mb-10 "
          />
          <h1 className=" text-3xl  mt-5 mb-9">{text.days[0]}</h1>
          <div className="flex gap-4">
            <span className="ml-2">{text.days[1]}</span>
            <span></span>
            <span className="mx-1 ml-12">{text.days[3]}</span>
            <span>{text.days[4]}</span>
          </div>
        </div>

        <div className="flex flex-col gap-24">
          {program.map((el: any, i: number) => (
            <div
              key={i}
              className={`flex items-center justify-end ${i % 2 === 0 ? "justify-start" : ""
                }`}
            >
              <Link
                href={
                  el.address
                    ? `https://www.google.com/maps/search/${el.address}`
                    : "#"
                }
                className={`px-3 ${i % 2 === 0
                  ? "text-start"
                  : "text-end"
                  }`}
              >
                <motion.h2
                  {...anim}
                  className="text-4xl"
                >
                  {el.time}
                </motion.h2>

                <motion.p
                  {...anim}
                  className="text-2xl  my-2"
                >
                  {el.title}
                </motion.p>

                <motion.h3
                  {...anim}
                  className={`flex gap-2 items-center text-lg ${i % 2 !== 0
                    ? "flex-row-reverse"
                    : ""
                    }`}
                >
                  <span>Հասցե</span>

                  <Image
                    src="/icon3.png"
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </motion.h3>
              </Link>
            </div>
          ))}
        </div>

        <div className="w-full h-60 absolute -top-20  bg-guyn"></div>

      </div>
    </section>
  );
}

function Heart({
  progress,
}: {
  progress: number;
}) {
  const [position, setPosition] = useState({
    x: 99.5892,
    y: 210, // սկզբնական դիրք
  });

  const scale = 1;

  useEffect(() => {
    if (progress <= 0) {
      setPosition({
        x: 99.5892,
        y: 210,
      });
      return;
    }

    const path = document.getElementById(
      "timeline-path"
    ) as any;

    if (!path) return;

    const length = path.getTotalLength();

    const START_OFFSET = 0.2;

    const point = path.getPointAtLength(
      Math.min(
        length * (START_OFFSET + progress * (1 - START_OFFSET)),
        length
      )
    );

    setPosition({
      x: point.x,
      y: point.y,
    });
  }, [progress]);

  return (
    <div
      className="absolute z-50"
      style={{
        left: `calc(50% + ${position.x - 125}px)`,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${scale})`,
      }}
    >
      <div className="relative w-14 h-14">
        <Image
          src="/icon1.png"
          alt="heart"
          fill
        />

        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
          {text.days[2]}
        </span>
      </div>
    </div>
  );
}