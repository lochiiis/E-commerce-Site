import { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from '../assets/login1.jpg';
import { loginUser } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        dispatch(loginUser({ email, password }))
       
    }

    return (
        <div className="flex">
            {/* Form Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12">
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
                    <div className="text-center mb-6">
                        <h2 className="text-xl font-medium">Lochiiis</h2>
                        <h2 className="text-2xl font-bold mt-2">Hey there! Welcome back.</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Please enter your email and password to Login.
                        </p>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
                    >
                        Sign In
                    </button>

                    <p className="text-center mt-6 text-sm">
                        Don’t have an account?{' '}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register
                        </Link>
                    </p>
                </form>
            </div>

            {/* Image Section */}
            <div className="hidden md:block w-1/2 bg-gray-50 p-10">
                <img
                    src={loginImg}
                    alt="Login account"
                    className="w-full object-cover rounded-lg"
                />
            </div>
        </div>
    );
};

export default Login;
