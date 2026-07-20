function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
                    CivicPlus AI
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded-lg mb-4"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-3 rounded-lg mb-6"
                />

                <button className="w-full bg-blue-700 text-white py-3 rounded-lg">
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;