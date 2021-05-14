import axios from "axios";
import React, { useState, useEffect } from "react";

// Styling
import classes from "./UploadBox.module.scss";
import doggo from "./doggo.jpg";

// Components
import Button, { HTMLButton } from "../Button/Button";

interface Props {
  handleUpload: any;
}

const ENDPOINT = "https://emageically.herokuapp.com/api/v1/upload";

const UploadBox: React.FC<Props> = ({ handleUpload }) => {
  const [blob, setBlob] = useState<any>();
  const [title, setTitle] = useState<string>("");
  const [file, setFile] = useState<string | undefined>();
  const [isInvalid, setIsInvalid] = useState<Boolean>(false);
  const [isUploading, setIsUploading] = useState<Boolean>(false);

  useEffect(() => {
    if (isUploading && file && !isInvalid) {
      try {
        const formData = new FormData();
        formData.append("image", blob);
        formData.append("title", title);

        axios
          .post(ENDPOINT, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(() => {
            setIsUploading(false);
            window.location.reload();
          });

        return () => {
          setFile(undefined);
          setBlob(undefined);
          setIsUploading(false);
        };
      } catch (error) {
        console.error(error);
        return () => {
          setFile(undefined);
          setBlob(undefined);
          setIsUploading(false);
        };
      }
    }
    // eslint-disable-next-line
  }, [isUploading]);

  // Handle file change
  const handleChange: any = (e: any) => {
    e.preventDefault();
    if (e.target.files[0].type.split("/")[0].toString() === "image") {
      setBlob(e.target.files[0]);
      return setFile(URL.createObjectURL(e.target.files[0]));
    }
    return alert("File type is not an image!");
  };

  // Handle title change
  const handleTitleChange: any = (e: any) => {
    e.preventDefault();
    if (
      e.target.value.includes("?") ||
      e.target.value.includes("|--separate--|")
    ) {
      setIsInvalid(true);
      return setTitle(e.target.value);
    } else {
      setIsInvalid(false);
      return setTitle(e.target.value);
    }
  };

  // Handle submit
  const handleFormSubmit: any = (e: any) => {
    e.preventDefault();
    if (blob) {
      return setIsUploading(true);
    }
    return alert("File type is not an image!");
  };

  return (
    <div className={classes.uploadBox}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img
            className={classes.image_img}
            src={file ? file : doggo}
            alt="Preview of uploaded img"
          />
        </div>
        <div className={classes.title}>Upload a doggo pic!</div>
        <form onSubmit={handleFormSubmit} className={classes.form}>
          <input
            type="text"
            value={title}
            required
            className={classes.titleInput}
            placeholder="Title of the image"
            onChange={(e) => handleTitleChange(e)}
          />
          {isInvalid ? (
            <p
              style={{
                color: "red",
                marginBottom: "1rem",
                transform: "translateY(-0.8rem)",
              }}
            >
              '?' and '|--separate--|' are not allowed!
            </p>
          ) : null}
          <input
            className={classes.uploadInput}
            onChange={handleChange}
            required
            type="file"
            style={{ marginBottom: "1rem" }}
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
