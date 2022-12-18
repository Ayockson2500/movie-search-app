import React from "react";

const SearchField = ({ onchange, placeholder, value,label, className, type }) => {
  return (
    <div>
        <label htmlFor="">{label}</label>
      <input
        onChange={onchange}
        placeholder={placeholder}
        value={value}
        type={type}
        className={className}
      />
    </div>
  );
};

export default SearchField;
