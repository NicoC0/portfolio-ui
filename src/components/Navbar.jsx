import React, { useState } from "react";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import styles from "../style";

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  
  return (
    <nav className="w-full flex py-6 justify-end items-end mx-10">
      <ul className="list-none flex flex-row sm:flex hidden">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`font-heebo font-semibold text-[20px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-5' } `}
          >
            <a href={`${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex justify-end items-start">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          // I use prevState because it is the correct way to revert to the previous state in react
          onClick={() => setToggle((prevState) => !prevState)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-lightGray absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl justify-center`}>
          <ul className={`list-none ${styles.flexCenter}  flex-col`}>
            {navLinks.map((link, index) => (
              <li key={link.id}
                className={`font-normal text-[16] py-6`}
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
