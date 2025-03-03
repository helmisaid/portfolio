"use client";
import Image from "next/image";
import Helmi from "../public/img/helmi.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section id="home" className="py-36 bg-slate-100">
        <div className="container">
          <div className="flex flex-wrap">
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              transition={{ duration: 1 }}
              animate={{ opacity: 1, scale: 1, translateY: 4 }}
              className="w-full self-center px-10 md:w-1/2 mb-4 md:mb-0"
            >
              <h1 className="font-semibold font-inter text-primary">
                <span className="text-xl sm:text-3xl">
                  <span className="underline">Hello World</span> 👋,{" "}
                </span>
                <span className="text-slate-900 sm:text-xl">my name is...</span>
              </h1>
              <h3 className="font-semibold font-inter my-1 text-slate-900 text-3xl sm:text-4xl md:text-5xl">
                Helmi Sa&apos;id{" "}
                <span className="text-primary">Hidayatulloh</span>
              </h3>
              <p className="text-base text-slate-600 leading-relaxed my-2 md:text-lg">
                As a student at Airlangga University 4 Years Diploma of
                Informatics Engineering & a Software Developer.
              </p>
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
