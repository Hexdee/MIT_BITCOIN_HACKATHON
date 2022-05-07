import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import hackathon from "../public/hackathon.svg";
import { videoAnimation, reasonsAnimation } from "../components/Animations";

export default function Roadmap() {
  const [element, controls] = useScroll();
  return (
    <>
      <div
        ref={element}
        className="relative flex flex-col items-center justify-center mt-36
                      laptop:flex-row"
      >
        <div className="laptop:mr-5">
          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ y: 0 }}
            variants={videoAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <Image src={hackathon} alt="image" />
          </motion.div>
        </div>
        <motion.div
          variants={reasonsAnimation}
          animate={controls}
          transition={{ type: "tween", duration: 0.5 }}
          className="laptop:w-1/2"
        >
          <h1 className="mb-6 laptop:mb-8">Our Hackathon</h1>
          <h4>
            In order to become a developer the fastest way is to work on the
            project. Even if you have knowledge it is meaningless if you cannot
            develop a thing or can&apos;t communicate in a group.
          </h4>
          <h4>
            {" "}
            In this project, you get to work with other people in order to work
            on the social cause project of your interest. Thereafter, you can
            decide either sell your project IP or get our consultant to make it
            a business.
          </h4>

          <button className="primary mt-6">Join Discord&nbsp;</button>
        </motion.div>
      </div>
    </>
  );
}
