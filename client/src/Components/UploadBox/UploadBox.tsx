import React, { useState } from "react";

// Styling
import classes from "./UploadBox.module.scss";
import image from "./ChatEngine.png";

// Components
import { HTMLButton } from "../Button/Button";

const UploadBox: React.FC = () => {
  return (
    <div className={classes.uploadBox}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img
            className={classes.image_img}
            src={image}
            alt="Preview of uploaded img"
          />
        </div>
        <form className={classes.form}>
          <input className={classes.uploadBtn} required type="file" />
          <HTMLButton>Submit</HTMLButton>
        </form>
      </div>
    </div>
  );
};

export default UploadBox;
