"use client"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Download, FolderKanban } from "lucide-react"

const Hero = () => {
  return (
    <section
      id="home"
      className="py-56 bg-gray-50 flex items-center justify-center min-h-screen relative overflow-hidden"
    >
      {/* Animated background blur circles */}
      <div className="absolute inset-0">
        {/* Center circle - with subtle floating animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.2,
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/3 w-[450px] h-[450px] bg-black rounded-full blur-3xl"
        ></motion.div>

        {/* Top left circle - with different animation timing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.15,
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-[-10%] left-[-5%] w-[350px] h-[350px] bg-black rounded-full blur-3xl"
        ></motion.div>

        {/* Bottom right circle - with different animation timing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.1,
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[-20%] right-[-8%] w-[500px] h-[500px] bg-black rounded-full blur-3xl"
        ></motion.div>

        {/* Small top right circle - with different animation timing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.15,
            scale: [1, 1.1, 1],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute top-[10%] right-[15%] w-[200px] h-[200px] bg-black rounded-full blur-2xl"
        ></motion.div>

        {/* Extra small random circle - with different animation timing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.2,
            scale: [1, 1.2, 1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[60%] right-[30%] w-[120px] h-[120px] bg-black rounded-full blur-xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center">
          <motion.div className="w-full px-4 md:w-1/2 mb-4 md:mb-0 text-center">
            {/* Staggered animation for the name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 className="font-bold font-inter my-1 text-slate-900 text-[44px] sm:text-5xl">
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  HELMI SA&apos;ID{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-primary"
                >
                  HIDAYATULLOH
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Enhanced typing animation with better styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-4 mb-6 relative"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                className="h-[2px] bg-gray-200 absolute bottom-[-10px] left-0 right-0 mx-auto max-w-[300px]"
              />
              <TypeAnimation
                sequence={["A Front-end Developer", 3000, "A Back-end Developer", 3000, "A UI/UX Designer", 3000]}
                speed={50}
                deletionSpeed={65}
                wrapper="div"
                cursor={true}
                repeat={Number.POSITIVE_INFINITY}
                className="text-2xl md:text-3xl font-medium text-gray-700"
                style={{
                  display: "inline-block",
                  minHeight: "1.5em",
                }}
              />
            </motion.div>

            {/* Animated buttons with staggered entrance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="mt-16 flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-black text-white px-4 py-3 md:px-4 md:py-2 lg:px-6 lg:py-3 outline outline-1 outline-slate-950 hover:outline-slate-500 font-semibold rounded-md hover:bg-gray-100 hover:text-black transition-all duration-300 ease-in-out shadow-xl flex items-center justify-center gap-2 text-sm lg:text-base whitespace-nowrap"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  <Download className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.div>
                Download CV
              </motion.button>

              <motion.button
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-gray-100 text-slate-900 px-4 py-3 md:px-4 md:py-3 lg:px-6 lg:py-3 outline outline-1 outline-slate-300 hover:outline-slate-400 font-semibold rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out shadow-xl flex items-center justify-center gap-2 text-sm lg:text-base whitespace-nowrap"
              >
                <motion.div
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  <FolderKanban className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.div>
                Visit My Project
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
