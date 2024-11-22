import { Link } from "react-router-dom";
import "animate.css";

const HowItWorks = () => {
  return (
    <div>
      <section className="w-11/12 overflow-hidden mx-auto px-4 bg-blue-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="animate__animated animate__heartBeat animate__slow animate__delay: 2s animate__repeat-3 text-3xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            Follow these simple steps to help someone stay warm this winter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Sign In/Sign Up</h3>
              <p className="text-gray-600">
                Log in to your account or create a new one to start donating.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                2. Choose a Campaign
              </h3>
              <p className="text-gray-600">
                Browse active campaigns and pick one to support with your
                donation.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                3. Fill Out the Form
              </h3>
              <p className="text-gray-600">
                Specify what you're donating, your pickup location, and other
                details.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4">Collection Points</h3>
            <p className="text-gray-600 mb-6">
              Drop off your donations at one of our collection points or arrange
              a pickup.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h4 className="font-semibold">Dhaka</h4>
                <p className="text-gray-600">Dhanmondi, Gulshan</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h4 className="font-semibold">Chittagong</h4>
                <p className="text-gray-600">Agrabad, GEC Circle</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h4 className="font-semibold">Sylhet</h4>
                <p className="text-gray-600">Zindabazar, Subidbazar</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h4 className="font-semibold">Rajshahi</h4>
                <p className="text-gray-600">Shaheb Bazar, New Market</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4">Supported Divisions</h3>
            <p className="text-gray-600">
              We are actively working in the following divisions:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
              <li>Dhaka</li>
              <li>Chittagong</li>
              <li>Sylhet</li>
              <li>Rajshahi</li>
              <li>Khulna</li>
              <li>Barisal</li>
              <li>Rangpur</li>
              <li>Mymensingh</li>
            </ul>
          </div>
          <div className="mt-10">
            <Link
              to="/donation"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
