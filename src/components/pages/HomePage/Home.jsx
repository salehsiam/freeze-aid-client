import { Helmet } from "react-helmet";
import AboutUs from "../../component/AboutUs";
import Banner from "../../component/Banner";
import HowItWorks from "../../component/HowItWorks";
import WhyDonateUs from "../../component/WhyDonateUs";
import BecomeVolunteer from "../../component/BecomeVolunteer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FreezeAid</title>
      </Helmet>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <HowItWorks></HowItWorks>
      <WhyDonateUs></WhyDonateUs>
      <BecomeVolunteer></BecomeVolunteer>
    </div>
  );
};

export default Home;
