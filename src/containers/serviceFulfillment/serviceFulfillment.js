import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ItemDetails, Stepper, Button } from "../../components";
import { RadioBtn } from "../../components";
import { MAILING_ADDRESS } from "../../constants/mockData";
import { saveServiceFulfillment } from "../claimSlice";

function ServiceFulfillment() {
  const [data, setData] = useState({});
  const history = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { pathname } = location;

  const claimsData = useSelector((state) => state.claims);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleStep = () => {
    dispatch(
      saveServiceFulfillment({
        data,
      })
    );
    history("/claimSummary");
  };

  useEffect(() => {
    const keys = Object.keys(claimsData);
    if (keys?.length && keys.includes("step3")) {
      const {
        step3,
      } = claimsData;
      // console.log("prevData", step3);
      setData({ ...data, ...step3 });
    } else if(!keys?.length) history("/fileClaim");
  }, [claimsData]);

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
              <h6 className="m-0 p-0 fw-bold">Service Fulfillment</h6>
              <Stepper current="3" total="4" flag="Summary" pathName={pathname}></Stepper>
            </div>
            <div className="p-4">
              <span className="d-block fw-bold mb-3">Mail in Repair</span>
              <p>
                Once your device is repaired it will be shipped to the address
                provided below <br />
                via <b className="text-primary">standard shipping</b> (1
                business day)
              </p>
              <ul className="list-inline pt-4">
                {MAILING_ADDRESS.map((item, i) => (
                  <li
                    className={`list-inline-item ${i != 0 && "ms-4"} `}
                    key={`${item}_${i}`}
                  >
                    <RadioBtn
                      name="mailingAddress"
                      item={item}
                      selectedValue={data?.mailingAddress}
                      onChange={handleChange}
                    />
                  </li>
                ))}
              </ul>
              <p>
                <b>Steve Smith</b>
                <br />
                123 Main Street
                <br />
                Atlanta, Georga 30031
                <br />
                United States
                <br />
                steve.smith@gmail.com
              </p>
              <div className="row align-items-center justify-content-between pt-4">
                <div className="col-auto">
                  <Button label="Back" variant="outline" />
                </div>
                <div className="col-auto">
                  <Button label="Next" variant="primary" click={handleStep} />
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

export default ServiceFulfillment;
