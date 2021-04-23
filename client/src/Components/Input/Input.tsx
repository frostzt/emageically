import React from "react";

interface Props {
  placeholder: string;
  classname: string;
}

const Input: React.FC<Props> = ({ placeholder, classname }) => {
  return <input type="text" placeholder={placeholder} className={classname} />;
};

export default Input;
