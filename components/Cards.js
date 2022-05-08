import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { topContainerAnimation, cardAnimation } from "../components/Animations";

export default function Cards() {
  const [element, controls] = useScroll();
  return (
    <>
      <motion.div
        ref={element}
        variants={topContainerAnimation}
        animate={controls}
        transition={{
          duration: 1,
        }}
        className="relative flex flex-col items-center justify-center mb-8 mt-28"
      >
        <h2 className="text-[36px]">Did You Know?</h2>
      </motion.div>
      <div ref={element}>
        <div className="relative flex flex-row items-center justify-center">
          <div className="relative grid grid-cols-2 grid-rows-2 gap-14">
            <motion.div
              whileHover={{ y: -5 }}
              initial="hidden"
              animate={["show", controls]}
              variants={cardAnimation}
              transition={{ delay: 0.1, stiffness: 300 }}
              className="flex flex-col  bg-[#4a5673]/20 border-white/10 border-2 rounded-lg items-center p-5"
            >
              <h1 className="mb-5">1</h1>
              <h2>Learn Basic</h2>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              initial="hidden"
              animate={["show", controls]}
              variants={cardAnimation}
              transition={{ delay: 0.1, stiffness: 300 }}
              className="flex flex-col bg-[#4a5673]/20 border-white/10 border-2 rounded-lg items-center p-5"
            >
              <h1>2</h1>
              <h2>Find</h2>
              <h2> Mentor/Accountability</h2>
              <h2> Partner</h2>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              initial="hidden"
              animate={["show", controls]}
              variants={cardAnimation}
              transition={{ delay: 0.1, stiffness: 300 }}
              className="flex flex-col bg-[#4a5673]/20 border-white/10 border-2 rounded-lg items-center p-5"
            >
              <h1>3</h1>
              <h2>Join</h2>
              <h2> Group Hackathon</h2>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              initial="hidden"
              animate={["show", controls]}
              variants={cardAnimation}
              transition={{ delay: 0.1, stiffness: 300 }}
              className="flex flex-col bg-[#4a5673]/20 border-white/10 border-2 rounded-lg items-center p-5"
            >
              <h1 className="mb-5">4</h1>
              <h2>Make Portfolio</h2>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center mt-40">
          <h2>
            And We Are Here To Provide You Everything For Free To Complete!
          </h2>
        </div>
      </div>
    </>
  );
}
