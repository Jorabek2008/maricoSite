import { useState } from "react";
import { logo } from "../images";
import { LINK } from "./../common/link";
import { Button } from "../common";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState();
  const [show, setShow] = useState(false)
  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-[#000] z-[10]">
        <div className="px-[20px] sm:px-[60px] md:px-[90px] lg:px-[140px] flex items-center justify-between py-[26px]">
          <img src={logo} alt="logo" width={150} />
          <ul className="md:flex items-center gap-[38px] hidden whitespace-nowrap">
            {LINK.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  onClick={() => setActive(link.name)}
                  className={`${
                    active == link.name ? "text-primary" : "text-kulrang"
                  } cursor-pointer`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:flex hidden items-center gap-[24px]">
            <Button href={"/sign-in"} text={"Login"} />
            <Button text={"Sign Up"} className={'whitespace-nowrap'} size={"sm"} />
          </div>

          <div className="block md:hidden">
            <FaBars size={25} onClick={() => setShow(true)} />
          </div>


          <div className={`absolute top-0 right-0 z-[100] transition-all delay-75 ${show ? "right-[0]" : "right-[-1000px]"}`}>
            <div className="w-[300px] h-screen bg-[#000] sm:w-[400px]">
                <div className="block">
                    <IoCloseSharp size={35} className="ml-auto mr-[20px] sm:mr-[55px] mt-[30px]" onClick={() => setShow(false)} />
                </div>
                <ul className="text-center mt-10">
                    {LINK.map((link, i) => (
                    <li key={i} className="mt-4">
                        <Link
                        to={link.path}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                        onClick={() => {
                            setActive(link.name)
                            setShow(false)
                        }}
                        className={`${
                            active == link.name ? "text-primary" : "text-kulrang"
                        } cursor-pointer`}
                        >
                        {link.name}
                        </Link>
                    </li>
                    ))}
                </ul>
                <div className="flex items-center justify-center gap-[24px] mt-10">
                    <Button href={"/sign-in"} text={"Login"} />
                    <Button text={"Sign Up"} size={"sm"} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
