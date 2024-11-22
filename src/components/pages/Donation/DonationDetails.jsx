import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const campaignData = useLoaderData();
  const { id } = useParams();
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    const CurrentCampaign = campaignData.find(
      (currentCampaign) => currentCampaign.id == id
    );
    setCampaign(CurrentCampaign);
  }, [id, campaignData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Thank you ! We will reach your destination soon");
  };

  return (
    <div className="lg:w-2/3 mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-96 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{campaign.title}</h1>
        <p className="text-gray-700 mb-2">{campaign.description}</p>
        <p className="text-gray-500">
          <strong>Division:</strong> {campaign.division}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 shadow-md rounded-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Donate Items</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Quantity of Items
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g., 2 jackets, 3 blankets"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Item Type
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="(e.g., blanket, jacket, sweater"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Pickup Location
          </label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Any additional information..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit Donation
        </button>
      </form>
    </div>
  );
};

export default DonationDetails;
