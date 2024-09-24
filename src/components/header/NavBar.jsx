import { useEffect, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import logo from "/src/assets/devmLogo.png";
import { BsHouseHeart } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../../context/AuthContext.jsx";

function StickyNavbar({ handleClickShowForm }) {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Properties", link: "/properties" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];
    let [open, setOpen] = useState(false);

    const { user, logout, isAuthenticated, sessionCheck } = useAuth();

    useEffect(() => {
        sessionCheck();
    }, []);

    function handleClickLogout(e) {
        e.preventDefault();

        logout();
    }

    return (
        <header className="max-h-[768px] w-full overflow-scroll flex relative mt-[115px] lg:mt-[115px] opacity-85 shadow-2xl shadow-[#444445] z-50">
            <div className="shadow-md w-full fixed top-0 left-0">
                <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                    <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                        <Link to="/">
                            <img className="inline w-[14rem]" src={logo} alt="Logo" />
                        </Link>
                    </div>

                    <div
                        onClick={() => setOpen(!open)}
                        className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
                    >
                        {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                    </div>
                    <ul
                        className={`text-[#444445] gap-4 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-28" : "top-[-490px]"}`}
                    >
                        {Links.map((link, index) => (
                            <Typography
                                as="li"
                                variant="small"
                                className="my-7 font-normal text-[1.2rem]"
                                key={index}
                            >
                                <a href={link.link} className="flex items-center">
                                    {link.name}
                                </a>
                            </Typography>
                        ))}

                        {isAuthenticated ? (
                            <>
                                <li className="hidden lg:block">
                                    <Link to="/saves">
                                        <button className="mt-2 mr-5">
                                            <BsHouseHeart size={"1.4rem"} />
                                        </button>
                                    </Link>
                                    <Link to="/admin">
                                        <button className="mt-2 mr-5">
                                            <GrUserAdmin size={"1.4rem"} />
                                        </button>
                                    </Link>
                                </li>
                            </>
                        ) : (
                            ""
                        )}

                        <li>
                            {isAuthenticated ? (
                                <Button
                                    variant="outlined"
                                    size="sm"
                                    className="lg:inline-block rounded-3xl text-[#444445] text-[1rem] px-8"
                                    onClick={handleClickLogout}
                                >
                                    Logout
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="lg:inline-block rounded-3xl text-[#444445] text-[1rem] px-8 mr-2"
                                        onClick={(e) => handleClickShowForm(e, "user/login")}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="lg:inline-block rounded-3xl text-[#444445] text-[1rem] px-8 mr-2"
                                        onClick={(e) => handleClickShowForm(e, "user/signup")}
                                    >
                                        Sign Up
                                    </Button>
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default StickyNavbar;
