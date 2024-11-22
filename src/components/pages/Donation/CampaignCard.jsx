import { Link } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
  console.log(campaign);
  const { id, image, title, description, division } = campaign;
  return (
    <div className="bg-white p-5 shadow-lg rounded-lg overflow-hidden border hover:shadow-xl hover:scale-105 transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-48 rounded-md object-cover"
      />
      <div className="mt-2">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <p className="text-gray-700 font-semibold">
          <span className="text-gray-500">Division:</span> {division}
        </p>
        <Link
          to={`/campaign/${id}`}
          className="mt-4 btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default CampaignCard;
