import { useState } from "react"
import { navLinks } from "../utils/constant"

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const NavBar = () => {


    const [isOpen, setisOpen] = useState(false);

    const handleOpen = () => {
        setisOpen(!isOpen)
    }

    return (
        <section>
            <header className="nav_bar">
                <div className="search_option">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="search_option_svg w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <input />
                </div>

                <ul className="nav_links">
                    {navLinks.map((nav, i) => (
                        <li className="nav_links_items" key={i}>
                            <a href="/">{nav}</a>
                        </li>
                    ))}
                </ul>


                <div className={`${isOpen === true ? "show" : "hidden"}`} >
                    <ul className={`nav_links__mobile `}>
                        {navLinks.map((nav, i) => (
                            <li className="nav_links_items" key={i}>
                                <a href="/">{nav}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="icons">
                    {isOpen === false ?
                        <Bars3Icon onClick={handleOpen} className={`bars h-7 w-7`} /> :
                        <XMarkIcon onClick={handleOpen} className={`xmark h-7 w-7`} />
                    }
                </div>



            </header>
        </section>
    )
}

export default NavBar

