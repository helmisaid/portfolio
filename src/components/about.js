"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="pt-32 pb-32 font-inter shadow-lg bg-gradient-to-br from-teal-950 to-teal-700"
      >
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 pt-5 mb-10 md:w-1/2">
              <h2 className="font-bold mx-4 mb-10 text-3xl bg-gradient-to-br from-slate-200 to-teal-300 bg-clip-text text-transparent">
                About Me👤
              </h2>
              <p className="text-slate-300 font-mono">
                Nama saya{" "}
                <span className="underline">Helmi Said Hidayatulloh</span>. Saya
                merupakan seorang mahasiswa di Universitas Airlangga pada
                program studi D-4 Teknik Informatika. Saya merupakan seorang
                programmer pemula akan tetapi saya akan terus belajar dan
                percaya terhadap diri saya sendiri untuk merealisasikan skill
                yang saya miliki.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-teal-500 font-bold px-4 pt-5 mb-2">
                Want to know more about me?😁
              </h3>
              <div className="w-full md:w-96 px-4 py-5 my-10 md:ml-10 right-0 rounded-xl shadow-lg bg-opacity-80">
                <h2 className="text-slate-200 font-semibold bg-gradient-to-br from-slate-200 to-teal-300 bg-clip-text text-transparent mb-3">
                  Social Media🤝
                </h2>
                <div className="w-10 font-inter">
                  <a
                    href="https://instagram.com/sdhdyttllh"
                    className="mb-2 flex flex-wrap"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex"
                    >
                      <div className="w-5">
                        {/*Logo Instagram */}
                        <LogoInstagram />
                      </div>
                      <div className="flex px-2 w-1/2 font-semibold">
                        <p className="bg-gradient-to-br from-slate-200 to-teal-300 bg-clip-text text-transparent">
                          @sdhdyttllh
                        </p>
                      </div>
                    </motion.div>
                  </a>
                </div>
                <div className="w-10 font-inter">
                  <a
                    href="https://t.me/helmisaid"
                    className="mb-2 flex flex-wrap"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex"
                    >
                      <div className="w-5">
                        {/* Logo Telegram*/}
                        <LogoTelegram />
                      </div>
                      <div className="flex px-2 w-1/2 font-semibold">
                        <p className="bg-gradient-to-br from-slate-200 to-teal-300 bg-clip-text text-transparent">
                          t.me/helmisaid
                        </p>
                      </div>
                    </motion.div>
                  </a>
                </div>
                <div className="w-10 font-inter">
                  <a
                    href="https://instagram.com/sdhdyttllh"
                    className="mb-2 flex flex-wrap"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex "
                    >
                      <div className="w-5">
                        {/* Logo Twitter */}
                        <LogoTwitter />
                      </div>
                      <div className="flex px-2 w-1/2 font-semibold">
                        <p className="bg-gradient-to-br from-slate-200 to-teal-300 bg-clip-text text-transparent">
                          saidkun
                        </p>
                      </div>
                    </motion.div>
                  </a>
                </div>
                <p className="text-white">
                  Di atas merupakan beberapa sosial media yang saya miliki,
                  apabila anda ingin mengenal saya dengan lebih atau mungkin
                  ingin ngopi bareng? Hubungi saya!😁
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function LogoInstagram() {
  return (
    <svg
      id="Logo"
      style={{ enableBackground: "new 0 0 512 512" }}
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M256,49.5c67.3,0,75.2,0.3,101.8,1.5c24.6,1.1,37.9,5.2,46.8,8.7c11.8,4.6,20.2,10,29,18.8c8.8,8.8,14.3,17.2,18.8,29   c3.4,8.9,7.6,22.2,8.7,46.8c1.2,26.6,1.5,34.5,1.5,101.8s-0.3,75.2-1.5,101.8c-1.1,24.6-5.2,37.9-8.7,46.8   c-4.6,11.8-10,20.2-18.8,29c-8.8-8.8-17.2-14.3-29-18.8c-8.9-3.4-22.2-7.6-46.8-8.7c-26.6-1.2-34.5-1.5-101.8-1.5   s-75.2-0.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7c-11.8-4.6-20.2-10-29-18.8c-8.8-8.8-14.3-17.2-18.8-29   c-3.4-8.9-7.6-22.2-8.7-46.8c-1.2-26.6-1.5-34.5-1.5-101.8s0.3-75.2,1.5-101.8c1.1-24.6,5.2-37.9,8.7-46.8   c4.6-11.8,10-20.2,18.8-29c8.8-8.8,17.2-14.3,29-18.8c8.9-3.4,22.2-7.6,46.8-8.7C180.8,49.7,188.7,49.5,256,49.5 M256,4.1   c-68.4,0-77,0.3-103.9,1.5C125.3,6.8,107,11.1,91,17.3c-16.6,6.4-30.6,15.1-44.6,29.1c-14,14-22.6,28.1-29.1,44.6   c-6.2,16-10.5,34.3-11.7,61.2C4.4,179,4.1,187.6,4.1,256c0,68.4,0.3,77,1.5,103.9c1.2,26.8,5.5,45.1,11.7,61.2   c6.4,16.6,15.1,30.6,29.1,44.6c14,14,28.1,22.6,44.6,29.1c16,6.2,34.3,10.5,61.2,11.7c26.9,1.2,35.4,1.5,103.9,1.5   s77-0.3,103.9-1.5c26.8-1.2,45.1-5.5,61.2-11.7c16.6-6.4,30.6-15.1,44.6-29.1c14-14,22.6-28.1,29.1-44.6   c6.2-16,10.5-34.3,11.7-61.2c1.2-26.9,1.5-35.4,1.5-103.9s-0.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2   c-6.4-16.6-15.1-30.6-29.1-44.6c-14-14-28.1-22.6-44.6-29.1c-16-6.2-34.3-10.5-61.2-11.7C333,4.4,324.4,4.1,256,4.1L256,4.1z"
          id="id_101"
          style={{ fill: "rgb(0, 232, 220)" }}
        ></path>
        <path
          d="M256,126.6c-71.4,0-129.4,57.9-129.4,129.4S184.6,385.4,256,385.4S385.4,327.4,385.4,256S327.4,126.6,256,126.6z M256,340   c-46.4,0-84-37.6-84-84s37.6-84,84-84c46.4,0,84,37.6,84,84S302.4,340,256,340z"
          id="id_102"
          style={{ fill: "rgb(5, 232, 228)" }}
        ></path>
        <circle
          cx="390.5"
          cy="121.5"
          r="30.2"
          id="id_103"
          style={{ fill: "rgb(5, 235, 231)" }}
        ></circle>
      </g>
    </svg>
  );
}

function LogoTelegram() {
  return (
    <svg viewBox="1 -35 511.99993 511" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m121.453125 253.171875 63.554687 158.886719 82.75-82.753906 141.535157 112.503906 102.707031-441.308594-512 205.480469zm-39.933594-47.640625 244.046875-97.945312-194.074218 117.363281zm287.535157-89.25-161.980469 148.1875-19.484375 73.425781-36.035156-90.085937zm-149.851563 219.230469 9.816406-36.996094 15.144531 12.035156zm171.65625 53.394531-147.386719-117.152344 221.902344-203.007812zm0 0"
        id="id_101"
        style={{ fill: "rgb(0, 232, 220)" }}
      ></path>
    </svg>
  );
}

function LogoTwitter() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 462.799"
    >
      <path
        fillRule="nonzero"
        d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
        style={{ fill: "rgb(0, 232, 220)" }}
      />
    </svg>
  );
}

export default About;
