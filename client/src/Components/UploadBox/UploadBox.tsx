import React from "react";

// Styling
import classes from "./UploadBox.module.scss";

// Components

const UploadBox: React.FC = () => {
  return (
    <div className={classes.uploadBox}>
      <div className={classes.container}>
        <form className={classes.form}></form>
      </div>
    </div>
  );
};

export default UploadBox;
