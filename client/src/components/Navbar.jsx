function Navbar() {
    return (
        <nav className="bg-blue-700 text-white px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">CivicPlus AI</h1>

            <button className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold">
                Login
            </button>
        </nav>
    );
}

export default Navbar;