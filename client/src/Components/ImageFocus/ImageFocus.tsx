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
  // Download image
  const downloadImage = () => {
    const linkEl: HTMLAnchorElement = document.createElement("a");
    const file: Blob = new Blob([imageSource.toString()], { type: "image/*" });

    linkEl.href = URL.createObjectURL(file);
    linkEl.download = `${title.split(" ").join("-")}.jpeg`;
    linkEl.click();
  };

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
          <Button handler={downloadImage} style={{ marginRight: "3rem" }}>
            Download
          </Button>
          <Button inverted handler={handler}>
            Cancel
          </Button>
        </div>
      </div>
      <div onClick={handler} className={styles.background} />
    </div>
  );
};

export default ImageFocus;
