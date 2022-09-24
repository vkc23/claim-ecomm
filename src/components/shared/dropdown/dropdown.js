import React from "react";

export const Dropdown = ({ label, options, selectedValue, onChange }) => {
  return (
    <>
      <label className="form-label">{label}</label>
      <select className="form-select" name="device_type" onChange={onChange}>
        {options.length &&
          options.map((item) => (
            <option key={`${item.id}_${item.value}`} value={item.value}>
              {item.label}
            </option>
          ))}
      </select>
    </>
  );
};
