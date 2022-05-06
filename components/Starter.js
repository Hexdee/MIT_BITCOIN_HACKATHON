import { useScroll } from "../components/useScroll";
import Image from "next/image";
import { motion } from "framer-motion";

import about from "../public/about.png";
// import rocket from "../../public/img/emoji/rocket.png";
// import party from "../../public/img/emoji/party-popper.png";
import { headerAnimation, imageAnimation } from "../components/Animations";

export default function Starter() {
  const [element, controls] = useScroll();
  return (
    <div
      ref={element}
      className="relative flex flex-col pt-24
                      laptop:grid laptop:grid-cols-2"
    >
      <div
        className="relative flex flex-col mb-6 justify-center
                        laptop:order-2 laptop:mb-0"
      >
        <motion.div
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <Image layout="fixed" src={about} alt="image" />
        </motion.div>
      </div>

      <div
        className="relative flex flex-col items-center
                        laptop:block laptop:order-1"
      >
        <div
          className="relative flex flex-col items-center
                          laptop:items-start "
        >
         
          <h1 className="mb-1">Be the Cause</h1>
          <h1 className="mb-1"> Change The World</h1>
        
          <div
            className="relative sub-heading-1 mb-6 text-center max-w-[50%]
                          laptop:mb-11 laptop:text-left laptop:max-w-[75%]"
          >
            iLearnX is the world first platform to allow people to provide
            reference to learning materials to release Social Project based on
            blockchain. This project is free for anyone who complete the 3 weeks
            process. For more details check below
          </div>
        </div>
        <motion.button whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
          <button className="primary">
            Join community&nbsp;
            {/* <Image width={20} height={20} src={party} alt="image" /> */}
          </button>
        </motion.button>
      </div>
    </div>
  );
}
