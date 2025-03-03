"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

import Image from "next/image";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const [scrollColor, setScrollColor] = useState("text-gray-500");

  useEffect(() => {
    const changeColor = () => {
      if (
        window.scrollY >= document.getElementById("about").offsetTop &&
        window.scrollY < document.getElementById("knowledges").offsetTop
      ) {
        setScrollColor("text-teal-500");
        const itemElement = document.getElementById(`{item}`);
        if (itemElement) {
          itemElement.className = "text-teal-500";
        }
      } else {
        setScrollColor("text-gray-500");
      }
    };

    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const navigation = ["Home", "About", "Knowledges", "Contact"];
  // const navigation = ["Home", "Contact"];

  return (
    <div className="z-50 w-full fixed bg-opacity-100 backdrop-filter backdrop-blur">
      <nav
        className={`container relative flex flex-wrap items-center justify-center p-8 mx-auto lg:justify-center xl:px-0 ${scrollColor}`}
      >
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-center w-full lg:w-auto">
              <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto rounded-md lg:hidden hover:text-teal-500 focus:text-slate-900 focus:bg-teal-100 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      // X icon when menu is open
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.828 4.828 4.829a1 1 0 0 1-1.414 1.414z"
                      />
                    ) : (
                      // Hamburger icon when menu is closed
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        id={item}
                        href={`#${item.toLowerCase()}`}
                        className="w-full px-4 py-2 -ml-4 rounded-md hover:text-teal-500 focus:text-teal-500 "
                      >
                        {item}
                      </Link>
                    ))}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-center flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li
                className="mr-3 nav__item"
                key={index}
                href={`#${menu.toLowerCase()}`}
              >
                <Link
                  href={`#${menu.toLowerCase()}`}
                  className="inline-block px-4 py-2 text-lg font-normal no-underline rounded-md hover:text-teal-500 focus:text-teal-500  focus:outline-none "
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
