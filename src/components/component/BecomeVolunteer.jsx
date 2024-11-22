import React from "react";
import toast from "react-hot-toast";
import { GiSelfLove } from "react-icons/gi";

const BecomeVolunteer = () => {
  return (
    <section className="bg-gray-100 w-11/12 mx-auto py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 px-4">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Volunteer illustration"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 px-4 mt-8 md:mt-0">
          <p className="text-xl lg:text-2xl flex items-center gap-2">
            <GiSelfLove />
            Become a volunteer
          </p>
          <h2 className="lg:text-5xl w-4/5 text-3xl font-bold text-gray-800 mb-4">
            Become a Volunteer ? Join With Our Team
          </h2>
          <p className="text-gray-600 mb-6">
            Join our mission to bring warmth and hope to those in need. Sign up
            to become a volunteer and help us make a meaningful difference in
            the lives of others.
          </p>
          <form className="flex md:w-3/4">
            <input
              type="text"
              placeholder="Send Message"
              className=" w-full px-4 py-3 border rounded-l-lg  focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <button
              onClick={() => {
                toast.success("We will contract with you soon.. Thanks");
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 font-bold rounded-r-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BecomeVolunteer;
