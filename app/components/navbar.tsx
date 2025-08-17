
// import { useState } from "react";
// import { NavLink } from "react-router";

// export default function Navbar(){
//     const[isOpen,setIsOpen]=useState(false);
//     const toggleMenu=()=> setIsOpen(!isOpen);

//     return (
//         <nav className="flex justify-between items-center px-12 py-10 bg-transparent">
//             <span><NavLink to="/" >TA</NavLink></span>
        
//             <ul id="topNav" className={`${
//           isOpen ? "flex flex-col absolute top-full right-12 bg-white text-black p-4 space-y-4 shadow-lg rounded" : "hidden md:flex space-x-6"
//         }`}>
//                 <li><NavLink to="/work" >Work</NavLink></li>
//                 <li><NavLink to="/fun" >Fun</NavLink></li>
//                 <li><NavLink to="/about" >About</NavLink></li>
//                 <li> Resume</li>

//             </ul>
//             <button onClick={toggleMenu} className="md:hidden text-xl">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h18M3 12h18M3 7h18"/></svg>
//             </button>
            
            
            
//             {/* <NavLink to="" ></NavLink> */}
//         </nav>
    
//     )
// }
import { useEffect, useState } from "react";
import { NavLink } from "react-router"; // use react-router-dom

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu if screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = (
    <>
      <li className=" ">
        <NavLink to="/work" className=" hover:bg-gray-300  py-3  px-4 focus:bg-gray-300  rounded-full">Work</NavLink>
      </li>
      <li>
        <NavLink to="/fun" className=" hover:bg-gray-300  py-3  px-4 focus:bg-gray-300 rounded-full">Fun</NavLink>
      </li>
      <li>
        <NavLink to="/about" className=" hover:bg-gray-300  py-3  px-4 focus:bg-gray-300 rounded-full">About</NavLink>
      </li>
 
      <li><span className="hover:bg-gray-300  py-3  px-4 focus:bg-gray-300  rounded-full">Resume</span></li>
    </>
  );

  return (
    <nav className="flex justify-between items-center  bg-transparent relative px-10 py-10 ">
      <span className="">
        <NavLink to="/">  <div
    className="w-[45px] h-[45px] bg-contain bg-no-repeat bg-center"
    style={{ backgroundImage: `url(./logo.png)` }}
    aria-label="Logo"
  /></NavLink>
      </span>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-6">{navItems}</ul>

      {/* Hamburger Button */}
      <button onClick={toggleMenu} className="md:hidden text-xl z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 17h18M3 12h18M3 7h18"
          />
        </svg>
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-1/2 -translate-x-1/2  text-black  rounded p-6 space-y-4 z-40 text-right w-full px-12 backdrop-blur-sm">
          {navItems}
        </ul>
      )}
    </nav>
  );
}
