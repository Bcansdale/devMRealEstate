import React, {useEffect} from "react";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import logo from '/src/assets/devmLogo.png';
import {BsHouseHeart} from "react-icons/bs";
import {GrUserAdmin} from "react-icons/gr";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";


function StickyNavbar({handleLoginClick, handleSignupClick}) {
    const [openNav, setOpenNav] = React.useState(false);
    const [showLogout, setShowLogout] = React.useState(false);

    const userId = useSelector((state) => state.userId)

    const dispatch = useDispatch()

    const handleLogout = async () => {
        const res = await axios.get("/api/auth/logout")

        if (res.data.success) {
            // setUserId(null)
            dispatch({
                type: "LOGOUT",
            })
        }
    }

    const sessionCheck = async () => {
        const res = await axios.get("/api/auth/session")

        if (res.data.success) {
            // setUserId(res.data.userId)
            dispatch({
                type: "USER_AUTH",
                payload: res.data.userId
            })
        }
    }

    useEffect(() => {
        sessionCheck()
    }, [])




    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const handleLogin = () => {
        handleLoginClick();
    };

    const handleSignup = () => {
        handleSignupClick();
    };


    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-[#444445]">
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal text-[1.2rem]"
            >
                <a href="/" className="flex items-center">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal text-[1.2rem]"
            >
                <a href="/properties" className="flex items-center">
                    Properties
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal text-[1.2rem]"
            >
                <a href="/about" className="flex items-center">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-normal text-[1.2rem]"
            >
                <a href="/contact" className="flex items-center">
                    Contact
                </a>
            </Typography>
        </ul>
    );


    return (

        <header
            className="max-h-[768px] w-full overflow-scroll flex relative mt-[100px] lg:mt-[100px] opacity-95 shadow-2xl shadow-[#444445] z-50">
            <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-2">
                <div className="flex items-center justify-between text-[#444445]">
                    <Link to="/">
                    <div className="mr-4 cursor-pointer items-center justify-center">
                        <img className="inline w-[14rem]" src={logo} alt="Logo"/>
                    </div>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <Link to='/saves'>
                        <button className="mt-2 mr-5"><BsHouseHeart size={'1.4rem'}/></button>
                        </Link>
                        <Link to='/admin'>
                        <button className="mt-2 mr-5"><GrUserAdmin size={'1.4rem'}/></button>
                        </Link>

                        <div className="flex items-center gap-x-1 text-[#444445]">
                            <Button
                                variant="outlined"
                                size="sm"
                                className="hidden lg:inline-block rounded-3xl text-[#444445] text-[1rem] px-8"
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                            <Button
                                onChange={(e) => setShowLogout(e.target.value)}
                                variant="outlined"
                                size="sm"
                                className="hidden lg:inline-block rounded-3xl text-[#444445] text-[1rem] px-8"
                                onClick={handleLogout}
                            >
                                Logout
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
                        <Button fullWidth
                                variant="outlined"
                                size="sm"
                                className="rounded-3xl text-[#444445] text-[1rem]"
                                onClick={handleLogin}>
                            Log In
                        </Button>
                        <Button fullWidth
                                variant="outlined"
                                size="sm"
                                className="rounded-3xl text-[#444445] text-[1rem]"
                                onClick={handleSignup}>
                            Sign Up
                        </Button>
                    </div>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default StickyNavbar;