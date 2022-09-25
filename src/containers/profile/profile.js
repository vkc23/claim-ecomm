import React from "react";
import { Button } from "../../components";

const Profile = () => {
  const [data, setData] = React.useState({});

  const handleChange = () => {};
  const handleEvent = () => {};
  return (
    <div className="py-4">
      <span className="d-block fw-bold mb-5">Welcome to your Profile.</span>
      <div className="mb-3 w-50">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          name="fullName"
          className="form-control"
          value={data?.fullName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 w-50">
        <label className="form-label">Address</label>
        <input
          type="address"
          name="Address"
          className="form-control"
          value={data?.address}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 w-50">
        <label className="form-label">Email Address</label>
        <input
          type="text"
          name="emailAddress"
          className="form-control"
          value={data?.emailAddress}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 w-50">
        <label className="form-label">Contact Number</label>
        <input
          type="text"
          name="contactNumber"
          className="form-control"
          value={data?.contactNumber}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex justify-content-end w-50">
        <Button label="Save Profile" variant="primary" click={handleEvent} />
      </div>
    </div>
  );
};

export default Profile;
