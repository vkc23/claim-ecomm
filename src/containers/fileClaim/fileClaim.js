import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Datepicker, Dropdown } from "../../components";
import { DEVICE_TYPE } from "../../constants/mockData";
import { claimAdded } from "../claimSlice";
import "./fileClaim.css";
const redioData = [
    {id: 'possession_device_y', title: ' Yes, I have the device', name:'Yes'}, 
    {id: 'possession_device_n', title: 'No, I do not have the device', name:"No"}
]

const FileClaim = () => {
  const history = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [selected, setSelected ] = useState('possession_device_y')
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleEvent = () => {
    console.log(data,'data')
    if (data) {
      dispatch(
        claimAdded({
          data,
        })
      );

      setError(null);
      history("/incidentInfo");
    } else {
      setError("Fill in all fields"); // used in UI
    }
  };
  return (
    <div className="w-75 mx-auto py-4">
      <div className="row g-0 py-4 align-items-center border-bottom">
        <div className="col">
          <h5 className="m-0 p-0">Claim Pre-Qualification</h5>
        </div>
        <div className="col-auto">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-text-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>{" "}
            Claims History & Status
          </a>
        </div>
      </div>
      <div className="py-4 border-bottom">
        <p>
          To get started with the claim process, please answer the following
          questions.
        </p>
        <span className="d-block fw-bold mb-3">
          Do you still have possession of the device?
        </span>

         {redioData.map((item) =>  
         <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={item.name}
              checked=""
              value=""
              onChange={handleChange}
            />
            <label className="form-check-label" for={item.id}>
              {item.title}
            </label>
          </div> )}

      </div>
      <div className="py-4 border-bottom">
        <span className="d-block fw-bold mb-3">
          Is your device damaged in some way?
        </span>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="damaged_device_y"
            id="damaged_device_y"
            checked="checked"
            onChange={handleChange}
          />
          <label className="form-check-label" for="damaged_device_y">
            Yes, I have the device
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="damaged_device_n"
            id="damaged_device_n"
            onChange={handleChange}
          />
          <label className="form-check-label" for="damaged_device_n">
            No, I do not have the device
          </label>
        </div>
      </div>
      <div className="py-4">
        <span className="d-block fw-bold mb-3">
          Confirm the device category, Brand and Model or select this
          information below.
        </span>
        <div className="mb-3 w-50">
          <Dropdown label="Device Type" onchange={handleChange} options={DEVICE_TYPE} />
        </div>
        <div className="mb-3 w-50">
          <label className="form-label">Brand</label>
          <input
            type="text"
            name="brand"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 w-50">
          <label className="form-label">Model</label>
          <input
            type="text"
            name="modal"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 w-50">
          <label className="form-label">Device Nickname</label>
          <input
            type="text"
            name="device"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 w-50">
          <label className="form-label">Serial Number (Optional)</label>
          <input
            type="text"
            name="serial"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 w-50">
          <label className="form-label">Purchase Price, $</label>
          <input
            type="text"
            name="price"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 w-50">
          <Datepicker label="Purchase Date" name="date"  onChange={handleChange} />
        </div>
        <div className="text-center">
          <p className="text-start py-3">
            Upon completion you'll be taken to our Assurant claims site.
          </p>
          <button
            type="button"
            className="btn btn-primary py-2"
            onClick={handleEvent}
          >
            Start A Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileClaim;
