import React, { useRef, useState, useEffect } from "react";

// Styling
import classes from "./ImageCard.module.scss";

interface Props {
  title: string;
  imageSource: string;
  imageAlt?: string;
}

// type NumUndef = number | undefined;

const ImageCard: React.FC<Props> = ({ title, imageSource, imageAlt }) => {
  // TO BE FIXED
  // const [height, setHeight] = useState<NumUndef>(0);
  // const [width, setWidth] = useState<NumUndef>(0);
  // const [IAWidth, setIAWidth] = useState<NumUndef>(0);
  // const [IAHeight, setIAHeight] = useState<NumUndef>(0);
  // const [transform, setTransform] = useState<NumUndef>(0);
  // const [change, setChange] = useState<Boolean>(false);

  // const imageRef = useRef<HTMLImageElement>(null);
  // const imageCardRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const setupLayout = () => {
  //     if (height && IAHeight) {
  //       setTransform(height - IAHeight);
  //     }

  //     return;
  //   };

  //   const calculateHeight: Function = () => {
  //     setHeight(imageRef.current?.offsetHeight);
  //     setWidth(imageRef.current?.offsetWidth);

  //     setIAHeight(
  //       imageCardRef.current?.previousElementSibling?.previousElementSibling
  //         ?.previousElementSibling?.children[0].clientHeight
  //     );
  //     setIAWidth(
  //       imageCardRef.current?.previousElementSibling?.previousElementSibling
  //         ?.previousElementSibling?.children[0].clientWidth
  //     );
  //     return setupLayout();
  //   };
  // });

  return (
    <div
      // ref={imageCardRef}
      className={classes.imageCard}
    >
      <div className={classes.imageCard__container}>
        <img
          // ref={imageRef}
          className={classes.imageCard__container_image}
          src={imageSource}
          alt={imageAlt ? imageAlt : title}
        />
      </div>
    </div>
  );
};

export default ImageCard;
