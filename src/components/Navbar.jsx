import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>ATLAR</h1>
      </div>
      <ul className='hidden md:flex'>
        <li>  </li>
        <li><button>Home</button></li>
        <li> <button>Teste1</button></li>
        <li><button>Teste2</button></li>
        <li><button>Teste3</button></li>
        <li><button>Teste4</button></li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='' size={20} />
        <BsPerson size={20} />
      </div>
      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>
       {/* Mobile menu dropdown */}
       <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>Atlar</h1>
          <li className="border-b text-right"> <button>Home</button> </li>
          <li className="border-b text-right"><button>Teste1</button></li>
          <li className="border-b text-right"><button>Teste2</button></li>
          <li className="border-b text-right"><button>Teste3</button></li>
          <li className="border-b text-right"><button>Teste4</button></li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
