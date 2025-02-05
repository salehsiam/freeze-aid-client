import { GiMonclerJacket } from "react-icons/gi";
import { BiHappyHeartEyes } from "react-icons/bi";
import { LiaHandsHelpingSolid } from "react-icons/lia";

const WhyDonateUs = () => {
  return (
    <section className="bg-blue-100 w-11/12 mx-auto rounded-xl my-6 py-16 px-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Why Donate?</h2>
        <p className="text-lg text-center text-gray-700 mb-8">
          Your contribution can bring warmth and hope to someone struggling this
          winter. Here's how your donation helps:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <GiMonclerJacket className="text-6xl" />
            <h3 className="text-xl font-semibold mb-4">Provide Warmth</h3>
            <p className="text-gray-600">
              Your donations ensure that vulnerable individuals have the
              clothing they need to stay warm during harsh winters.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <BiHappyHeartEyes className="text-6xl" />

            <h3 className="text-xl font-semibold mb-4">Spread Smiles</h3>
            <p className="text-gray-600">
              Every item you donate brings joy and relief to someone in need,
              making their lives a little brighter.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <LiaHandsHelpingSolid className="text-6xl" />
            <h3 className="text-xl font-semibold mb-4">Support Communities</h3>
            <p className="text-gray-600">
              Your generosity supports entire communities, strengthening bonds
              and fostering kindness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDonateUs;
