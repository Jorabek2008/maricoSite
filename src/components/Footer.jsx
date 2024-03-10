import { Link } from "react-scroll"
import { FOOTERLINK } from "../common/link"
import { logo } from "../images"
import { useState } from "react"

const Footer = () => {
    const [active, setActive] = useState()
  return (
    <div>
        <div className="mt-[183px] px-[20px] sm:px-[60px] md:px-[90px] lg:px-[140px] block md:flex items-center justify-between py-[26px]">
            <div className="block">
                <img src={logo} alt="logo" className="mx-auto md:ml-auto" />
                <p className="mt-[2px] text-kulrang text-center md:text-left">info@marico.co</p>
            </div>
            <ul className="flex items-center justify-center md:justify-end gap-[38px] mt-[30px] md:mt-0">
                {FOOTERLINK.map((link, i) => (
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
        </div>
    </div>
  )
}

export default Footer