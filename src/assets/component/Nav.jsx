import {headerLogo} from "../images"
import {hamburger} from "../icons"
import { navLinks } from "../../constants";
import { useState } from "react";
const Nav = () => {
  const [openNavigation, setOpenNavigation] = useState (false)
 
  return ( 
    <header className="padding-x py-8  absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="./">
          <img src={headerLogo} alt="Logo" width={130}
          height={29} ></img>
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => {
              return(
                <li><a href={item.href} className="font-montserrat leading-normal text-lg text-slate-500">{item.label}</a></li>
               )
            })}
            <a href="#sigin" alt="Sign in">Sign in / Explore Now</a>
          </ul>
          <div>
            <img src={hamburger} 
            width={25}
            height={25} className="hidden max-lg:block"></img>
          </div>
         
      </nav>
    </header>
   );
}
 
export default Nav;