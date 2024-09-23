import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import SignUp from "./SignUp.jsx"

function Login({ isShowLogin, setShowLogin }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showSignup, setShowSignup] = useState(false)

    // const [userId, setUserId] = useState(null)

    // to use Redux, we need to "subscribe" (useSelector()) to the store
    const userId = useSelector((state) => state.userId)

    const dispatch = useDispatch()

    // how to handle the submission of the form? Create a function that the form submission invokes
    const handleLogin = async (e) => {
        e.preventDefault()

        // need to create my req.body object:
        const bodyObj = {
            username: username,
            password: password,
        }

        // now send this data to our /login endpoint to validate:
        const res = await axios.post("/api/auth/login", bodyObj)

        // get response and save the userId to the redux store
        if (res.data.success) {
            // what do I do with the userId that returned to me?
            // dispatch the userId to the store
            dispatch({
                type: "USER_AUTH",
                payload: res.data.userId
            })

            setShowLogin(false)
            setUsername("")
            setPassword("")
        }

        alert(res.data.message)

    }

    // function to log out - simply call the server endpoint, and then reset state value userId to null
    const handleLogout = async () => {
        const res = await axios.get("/api/auth/logout")

        if (res.data.success) {
            // setUserId(null)
            dispatch({
                type: "LOGOUT",
            })
        }
    }

    // On initial render, I want this component to determine if there is a userId saved in the server's req.session object
    // 1. define a function to do it
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
    // 2. invoke that function on initial render only (with a useEffect() hook)
    // useEffect(callback, optionalDependencyArray)
    // if the dependencyArray is not provided, useEffect will run on EVERY render
    // if the dependencyArray is empty ([]), then this tells useEffect to ONLY run on the INITIAL render
    // if the dependencyArray contains values, useEffect will run each time one of those values is changed/used
    useEffect(() => {
        sessionCheck()
    }, [])


    if (!isShowLogin) {
        return null;
    }

    return showSignup ? (
        <SignUp isShowSignup={setShowSignup}/> )
        : (
        <>
            <div className={isShowLogin ? "active" : ""}>
                <div className="fixed min-h-screen flex items-center justify-center w-full z-50">
                    <div className="bg-white shadow-xl rounded-2xl px-8 py-6 max-w-md text-[#444445]">
                        <h1 className="text-2xl text-[#444445] text-center mb-4">Welcome Back!</h1>

                        <form>
                            <div className="mb-4">
                                <label htmlFor="email"
                                       className="block text-sm font-medium text-[#444445] mb-2">
                                    Email Address
                                </label>
                                <input type="email"
                                       id="email"
                                       className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                       placeholder="your@email.com"
                                       value={username} onChange={(e) => setUsername(e.target.value)} required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password"
                                       className="block text-sm font-medium text-[#444445] mb-2">
                                        Password
                                </label>
                                <input type="password"
                                       id="password"
                                       className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                       placeholder="Enter your password"
                                       value={password} onChange={(e) => setPassword(e.target.value)}
                                       required/>
                                <a href="#"
                                   className="text-sm text-[#444445] hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Forgot
                                                                                                                                                                      Password?</a>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <input type="checkbox" id="remember"
                                           className="h-4 w-4 rounded border-gray-300 text-[#444445] focus:ring-orange-500 focus:outline-none accent-[#444445]"
                                           defaultChecked/>
                                    <label htmlFor="remember" className="ml-2 block text-sm text-[#444445]">Remember me</label>
                                </div>
                                <a onClick={() => setShowSignup(true)}
                                   className="text-sm text-[#444445] hover:text-orange-500 duration-200">Sign Up</a>
                            </div>
                            {userId && <button onClick={handleLogout}>Logout</button>}
                            {!userId &&
                                <>
                                <button type="submit" onSubmit={handleLogin}
                                        className="w-full flex justify-center mb-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#444445] hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 duration-200">
                                    Login
                                </button>
                                </>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
        );
}

export default Login;