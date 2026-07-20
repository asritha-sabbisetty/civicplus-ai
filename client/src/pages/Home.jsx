import Navbar from "../components/Navbar";
import { FaRobot, FaTasks, FaChartLine } from "react-icons/fa";
function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center text-center mt-24 px-6">
                <h1 className="text-5xl font-bold text-gray-800">
                    AI-Powered Municipal Operations
                </h1>

                <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                    Citizens report issues. AI categorizes complaints, assigns them to the
                    correct department, and helps municipal officers resolve them faster.
                </p>

                <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-800">
                    Get Started
                </button>
            </div>
            {/* Features Section */}
            <section className="max-w-6xl mx-auto py-20 px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Key Features
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <FaRobot className="text-5xl text-blue-600 mb-4" />

                        <h3 className="text-xl font-semibold mb-3">
                            AI Complaint Classification
                        </h3>
                        <p className="text-gray-600">
                            Automatically categorizes citizen complaints into the correct municipal department.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <FaTasks className="text-5xl text-green-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-3">
                            Smart Task Assignment
                        </h3>
                        <p className="text-gray-600">
                            Assigns complaints to the right officers based on department and priority.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <FaChartLine className="text-5xl text-purple-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-3">
                            Live Dashboard
                        </h3>
                        <p className="text-gray-600">
                            Gives administrators real-time insights into complaint status and department performance.
                        </p>
                    </div>

                </div>
            </section>
            {/* Footer */}
            <footer className="bg-blue-700 text-white text-center py-6 mt-16">
                <p>© 2026 CivicPlus AI. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Home;