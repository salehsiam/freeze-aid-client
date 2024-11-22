import { Link } from "react-router-dom";
import { BiSolidDonateHeart } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div className="bg-blue-100 w-11/12 mx-auto py-16 rounded-xl mb-6">
      <div className=" px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full grid grid-cols-2 gap-1 border border-blue-400 rounded-xl p-2 md:w-1/2">
          <div>
            <img
              src="https://i.ibb.co.com/5Y60pVx/doante-blankets-7.webp"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co.com/ChQtTzb/winter.webp"
              alt=""
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              className="h-full rounded-lg shadow-lg"
              src="https://i.ibb.co.com/ZgMMcPZ/ph-61993-242129.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co.com/CzS4McY/winter-clothes-e1687740931481.jpg"
              alt=""
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 animate__animated animate__bounceIn animate__delay-0.5s ">
          <p className="text-xl mb-2 text-blue-500 flex items-center">
            <BiSolidDonateHeart className="text-3xl" /> About us
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Spreading Warmth, One Act of Kindness at a Time
          </h2>
          <p className=" text-gray-600 mb-4">
            We are dedicated to providing warmth and care to vulnerable
            communities in Bangladesh during the winter. Our platform makes it
            easy for donors and volunteers to connect, ensuring that no one
            endures the cold without proper clothing.
          </p>
          <p className=" text-gray-600 mb-4">
            With your support, we strive to create a future where compassion and
            kindness can bring warmth to every corner of the nation.
          </p>
          <ul className="list-disc pl-5 text-gray-600 mb-6">
            <li>Seamless platform for donations</li>
            <li>Focused on vulnerable communities</li>
            <li>Collaboration with dedicated volunteers</li>
          </ul>
          <Link
            to="/how-to-help"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Join Our Mission
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
