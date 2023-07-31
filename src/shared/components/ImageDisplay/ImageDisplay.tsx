import React from 'react';

import style from './imageDisplay.module.scss';

const {
  contentContainer,
  heading,
  leftContent,
  content,
  imgContainer,
  imageContainer,
  rightContent
} = style;

const ImageDisplay = () => {
  // const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // const items = [
  //   {
  //     id: 1
  //     itemName: 'somthing'
  //     image: 'asdasdasd'
  //   },
  //   {
  //     id: 2
  //     itemName: 'somthing'
  //     image: 'asdasdasd'
  //   },
  //   {
  //     id: 3
  //     itemName: 'somthing'
  //     image: 'asdasdasd'
  //   },
  //   {
  //     id: 4
  //     itemName: 'somthing'
  //     image: 'asdasdasd'
  //   },
  //   {
  //     id: 5
  //     itemName: 'somthing'
  //     image: 'asdasdasd'
  //   },
  //   {
  //     id: 6
  //     itemName: 'somthing'
  //     image: 'asdasdasd'
  //   }
  // ]

  return (
    <div className={contentContainer}>
      <h2 className={heading}>Stories</h2>
      <div className={leftContent}>
        <div className={content}>
          <p>Emergency Response</p>
          <div className={imgContainer}>
            {/* <Image className={img} src={testImage} alt='stroy image'/> */}
          </div>
        </div>
        <div className={content}>
          <p>Fighting the Pandemic</p>
          <div className={imgContainer}>
            {/* <Image className={img} src={testImage} alt='stroy image'/> */}
          </div>
        </div>
        <div className={content}>
          <p>Diagnosis is Key</p>
          <div className={imgContainer}>
            {/* <Image className={img} src={testImage} alt='stroy image'/> */}
          </div>
        </div>
      </div>
      <div className={imageContainer}>
        <h1>Image</h1>
      </div>
      <div className={rightContent}>
        <div className={content}>
          <p>Compliance is Priority</p>
          <div className={imgContainer}>
            {/* <Image className={img} src={testImage} alt='stroy image'/> */}
          </div>
        </div>
        <div className={content}>
          <p>Mother and Child Care</p>
          <div className={imgContainer}>
            {/* <Image className={img} src={testImage} alt='stroy image'/> */}
          </div>
        </div>
        <div className={content}>
          <p>Micro Health Insurance</p>
          <div className={imgContainer}>
            {/* <Image className={img} src={testImage} alt='stroy image'/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
