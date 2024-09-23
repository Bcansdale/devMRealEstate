import {useState, useEffect} from 'react';

function Login({ isShowLogin, }) {

    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    //
    // function handleLogin(evt) {
    //     evt.preventDefault()
    //     props.toggle()
    // }

    if (!isShowLogin) {
        return null;
    }

    return (
        <>
            <div className={isShowLogin ? "active" : ""}>

                <div className="fixed min-h-screen flex items-center justify-center w-full z-50">

                    <div className="bg-white shadow-xl rounded-2xl px-8 py-6 max-w-md text-[#444445]">

                        <h1 className="text-2xl text-[#444445] text-center mb-4">Welcome Back!</h1>

                        <form>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-[#444445] mb-2">Email Address</label>
                                <input type="email" id="email"
                                       className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                       placeholder="your@email.com" required/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password"
                                       className="block text-sm font-medium text-[#444445] mb-2">Password</label>
                                <input type="password" id="password"
                                       className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                       placeholder="Enter your password" required/>
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
                                <a href="#"
                                   className="text-sm text-[#444445] hover:text-orange-500 duration-200">Sign Up</a>
                            </div>
                            <button type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#444445] hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 duration-200">Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;