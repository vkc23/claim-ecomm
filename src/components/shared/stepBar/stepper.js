import React from "react";
import "./stepper.css";
import ConfirmImg from "../../../assets/images/confirm-icon.png";

const Stepper = ({flag}) => {
  return (
    <>
      <div className="row justify-content-between py-3">
        <div className="col-auto">
          <p className="mb-0 text-muted">Step 1 of 4</p>
        </div>
        <div className="col-auto">
          <p className="mb-0 text-muted">Next : Service Options</p>
        </div>
      </div>
      <div className="d-flex justify-content-between steps-bar mb-2">
        <span className= {flag === 0 ? 'current' : "active"}>
          <img src={ConfirmImg} alt="confirm" />
        </span>
        <span >
          <img src={ConfirmImg} alt="confirm" />
        </span>
        <span>
          <img src={ConfirmImg} alt="confirm" />
        </span>
        <span>
          <img src={ConfirmImg} alt="confirm" />
        </span>
      </div>
    </>
  );
};

export default Stepper;
