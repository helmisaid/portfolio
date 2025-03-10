"use client";

import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

import {
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const SocialIcon = ({ icon: Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon className="social-icon text-slate-700 hover:text-slate-500" size={30} />
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
        "service_3xuushx",
        "template_6vzgpoi",
        {
          from_name: form.name,
          to_name: "Helmi Said Hidayatulloh",
          from_email: form.email,
          to_email: "saidkun219@gmail.com",
          message: form.message,
        },
        "Lhvej7L5YpNxfXRtc"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you. I will get back to you as soon as possible!",
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Ahh, something went wrong. Please try again.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );
  };

  const items = [
    {
      type: "icon",
      icon: FaInstagram,
      href: "https://instagram.com/sdhdyttllh",
    },
    {
      type: "icon",
      icon: FaTwitterSquare,
      href: "https://twitter.com/",
    },
    {
      type: "icon",
      icon: FaGithubSquare,
      href: "https://github.com/helmisaid",
    },
    {
      type: "icon",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/helmi-said-hidayatulloh-842629284",
    },
  ];

  return (
    <section id="contact">
      <div className="font-semibold bg-white mx-auto py-16 px-4 relative">
      <GridPattern
          width={50}
          height={50}
          x={10}
          y={10}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
        <div className="container grid lg:grid-cols-2 gap-8 relative">
          <div className="pr-8 md:pr-56 text-slate-200 pt-20">
            <h1 className="w-full mb-4 text-4xl xl:text-5xl font-bold text-slate-900">
              Get in touch.
            </h1>
            <p className="py-4 text-slate-800">
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
              <h1 className="font-bold text-2xl text-slate-700 bg-clip-text ">
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
                    <span className="text-slate-900 font-large mb-4">
                      Your Name
                    </span>
                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your good name?"
                      className="bg-tertiary py-4 px-6 placeholder:text-slate-500 text-black rounded-lg border border-solid border-gray-500  font-medium"
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-slate-900 font-large mb-4">
                      Your email
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your email address?"
                      className="bg-tertiary py-4 px-6 placeholder:text-slate-500 text-black rounded-lg border border-solid border-gray-500 font-medium"
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-slate-900 font-large mb-4">
                      Your Message
                    </span>
                    <textarea
                      rows={7}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What you want to say?"
                      className="bg-tertiary py-4 px-6 placeholder:text-slate-500 text-black rounded-lg border border-solid border-gray-500 font-medium"
                    />
                  </label>

                  <button
                    type="submit"
                    className="bg-slate-900 hover:bg-slate-600 px-6 py-2 rounded-xl outline-none w-fit text-white font-bold shadow-primary "
                  >Send
                    {/* {loading ? "Sending..." : "Send"} */}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-sm text-slate-950">
            Made happily with 🤍 by helmisaid
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
