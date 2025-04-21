"use client"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

const technologies = [
  {
    name: "React",
    icon: <LogoReact />,
    proficiency: 65,
  },
  {
    name: "Tailwind CSS",
    icon: <LogoTailwind />,
    proficiency: 90,
  },
  {
    name: "Bootstrap",
    icon: <LogoBootstrap />,
    proficiency: 75,
  },
  {
    name: "NextJS",
    icon: <LogoNext />,
    proficiency: 80,
  },
  {
    name: "Laravel",
    icon: <LogoLaravel />,
    proficiency: 60,
  },
]

const Knowledges = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const scrollContainerRef = useRef(null)
  const itemRefs = useRef([])

  // Track window width for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Set up intersection observer to detect which item is in view
  useEffect(() => {
    const options = {
      root: scrollContainerRef.current,
      rootMargin: "0px",
      threshold: 0.6, // Item is considered in view when 60% visible
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"))
          if (!isNaN(index)) {
            setActiveIndex(index)
          }
        }
      })
    }, options)

    // Reset itemRefs to ensure we don't have stale refs
    itemRefs.current = itemRefs.current.slice(0, technologies.length)

    // Observe all items
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [windowWidth]) // Re-initialize when window width changes

  // Scroll to item when clicking on indicator dots
  const scrollToItem = (index) => {
    if (scrollContainerRef.current && itemRefs.current[index]) {
      scrollContainerRef.current.scrollTo({
        left: itemRefs.current[index].offsetLeft || 0,
        behavior: "smooth",
      })
    }
  }

  // Calculate card width based on screen size
  const getCardWidth = () => {
    if (windowWidth < 640) {
      return "calc(95% - 8px)"; // Mobile: hampir penuh, kurangi margin
    } else if (windowWidth < 768) {
      return "calc(80% - 12px)"; // Small tablets: sedikit lebih besar
    } else if (windowWidth < 1024) {
      return "calc(60% - 16px)"; // Tablets dan laptop kecil
    } else {
      return "calc(33.333% - 16px)"; // Desktop
    }
  };

  return (
    <section id="knowledges" className="relative py-16 overflow-hidden bg-white">
      <div className="container relative mx-auto px-4 z-10 max-w-7xl">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-3 text-black"
          >
            Knowledges
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.5 w-24 bg-black mx-auto"
          ></motion.div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center text-sm text-gray-500 animate-pulse">
            <span className="mr-2">Swipe</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-[slideRight_1.5s_ease-in-out_infinite]"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex px-[2%] md:px-[5%] lg:px-[10%]">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className="flex-shrink-0 snap-center"
                style={{
                  width: getCardWidth(),
                  marginRight: "16px",
                  scrollSnapAlign: "center",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8 h-full transition-all duration-300 ${
                    activeIndex === index ? "scale-100 shadow-xl" : "scale-95 opacity-70"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={activeIndex === index ? { y: [0, -10, 0] } : {}}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 sm:mb-6 grayscale hover:grayscale-0 transition-all duration-500"
                    >
                      {tech.icon}
                    </motion.div>

                    <h3 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6">{tech.name}</h3>

                    <div className="w-full">
                      <div className="flex justify-between mb-2 text-xs text-gray-500">
                        <span>Beginner</span>
                        <span>Advanced</span>
                      </div>
                      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-black"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator dots */}
        {/* <div className="flex justify-center space-x-2 mt-4">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToItem(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-black scale-150" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>

      {/* Add custom animation keyframes */}
      <style jsx global>{`
        @keyframes slideRight {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }
      `}</style>
    </section>
  )
}

function LogoReact() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
      <path
        fill="#333333"
        d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
      />
      <path
        fill="#333333"
        d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
      />
      <path
        fill="#333333"
        d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
      />
      <circle cx="24" cy="24" r="4" fill="#333333" />
    </svg>
  )
}

function LogoTailwind() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
      <path
        fill="#333333"
        d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"
      />
    </svg>
  )
}

function LogoBootstrap() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%" baseProfile="basic">
      <path
        fill="#333333"
        d="M6.391,10.671c-0.085-2.448,1.822-4.706,4.401-4.706h26.42c2.578,0,4.486,2.258,4.401,4.706	c-0.082,2.352,0.024,5.398,0.791,7.882c0.769,2.492,2.066,4.067,4.19,4.269v2.295c-2.124,0.202-3.421,1.777-4.19,4.269	c-0.767,2.484-0.873,5.53-0.791,7.882c0.085,2.448-1.822,4.706-4.401,4.706h-26.42c-2.578,0-4.486-2.258-4.4-4.706	c0.082-2.352-0.025-5.398-0.791-7.882c-0.769-2.492-2.069-4.067-4.194-4.269v-2.295c2.124-0.202,3.425-1.777,4.194-4.269	C6.367,16.07,6.473,13.023,6.391,10.671z"
      />
      <path
        fill="#ffffff"
        d="M25.042,34.016c4.366,0,6.997-2.138,6.997-5.664c0-2.665-1.877-4.595-4.665-4.9v-0.111	c2.048-0.333,3.655-2.235,3.655-4.359c0-3.026-2.389-4.997-6.03-4.997h-8.192v20.031H25.042z M19.994,16.525h4.238	c2.304,0,3.612,1.027,3.612,2.887c0,1.985-1.522,3.096-4.281,3.096h-3.57V16.525z M19.994,31.475v-6.594h4.21	c3.015,0,4.579,1.11,4.579,3.276c0,2.165-1.522,3.318-4.394,3.318H19.994z"
      />
    </svg>
  )
}

function LogoNext() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
      <path
        fill="#333333"
        d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
      />
    </svg>
  )
}

function LogoLaravel() {
  return (
    <svg fill="#333333" width="100%" height="100%" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M505.57,234.62c-3.28-3.53-26.82-32.29-39.51-47.79-6.75-8.24-12.08-14.75-14.32-17.45l-.18-.22-.2-.21c-5.22-5.83-12.64-12.51-23.78-12.51a39.78,39.78,0,0,0-5.41.44c-.37.05-.75.11-1.15.15-2.45.27-10.06,1.5-28.14,4.48-14,2.29-35.11,5.77-38.31,6.07l-.71.06-.69.13c-10,1.78-16.62,6.22-19.56,13.19-1.55,3.68-3.22,11.15,2.94,19.86,1.53,2.22,6.83,9.56,15.94,22.17,6.06,8.4,12.87,17.82,18.75,26L259.9,275,150.66,96.05l-.2-.34-.23-.33-.44-.65C145.32,88.17,139.76,80,123.7,80h0c-1.13,0-2.31,0-3.63.11-4.6.25-21.42,1.57-40.89,3.11-21.49,1.69-50.9,4-54.72,4.1h-.73l-.79.08c-9.14.89-15.77,4.6-19.7,11-6.55,10.69-1.42,22.69.26,26.63C6.87,133,37.56,197.7,64.63,254.81c18,37.94,36.58,77.17,38.1,80.65a34.85,34.85,0,0,0,32.94,21.59,46.62,46.62,0,0,0,9.86-1.1l.21,0,.2-.05c13.86-3.38,57.83-14.54,89.2-22.59,1.9,3.32,3.9,6.83,6,10.44,21.93,38.5,37.9,66.35,43.16,73.46C287,421,295,432,310.06,432c5.46,0,10.46-1.4,15.74-2.89l1.53-.43.06,0h.06c10.53-3,150.69-52.16,157.87-55.35l.22-.1c5.44-2.41,13.66-6.05,16.18-15.4,1.65-6.12.18-12.33-4.38-18.46l-.07-.09-.07-.09c-.85-1.1-4-5.21-8.27-10.9-9.13-12.07-23.88-31.57-36.84-48.54,17.37-4.5,38.8-10.11,43.38-11.55,11.47-3.43,14.94-10.69,16-14.73C512.26,250.32,513.29,242.27,505.57,234.62Zm-320,58.19c-17.81,4.17-30.22,7.08-37.89,8.9-6.67-13.34-19.74-39.65-32.5-65.33C85.44,176.46,70.08,145.61,62,129.48l8.15-.7c13.34-1.15,31.61-2.72,41.78-3.57,16.76,28.26,74.32,125.3,96.3,162.3ZM427.58,172h0ZM310.06,416.4h0Zm53.67-56.95c-24.21,8-37.33,12.37-44.42,14.74-6.3-10.34-20.16-33.52-32.47-54.19l115.7-29.48c5,6.81,14.57,19.72,33.46,44.93C417.93,341.49,387.8,351.47,363.73,359.45ZM419.6,237.82l-23.76-31.53c13.67-2.39,21.54-3.77,26.15-4.6l12,14.88,11.94,14.82C437.73,233.38,428.19,235.71,419.6,237.82Z" />
    </svg>
  )
}

export default Knowledges
