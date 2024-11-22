import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center  gap-7">
        <h2 className="text-5xl font-bold "> 404 Not Found</h2>
        <Link className="btn bg-blue-500 text-white" to="/">
          BackTo Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
