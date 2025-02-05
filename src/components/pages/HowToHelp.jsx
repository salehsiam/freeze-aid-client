import { Helmet } from "react-helmet";

const HowToHelp = () => {
  return (
    <div>
      <Helmet>
        <title>How to help||FreezeAid</title>
      </Helmet>
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="container mx-auto px-4 text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">How to Help</h1>
          <p className=" md:w-2/3 mx-auto text-gray-600">
            Your small contribution can make a big difference in someone’s life
            this winter. Here's how you can help us bring warmth to those in
            need.
          </p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://i.ibb.co.com/60NqbHw/blankets-to-donate-jpg.webp"
              alt="Donate Clothing"
              className=" h-52 rounded-md mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Donate Clothing
            </h2>
            <p className="text-gray-600 mb-4">
              Give winter essentials like blankets, jackets, and sweaters to
              support vulnerable communities.
            </p>
            <a
              href="/donation"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              Donate Now
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://i.ibb.co.com/tsZYBHj/0x0.webp"
              className=" rounded-md mx-auto mb-4 h-52"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Volunteer
            </h2>
            <p className="text-gray-600 mb-4">
              Join our team to collect, organize, and distribute donations to
              those in need.
            </p>
            <a
              href="/volunteer"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              Become a Volunteer
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://i.ibb.co.com/D1s4zPN/BLG2005-YM-Brand-Awareness-Card.webp"
              alt="Spread Awareness"
              className=" h-52 rounded-md mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Spread Awareness
            </h2>
            <p className="text-gray-600 mb-4">
              Share our mission on social media and encourage others to join the
              cause.
            </p>
            <a
              href="#"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              Share Now
            </a>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-600 mb-8">
            Whether you donate, volunteer, or simply share our mission, every
            action helps us reach more people in need.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
            >
              Explore Campaigns
            </a>
            <a
              href="#"
              className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600"
            >
              Join as Volunteer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;
