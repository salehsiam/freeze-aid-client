import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");

    updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
      navigate("/dashboard").catch((err) => {
        alert(err);
      });
    });
  };
  return (
    <div className="min-h-screen w-11/12 mx-auto bg-base-200 flex justify-center items-center">
      <div className="card my-14 bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-center">Update Profile</h2>
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
