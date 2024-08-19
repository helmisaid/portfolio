"use client";
import { motion } from "framer-motion";
import React from "react";

const Knowledges = () => {
  return (
    <>
      <section id="knowledges" className="bg-zinc-50 pb-24">
        <div className="container bg-white rounded-lg">
          <div className="font-inter text-center pb-14">
            <h3 className="font-bold text-3xl text-primary pt-14 mb-2">
              Knowledges
            </h3>
            <p className="text-sm text-slate-600 font- sm:text-base md:text-lg">
              Beberapa techstacks yang saya ketahui.
            </p>
          </div>
          <div className="container mx-auto px-6 font-inter sm:flex sm:flex-wrap gap-5 justify-center">
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-xl shadow-lg bg-zinc-50 mb-4 pb-5 overflow-hidden md:mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72"
            >
              <div className="bg-zinc-50 mx-auto align-center w-24 py-5">
                <LogoReact />
              </div>
              <div className="px-6 pb-5">
                <div className="font-bold text-xl text-slate-700 text-center pb-5">
                  React
                </div>
                <p className="text-sm text-slate-700">
                  Saya memiliki sedikit pengetahuan tentang React Native.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 2.0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-xl shadow-lg bg-zinc-50 mb-4 pb-5 overflow-hidden md:mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72"
            >
              <div className="bg-zinc-50 mx-auto align-center w-24 py-5">
                <LogoTailwind />
              </div>
              <div className="px-6 pb-5">
                <div className="font-bold text-xl text-slate-700 text-center pb-3">
                  Tailwind CSS
                </div>
                <p className="text-sm text-slate-700">
                  Tailwind merupakan library CSS favorit saya dan sering saya
                  gunakan dalam membuat website.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-xl shadow-lg bg-zinc-50 mb-4 pb-5 overflow-hidden md:mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72"
            >
              <div className="bg-zinc-50 mx-auto align-center w-24 py-5">
                <LogoBootstrap />
              </div>
              <div className="px-6 pb-5">
                <div className="font-bold text-xl text-slate-700 text-center pb-5">
                  Bootstrap
                </div>
                <p className="text-sm text-slate-700">
                  Saya menggunakan bootstrap pada beberapa project yang saya
                  buat.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 2.3 }}
              whileHover={{ scale: 1.1, duration: 0.9 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-xl shadow-lg bg-zinc-50 mb-4 pb-5 overflow-hidden md:mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72"
            >
              <div className="bg-zinc-50 mx-auto align-center w-24 py-5">
                <LogoNext />
              </div>
              <div className="px-6 pb-5">
                <div className="font-bold text-xl text-slate-700 text-center pb-3">
                  NextJS
                </div>
                <p className="text-sm text-slate-700">
                  Saya menggunakan Framework NextJS pada beberapa project yang
                  saya buat, terutama website portfolio ini😁.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 2.6 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-xl shadow-lg bg-zinc-50 mb-4 pb-5 overflow-hidden md:mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72"
            >
              <div className="bg-zinc-50 mx-auto align-center w-24 py-5">
                {/* react disini */}
                <LogoLaravel />
              </div>
              <div className="px-6 pb-5">
                <div className="font-bold text-xl text-slate-700 text-center pb-5">
                  Laravel
                </div>
                <p className="text-sm text-slate-700">
                  Saya sedang belajar dalam menggunakan framework laravel,
                  dengan panduan pada matakuliah di kampus saya.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

function LogoReact() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="96px"
      height="96px"
    >
      <path
        fill="#80deea"
        d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
      />
      <path
        fill="#80deea"
        d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
      />
      <path
        fill="#80deea"
        d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
      />
      <circle cx="24" cy="24" r="4" fill="#80deea" />
    </svg>
  );
}

function LogoHTML() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="96px"
      height="96px"
    >
      <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
      <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
      <path
        fill="#FFF"
        d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
      />
      <path
        fill="#EEE"
        d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
      />
    </svg>
  );
}

function LogoCss() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="96px"
      height="96px"
    >
      <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
      <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
      <path
        fill="#FFF"
        d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
      />
      <path
        fill="#EEE"
        d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
      />
    </svg>
  );
}

function LogoJavaScript() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="96px"
      height="96px"
    >
      <path fill="#ffd600" d="M6,42V6h36v36H6z" />
      <path
        fill="#000001"
        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
      />
    </svg>
  );
}

function LogoTailwind() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="96px"
      height="96px"
    >
      <linearGradient
        id="iOmQfjoCC4Hw6zVwRjSDha"
        x1="21.861"
        x2="25.703"
        y1="8.237"
        y2="36.552"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#00c1e0" />
        <stop offset="1" stopColor="#009bb8" />
      </linearGradient>
      <path
        fill="url(#iOmQfjoCC4Hw6zVwRjSDha)"
        d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"
      />
    </svg>
  );
}

function LogoJava() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="96px"
      height="96px"
    >
      <path
        fill="#F44336"
        d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
      />
      <path
        fill="#F44336"
        d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
      />
      <g>
        <path
          fill="#1565C0"
          d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
        />
        <path
          fill="#1565C0"
          d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
        />
        <path
          fill="#1565C0"
          d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
        />
        <path
          fill="#1565C0"
          d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
        />
        <path
          fill="#1565C0"
          d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
        />
      </g>
    </svg>
  );
}

function LogoBootstrap() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="96px"
      height="96px"
      baseProfile="basic"
    >
      <path
        fill="#6c19ff"
        d="M6.391,10.671c-0.085-2.448,1.822-4.706,4.401-4.706h26.42c2.578,0,4.486,2.258,4.401,4.706	c-0.082,2.352,0.024,5.398,0.791,7.882c0.769,2.492,2.066,4.067,4.19,4.269v2.295c-2.124,0.202-3.421,1.777-4.19,4.269	c-0.767,2.484-0.873,5.53-0.791,7.882c0.085,2.448-1.822,4.706-4.401,4.706h-26.42c-2.578,0-4.486-2.258-4.4-4.706	c0.082-2.352-0.025-5.398-0.791-7.882c-0.769-2.492-2.069-4.067-4.194-4.269v-2.295c2.124-0.202,3.425-1.777,4.194-4.269	C6.367,16.07,6.473,13.023,6.391,10.671z"
      />
      <linearGradient
        id="Is-EGaxKcc0Cic9QMqyzGa"
        x1="17.846"
        x2="27.078"
        y1="-147.541"
        y2="-163.153"
        gradientTransform="matrix(1 0 0 -1 0 -132)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#f1e5fc" />
      </linearGradient>
      <path
        fill="url(#Is-EGaxKcc0Cic9QMqyzGa)"
        d="M25.042,34.016c4.366,0,6.997-2.138,6.997-5.664c0-2.665-1.877-4.595-4.665-4.9v-0.111	c2.048-0.333,3.655-2.235,3.655-4.359c0-3.026-2.389-4.997-6.03-4.997h-8.192v20.031H25.042z M19.994,16.525h4.238	c2.304,0,3.612,1.027,3.612,2.887c0,1.985-1.522,3.096-4.281,3.096h-3.57V16.525z M19.994,31.475v-6.594h4.21	c3.015,0,4.579,1.11,4.579,3.276c0,2.165-1.522,3.318-4.394,3.318H19.994z"
      />
    </svg>
  );
}

function LogoPhp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="96"
      height="96"
      viewBox="0 0 30 30"
    >
      <path
        fill="#dcd5f2"
        d="M15,22.5c-7.995,0-14.5-3.364-14.5-7.5S7.005,7.5,15,7.5s14.5,3.364,14.5,7.5S22.995,22.5,15,22.5z"
      ></path>
      <path
        fill="#8b75a1"
        d="M15,8c7.589,0,14,3.206,14,7s-6.411,7-14,7S1,18.794,1,15S7.411,8,15,8 M15,7C6.716,7,0,10.582,0,15 s6.716,8,15,8s15-3.582,15-8S23.284,7,15,7L15,7z"
      ></path>
      <path
        fill="#36404d"
        d="M9.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C10.69 15.599 10.216 16 8.089 16H6.58l.563-3H9.417M9.417 12H6.313L5 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C12.316 13.084 11.039 12 9.417 12L9.417 12zM22.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C23.69 15.599 23.216 16 21.089 16H19.58l.563-3H22.417M22.417 12h-3.104L18 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C25.316 13.084 24.039 12 22.417 12L22.417 12z"
      ></path>
      <g>
        <path
          fill="#36404d"
          d="M17.652,12.424C17.323,12.122,16.742,12,15.875,12h-1.848l0.451-2h-1.017L12,17h1.016l0.841-4h0.171 h1.848c0.91,0,1.094,0.155,1.096,0.155c0.019,0.03,0.058,0.194-0.008,0.532L16.288,17h1.046l0.61-3.121 C18.075,13.212,17.976,12.722,17.652,12.424z"
        ></path>
      </g>
    </svg>
  );
}

function LogoNext() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="96"
      height="96"
      viewBox="0 0 48 48"
    >
      <path
        fill="#212121"
        d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
      ></path>
    </svg>
  );
}

function LogoLaravel() {
  return (
    <svg
      fill="#000000"
      width="96px"
      height="96px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M505.57,234.62c-3.28-3.53-26.82-32.29-39.51-47.79-6.75-8.24-12.08-14.75-14.32-17.45l-.18-.22-.2-.21c-5.22-5.83-12.64-12.51-23.78-12.51a39.78,39.78,0,0,0-5.41.44c-.37.05-.75.11-1.15.15-2.45.27-10.06,1.5-28.14,4.48-14,2.29-35.11,5.77-38.31,6.07l-.71.06-.69.13c-10,1.78-16.62,6.22-19.56,13.19-1.55,3.68-3.22,11.15,2.94,19.86,1.53,2.22,6.83,9.56,15.94,22.17,6.06,8.4,12.87,17.82,18.75,26L259.9,275,150.66,96.05l-.2-.34-.23-.33-.44-.65C145.32,88.17,139.76,80,123.7,80h0c-1.13,0-2.31,0-3.63.11-4.6.25-21.42,1.57-40.89,3.11-21.49,1.69-50.9,4-54.72,4.1h-.73l-.79.08c-9.14.89-15.77,4.6-19.7,11-6.55,10.69-1.42,22.69.26,26.63C6.87,133,37.56,197.7,64.63,254.81c18,37.94,36.58,77.17,38.1,80.65a34.85,34.85,0,0,0,32.94,21.59,46.62,46.62,0,0,0,9.86-1.1l.21,0,.2-.05c13.86-3.38,57.83-14.54,89.2-22.59,1.9,3.32,3.9,6.83,6,10.44,21.93,38.5,37.9,66.35,43.16,73.46C287,421,295,432,310.06,432c5.46,0,10.46-1.4,15.74-2.89l1.53-.43.06,0h.06c10.53-3,150.69-52.16,157.87-55.35l.22-.1c5.44-2.41,13.66-6.05,16.18-15.4,1.65-6.12.18-12.33-4.38-18.46l-.07-.09-.07-.09c-.85-1.1-4-5.21-8.27-10.9-9.13-12.07-23.88-31.57-36.84-48.54,17.37-4.5,38.8-10.11,43.38-11.55,11.47-3.43,14.94-10.69,16-14.73C512.26,250.32,513.29,242.27,505.57,234.62Zm-320,58.19c-17.81,4.17-30.22,7.08-37.89,8.9-6.67-13.34-19.74-39.65-32.5-65.33C85.44,176.46,70.08,145.61,62,129.48l8.15-.7c13.34-1.15,31.61-2.72,41.78-3.57,16.76,28.26,74.32,125.3,96.3,162.3ZM427.58,172h0ZM310.06,416.4h0Zm53.67-56.95c-24.21,8-37.33,12.37-44.42,14.74-6.3-10.34-20.16-33.52-32.47-54.19l115.7-29.48c5,6.81,14.57,19.72,33.46,44.93C417.93,341.49,387.8,351.47,363.73,359.45ZM419.6,237.82l-23.76-31.53c13.67-2.39,21.54-3.77,26.15-4.6l12,14.88,11.94,14.82C437.73,233.38,428.19,235.71,419.6,237.82Z" />
    </svg>
  );
}
export default Knowledges;
