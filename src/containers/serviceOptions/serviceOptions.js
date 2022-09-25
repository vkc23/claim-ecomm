import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, ItemDetails, Stepper, Button } from "../../components";
import MaintenanceImg from "../../assets/images/maintenance-icon.svg";
import { saveServiceOptions } from "../claimSlice";

function ServiceOptions() {
  const [flag, setFlag] = useState("Service Fulfillment");
  const [data, setData] = useState({});
  const history = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const claimsData = useSelector((state) => state.claims);

  console.log(claimsData, "ServiceOptions");

  const { pathname } = location;

  const handleStep = () => {
    dispatch(
      saveServiceOptions({
        data,
      })
    );
    history("/serviceFulfillment");
    setFlag(flag);
  };

  return (
    <>
      <div className="row bg-light py-4">
        <div className="col-8">
          <div
            className="bg-white rounded box-shadow"
            style={{ overflow: "hidden" }}
          >
            <div
              className="p-4 border-bottom"
              style={{ backgroundColor: "#fcfcfc" }}
            >
              <h6 className="m-0 p-0 fw-bold">Service Options</h6>
              <Stepper flag={flag} pathName={pathname}></Stepper>
            </div>
            <div className="p-4">
              <span className="d-block fw-bold mb-3">
                Select how you would like your product to be serviced
              </span>
              <div
                className="row flex-nowrap g-0 p-3 rounded-4"
                style={{ backgroundColor: "#f0f6fc" }}
              >
                <div className="col-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </div>
                <div className="col ps-3">
                  <p>Service option(s) are for your product located at:</p>
                  <p className="fw-bold">
                    1155 Prnce DeLeen Long adress name Ave, Atlanta GA, 3322
                  </p>
                  <hr />
                  <p className="mb-0">
                    Not your products location?{" "}
                    <a href="" className="text-primary">
                      <u>Enter a new address</u>
                    </a>
                  </p>
                </div>
              </div>
              <div className="row g-4 pt-4 service-boxs">
                <div className="col-6">
                  <Card
                    imgSrc={MaintenanceImg}
                    title="Schedule a visit"
                    description="Make an appointment at an Pocket Geek Authorized Service Provider"
                  >
                    <div className="d-flex justify-content-between">
                      <span>Deductible:</span> <span>$89.00</span>
                    </div>
                  </Card>
                </div>
                <div className="col-6">
                  <Card
                    imgSrc={MaintenanceImg}
                    title="Send in for repair"
                    description="A courier will pick up your product and deliver it to
                    Pocket Geek"
                  >
                    <div className="d-flex justify-content-between">
                      <span>Deductible:</span> <span>$89.00</span>
                    </div>
                  </Card>
                </div>
                <div className="col-6">
                  <Card
                    imgSrc={MaintenanceImg}
                    title="Contact us"
                    description="Talk to an Pocket Geek Support Advisor"
                  >
                    <div className="d-flex justify-content-between">
                      <span>Deductible:</span> <span>$89.00</span>
                    </div>
                  </Card>
                </div>
              </div>
              <div className="row align-items-center justify-content-between pt-4">
                <div className="col-auto">
                <Button label="Back" variant="outline" />
                  {/* <button
                    type="button"
                    className="btn btn-outline-primary py-2 px-4"
                    onClick={stepBack}
                  >
                    Back
                  </button> */}
                </div>
                <div className="col-auto">
                <Button
                    label="Next"
                    variant="primary"
                    click={handleStep}
                  />
                  {/* <button
                    type="button"
                    className="btn btn-primary py-2 px-4"
                    onClick={handleStep}
                  >
                    Next
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <ItemDetails></ItemDetails>
        </div>
      </div>
    </>
  );
}

export default ServiceOptions;
