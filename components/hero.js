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
      {/* Background blur circles */}
      <div className="absolute inset-0">
        {/* Center circle - moved slightly to the left */}
        <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/3 w-[450px] h-[450px] bg-black rounded-full blur-3xl opacity-20"></div>

        {/* Top left circle */}
        <div className="absolute top-[-10%] left-[-5%] w-[350px] h-[350px] bg-black rounded-full blur-3xl opacity-15"></div>

        {/* Bottom right circle */}
        <div className="absolute bottom-[-20%] right-[-8%] w-[500px] h-[500px] bg-black rounded-full blur-3xl opacity-10"></div>

        {/* Small top right circle */}
        <div className="absolute top-[10%] right-[15%] w-[200px] h-[200px] bg-black rounded-full blur-2xl opacity-15"></div>

        {/* Extra small random circle */}
        <div className="absolute top-[60%] right-[30%] w-[120px] h-[120px] bg-black rounded-full blur-xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full px-4 md:w-1/2 mb-4 md:mb-0 text-center"
          >
            <h1 className="font-semibold font-inter my-1 text-slate-900 text-4xl md:text-5xl">
              HELMI SA&apos;ID <span className="text-primary">HIDAYATULLOH</span>
            </h1>
            <TypeAnimation
              sequence={["A Front-end Developer", 1000, "A Back-end Developer", 1000, "A UI/UX Designer", 1000]}
              speed={30}
              style={{ fontSize: "2em" }}
              repeat={Number.POSITIVE_INFINITY}
            />
            <div className="mt-20 flex justify-center gap-4">
              <button className="bg-black text-white px-6 py-3 outline outline-1 outline-slate-950 hover:outline-slate-500 hover:-translate-y-1 hover:scale-100 font-semibold rounded-md hover:bg-gray-100 hover:text-black hover:delay-200 transition-all duration-200 ease-in-out shadow-xl flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </button>
              <button className="bg-gray-100 text-slate-900 px-6 py-3 outline outline-1 outline-slate-300 hover:outline-slate-400 hover:-translate-y-1 hover:scale-100 font-semibold rounded-md hover:bg-white hover:text-black hover:delay-200 transition-all duration-200 ease-in-out shadow-xl flex items-center gap-2">
                <FolderKanban className="w-5 h-5" />
                Visit My Project
              </button>
            </div>
          </motion.div>

          {/* Uncomment and adjust if you want to include the image */}
          {/* <div className="w-full md:w-80 lg:w-96 flex justify-center px-4 z-10 relative">
            <div className="w-full h-full drop-shadow-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={Helmi || "/placeholder.svg"}
                  alt="helmi"
                  layout="responsive"
                  width={700}
                  height={875}
                  objectFit="contain"
                />
              </motion.div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
