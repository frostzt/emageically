import React from "react";

// Styles
import styles from "./ImageFocus.module.scss";

// Components
import Button from "../Button/Button";

interface Props {
  title: string;
  imageSource: string;
  imageAlt: string | undefined;
  handler?: any;
}

const ImageFocus: React.FC<Props> = ({
  title,
  imageSource,
  imageAlt,
  handler,
}) => {
  return (
    <div className={styles.imageFocus}>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.imageContainer}>
          <img
            className={styles.imageContainer_image}
            src={imageSource}
            alt={imageAlt ? imageAlt : title}
          />
        </div>
        <div className={styles.btns}>
          <Button style={{ marginRight: "3rem" }}>Download</Button>
          <Button inverted>Cancel</Button>
        </div>
      </div>
      <div onClick={handler} className={styles.background} />
    </div>
  );
};

export default ImageFocus;
