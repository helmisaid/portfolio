"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <section id="home" className="py-56 bg-gray-50">
        <div className="container">
          <div className="flex flex-wrap">
          <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full self-center px-10 md:w-1/2 mb-4 md:mb-0"
            >
              <h1 className="font-semibold font-inter my-1 text-slate-900 text-3xl sm:text-4xl md:text-5xl">
                HELMI SA&apos;ID{" "}
                <span className="text-primary">HIDAYATULLOH</span>
              </h1>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "A Front-end Developer",
                  1000,
                  "A Back-end Developer",
                  1000,
                  "A UI/UX Designer",
                  1000,
                ]}
                speed={30}
                style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
              <div className="mt-5">
                <button className="bg-black text-white px-6 py-3 outline outline-1 hover:outline-slate-950 font-semibold border-gray-950 rounded-md hover:bg-white hover:text-black hover:delay-200 transition-all duration-200 ease-in-out shadow-xl">Download CV</button>
              </div>
            </motion.div>
            
            {/* <div className="w-full md:w-80 lg:w-96 flex justify-center md:justify-start lg:justify-end md:ml-0 lg:ml-20 px-4 z-10 relative">
              <div className="w-full h-full drop-shadow-2xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image src={Helmi} alt="helmi" layout="responsive" width={700} height={875} objectFit="contain" />
                </motion.div>
              </div>
            </div> */}
          </div>
            
        </div>
      </section>
    </>
  );
};

export default Hero;
