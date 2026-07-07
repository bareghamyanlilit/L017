import { anim } from "@/data/data";
import { motion } from "framer-motion";
import { FaMapMarkedAlt } from "react-icons/fa";

export const program = [
  {
    time: "15:00",
    title: "Պսակադրություն",
    address: "Ս․ Գայանե",
  },
  {
    time: "17:30",
    title: "Հարսանյաց սրահ",
    address: "Արև Ռեստորանային Համալիր",
  },
];

export const programImgs=['/ekexeci.jpg','/restoran.jpg']

export function Program() {
  return (
    <section className=" text-vrayi px-6 pt-12 FontMassis">
      {program.map((item, i) => (
        <div className=" bg-cover font-bold  bg-no-repeat  bg-center" key={i}>
          <ProgramItem {...item} />
        </div>
      ))}
    </section>
  );
}

const getImage = (title:any) => {
  if (title === "Պսակադրություն") return programImgs[0];
  if (title === "Հարսանյաց հանդիսություն") return programImgs[1];
  return null;
};

const ProgramItem = ({ src, icon, time, title, address }:any) => {
  const img = getImage(title);

  return (
    <div className="my-4 flex gap-4 flex-col items-center text-xl">
      {icon &&
        <motion.p {...anim} className="text-4xl">
          {icon}
        </motion.p>
      }
      {src &&
        <motion.img {...anim}
          src={src}
          className="w-20 opacity-60 object-contain"
        />
      }
      <motion.p {...anim} className="opacity-80 text-2xl">
        {time}
      </motion.p>
      <motion.h3 {...anim} className=" text-center text-4xl">{title}</motion.h3>
      <motion.p {...anim} className="text-xl opacity-80">
        {address}
      </motion.p>

      <motion.a
        {...anim}
        href={`https://www.google.com/maps/search/${address}`}
        target="_blank"
        className="inline-flex items-center gap-2 px-4 py-1.5 text-sm"
      >
        <FaMapMarkedAlt />
        Ինչպես հասնել
      </motion.a>
      {img && <motion.img {...anim} src={img} className="my-2 max-w-full " />}


      {title !== "Հարսանյաց հանդիսություն" && (
        <motion.img {...anim}
          src='/iconloc.png'
          className=" w-20 opacity-60 my-10"
        />
      )}
    </div>
  );
};
