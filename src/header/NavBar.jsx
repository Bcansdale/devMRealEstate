import React from "react";
import {useState, useEffect} from "react";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import logo from '/public/devmLogo.png'
import { BsHouseHeart } from "react-icons/bs";


function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-[#444445]">
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal text-[1.2rem]"
            >
                <a href="#" className="flex items-center">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal text-[1.2rem]"
            >
                <a href="#" className="flex items-center">
                    Properties
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal text-[1.2rem]"
            >
                <a href="#" className="flex items-center">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal text-[1.2rem]"
            >
                <a href="#" className="flex items-center">
                    Contact
                </a>
            </Typography>
        </ul>
    );


    return (

        <div className="max-h-[768px] w-full overflow-scroll flex relative mt-[100px] opacity-95 shadow-2xl shadow-[#444445]">
            <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-2">
                <div className="flex items-center justify-between text-[#444445]">
                    <div className="mr-4 cursor-pointer items-center justify-center">
                        <img className="inline w-[14rem]" src={logo} alt="Logo"/>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block ">{navList}</div>
                        <button><BsHouseHeart size={'1.4rem'}/></button>
                        <div className="flex items-center gap-x-1 text-[#444445]">
                            <Button
                                variant="outlined"
                                size="sm"
                                className="hidden lg:inline-block rounded-3xl text-[#444445] text-[1rem]"
                            >
                                <span>Login/Sign Up</span>
                            </Button>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                    <Button fullWidth variant="outlined" size="sm" className="rounded-3xl text-[#444445] text-[1rem]">
                            <span>Log In/Sign Up</span>
                        </Button>
                        {/*<Button fullWidth variant="gradient" size="sm" className="">*/}
                        {/*    <span>Sign Up</span>*/}
                        {/*</Button>*/}
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default StickyNavbar;