import { useLoaderData } from "react-router-dom";
import CampaignCard from "./CampaignCard";

const Donation = () => {
  const campaigns = useLoaderData();
  console.log(campaigns);
  return (
    <div className="max-w-screen-xl mx-auto my-12">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Our Donation Campaigns
      </h2>
      <div className=" grid md:grid-cols-2  lg:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign}></CampaignCard>
        ))}
      </div>
    </div>
  );
};

export default Donation;
