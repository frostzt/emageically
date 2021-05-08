import React, { useState } from "react";

// Styling
import classes from "./UploadBox.module.scss";

// Components
import { HTMLButton } from "../Button/Button";

const UploadBox: React.FC = () => {
  return (
    <div className={classes.uploadBox}>
      <div className={classes.container}>
        <form className={classes.form}>
          <HTMLButton>Submit</HTMLButton>
        </form>
      </div>
    </div>
  );
};

export default UploadBox;
