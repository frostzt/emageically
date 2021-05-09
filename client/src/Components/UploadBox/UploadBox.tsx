import React from "react";

// Styling
import classes from "./UploadBox.module.scss";
import image from "./ChatEngine.png";

// Components
import Button, { HTMLButton } from "../Button/Button";

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
          <input className={classes.uploadInput} required type="file" />
          <div className={classes.btns}>
            <HTMLButton>Submit</HTMLButton>
            <Button inverted>Discard</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadBox;
