import React, { useContext, useState } from "react";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";

import axios from "axios";

const ReviewInput = ({ reviews, setReviews }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const service = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleReviews = () => {
    if (!reviewText || rating === 0) {
      alert("Please provide both a rating and a review text.");
      return;
    }

    const newReview = {
      serviceId: service._id,
      rating,
      reviewText,
      date: new Date().toLocaleDateString(),
      name: user.displayName,
      photo: user.photoURL,
      email: user.email,
      title: service.title,
    };

    axios.post("http://localhost:5000/review", newReview).then((data) => {
      console.log(data.data);
      setReviews((prev) => {
        return [...prev, newReview];
      });
      setRating(0);
      setReviewText("");
      alert("Review submitted successfully!");
    });
  };

  return (
    <div className="max-w-[48rem] p-6 my-5 bg-red-100">
      <div className="mx-auto p-12 rounded-md mt-5">
        <h1 className="text-green-900 text-4xl mb-3">{service.title}</h1>
        <h2 className="mb-2">Give Your Review For Our Service</h2>

        <Rating style={{ maxWidth: 180 }} value={rating} onChange={setRating} />

        <div className="relative w-[32rem] mt-3 space-y-5">
          {/* Textarea for review */}
          <div className="relative w-full md:min-w-[200px]">
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows="8"
              className="peer h-full min-h-[100px] w-full !resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="Write your review..."
            ></textarea>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Write your review
            </label>
          </div>

          <div className="flex w-full justify-between py-1.5">
            <button
              onClick={handleReviews}
              className="select-none rounded-md bg-green-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Post Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewInput;
