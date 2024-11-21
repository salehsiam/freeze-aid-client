import { useLoaderData } from "react-router-dom";
import CampaignCard from "./CampaignCard";

const Donation = () => {
  const campaigns = useLoaderData();
  console.log(campaigns);
  return (
    <div className="max-w-screen-xl mx-auto overflow-hidden my-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4 animate__animated animate__heartBeat animate__slow animate__delay: 2s ">
          Explore Donation Campaigns
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Choose a campaign to support and help us bring warmth to those in
          need.
        </p>
      </div>
      <div className=" grid md:grid-cols-2  lg:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign}></CampaignCard>
        ))}
      </div>
    </div>
  );
};

export default Donation;
