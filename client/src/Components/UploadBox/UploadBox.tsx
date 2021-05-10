import React, { useState } from "react";

// Styling
import classes from "./UploadBox.module.scss";

// Components
import Button, { HTMLButton } from "../Button/Button";

interface Props {
  handleUpload: any;
}

const UploadBox: React.FC<Props> = ({ handleUpload }) => {
  const [file, setFile] = useState<string>();

  // Handle file change
  const handleChange: any = (e: any) => {
    e.preventDefault();
    return setFile(URL.createObjectURL(e.target.files[0]));
  };

  // Handle submit
  const handleFormSubmit: any = (e: Event) => {
    e.preventDefault();
  };

  return (
    <div className={classes.uploadBox}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img
            className={classes.image_img}
            src={file}
            alt="Preview of uploaded img"
          />
        </div>
        <form onSubmit={handleFormSubmit} className={classes.form}>
          <input
            className={classes.uploadInput}
            onChange={handleChange}
            required
            type="file"
          />
          <div className={classes.btns}>
            <HTMLButton style={{ marginRight: "2rem" }}>Submit</HTMLButton>
            <Button
              handler={handleUpload}
              inverted
              style={{ marginLeft: "2rem" }}
            >
              Discard
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadBox;
