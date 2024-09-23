import { useEffect, useState} from "react";

function SignUp({isShowSignup}) {

    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    //
    // function handleLogin(evt) {
    //     evt.preventDefault()
    //     props.toggle()
    // }


    if (!isShowSignup) {
        return null;
    }

    return (
        <>
            <div className={isShowSignup ? "active" : ""}>
                <div className="fixed min-h-screen flex items-center justify-center w-full z-50">
                    <div className="bg-white shadow-xl rounded-2xl px-8 py-6 max-w-md text-[#444445]">
                        <h1 className="text-2xl text-[#444445] text-center mb-4">Welcome to DevM Real Estate</h1>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="firstName" className="block text-sm font-medium text-[#444445] mb-2">First
                                                                                                                     Name:</label>
                                <input type="text" id="firstName" name="firstName"
                                       className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                       placeholder="First Name" required/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="lastName" className="block text-sm font-medium text-[#444445] mb-2">Last
                                                                                                                    Name:</label>
                                <input type="text" id="lastName" name="lastName"
                                       className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                       placeholder="Last Name" required/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email"
                                       className="block text-sm font-medium text-[#444445] mb-2">Email:</label>
                                <input type="text" id="email" name="email"
                                       className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                       placeholder="Email Address" required/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password"
                                       className="block text-sm font-medium text-[#444445] mb-2">Password:</label>
                                <input type="text" id="password" name="password"
                                       className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                       placeholder="Password" required/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="confirmPassword"
                                       className="block text-sm font-medium text-[#444445] mb-2">Confirm
                                                                                                 Password:</label>
                                <input type="text" id="confirmPassword" name="confirmPassword"
                                       className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                       placeholder="Password" required/>
                            </div>

                            <button type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#444445] hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 duration-200">Register
                            </button>
                            <div className="mt-4 text-center">
                                <span
                                    className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
                                <a href="#"
                                   className="text-sm text-[#444445] hover:text-orange-500 duration-200">Login In</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;