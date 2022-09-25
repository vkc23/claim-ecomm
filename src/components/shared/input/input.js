import React from "react";

export const Input = ({ label, type = "text", value, name, onChange }) => {
  return (
    <>
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
