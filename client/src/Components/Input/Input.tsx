import React from "react";

interface Props {
  placeholder: string;
  classname: string;
  handleSearchChange: any;
  value: string;
}

const Input: React.FC<Props> = ({
  placeholder,
  classname,
  handleSearchChange,
  value,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={handleSearchChange}
      placeholder={placeholder}
      className={classname}
    />
  );
};

export default Input;
