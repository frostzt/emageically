import React from "react";

// Styling
import classes from "./UploadBox.module.scss";

const UploadBox: React.FC = () => {
  return (
    <div className={classes.uploadBox}>
      <div className={classes.container}></div>
    </div>
  );
};

export default UploadBox;
