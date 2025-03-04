"use client";

import React, { useRef, useState } from "react";

import {
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const SocialIcon = ({ icon: Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon className="social-icon hover:text-[#00df9a]" size={30} />
  </a>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_3xuushx", // Ganti dengan ID layanan Anda
        "template_6vzgpoi", // Ganti dengan ID template Anda
        {
          from_name: form.name,
          to_name: "Helmi Said", // Ganti sesuai kebutuhan
          from_email: form.email,
          to_email: "saidkun219@gmail.com", // Ganti dengan email tujuan
          message: form.message,
        },
        "Lhvej7L5YpNxfXRtc" // Ganti dengan user ID Anda
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const items = [
    { 
      type: "icon", 
      icon: FaInstagram, 
      href: "https://instagram.com/sdhdyttllh" 
    },
    { 
      type: "icon", 
      icon: FaTwitterSquare, 
      href: "https://twitter.com/" 
    },
    { 
      type: "icon", 
      icon: FaGithubSquare, 
      href: "https://github.com/helmisaid" 
    },
    { 
      type: "icon", 
      icon: FaLinkedin, 
      href: "https://www.linkedin.com/in/helmi-said-hidayatulloh-842629284" 
    },
  ];

  return (
    <section id="contact">
      <div className="font-semibold bg-gradient-to-br from-slate-900 to-teal-700 mx-auto py-16 px-4">
        <div className="container grid lg:grid-cols-2 gap-8">
          <div className="pr-8 md:pr-56 text-slate-200 pt-20">
            <h1 className="w-full mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-br from-slate-200 to-teal-300 bg-clip-text text-transparent">
              Get in touch.
            </h1>
            <p className="py-4">
              Senang dapat mengenal Anda😁.
              <br />
              Anda dapat menghubungi saya dengan beberapa media sosial milik
              saya.
            </p>
            <div className="flex justify-between md:w-[75%] my-6">
              {items.map((item, index) =>
                item.type === "icon" ? (
                  <SocialIcon key={index} icon={item.icon} href={item.href} />
                ) : null
              )}
            </div>
          </div>

          <div className="justify-between mt-2">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
              <h1 className="font-bold text-2xl bg-gradient-to-br from-slate-200 to-teal-300 bg-clip-text text-transparent">
                Send me a message
              </h1>
            </div>
            <div className="md:max-w-full w-full mx-auto">
              <div className="sm:rounded-md p-6">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="mt-12 flex flex-col gap-8"
                >
                  <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">
                      Your Name
                    </span>
                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your good name?"
                      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">
                      Your email
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your email address?"
                      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">
                      Your Message
                    </span>
                    <textarea
                      rows={7}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What you want to say?"
                      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                    />
                  </label>

                  <button
                    type="submit"
                    className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-sm bg-gradient-to-br from-slate-200 to-teal-300 bg-clip-text text-transparent">
            Made happily with 🤍 by helmisaid
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
