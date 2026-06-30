"use client";

import { anim, program } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Timeline() {
  const [progress, setProgress] = useState(0);
  const [height, setHeight] = useState(2000);
  const [heartOpacity, setHeartOpacity] = useState(0);

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
      let opacity = 1;

      // Fade In (0 → 200px)
      if (window.scrollY < 200) {
        opacity = window.scrollY / 200;
      }

      // Fade Out (վերջին 50px)
      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (window.scrollY > maxScroll - 50) {
        opacity = (maxScroll - window.scrollY) / 50;
      }

      opacity = Math.max(0, Math.min(opacity, 1));

      setHeartOpacity(opacity);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative overflow-hidden">

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
        opacity={heartOpacity}
      />

      {/* CONTENT */}
      <div
        ref={timelineRef}
        className="relative z-10 FontArTarumianBarakU py-5 tracking-[25%]"
      >
        <motion.h3
          {...anim}
          className="relative text-2xl font-bold mb-10 text-center"
        >
          ժԱՄԱՆԱԿԱՑՈՒՅՑ

          <p className="absolute -z-1 text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#5800001A]">
            ժԱՄԱՆԱԿԱՑՈՒՅՑ
          </p>
        </motion.h3>
        <div className="mx-auto w-max text-center text-3xl  mb-20">
          <h1 className="mb-10">Հունիս</h1>
          <div className="flex gap-10">
            <span>5</span>
            <span></span>
            <span className="ml-10">5</span>
            <span>5</span>
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
                className={`px-7 ${i % 2 === 0
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
                  className="text-2xl font-bold my-2"
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
      </div>
    </section>
  );
}
function Heart({
  progress,
  opacity,
}: {
  progress: number;
  opacity: number;
}) {
  const [position, setPosition] = useState({
    x: 125,
    y: 140,
  });
  const scale = 0.7 + opacity * 0.3;
  useEffect(() => {
    const path = document.getElementById(
      "timeline-path"
    ) as SVGPathElement | null;

    if (!path) return;

    const length = path.getTotalLength();

   const START_OFFSET = 0.2; // 8%

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

  return (<div
    className="absolute z-50"
    style={{
      left: `calc(50% + ${position.x - 125}px)`,
      top: position.y,
      opacity,
      transform: `translate(-50%, -50%) scale(${scale})`,
      transition: "opacity 0.15s linear",
    }}
  >
    <div className="relative w-14 h-14">
      <Image
        src="/icon1.png"
        alt="heart"
        fill
      />

      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
        06
      </span>
    </div>
  </div>
  );
}