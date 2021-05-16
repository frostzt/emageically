import React from "react";

// Styles
import styles from "./ImageFocus.module.scss";

interface Props {
  title: string;
  imageSource: string;
  imageAlt: string | undefined;
}

const ImageFocus: React.FC<Props> = ({ title, imageSource, imageAlt }) => {
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
      </div>
    </div>
  );
};

export default ImageFocus;
