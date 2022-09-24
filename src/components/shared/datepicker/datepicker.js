import React from "react";

const Datepicker = ({ label, value, onChange }) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input type="date" className="form-control p-2" onChange={onChange} />
    </div>
  );
};

export default Datepicker;