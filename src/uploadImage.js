

import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const UploadImage = props => {
  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };
  return (
    
    <ImageUploader
       {...props}
      label='Max file size: 1mb, accepted: jpg file only'
      withIcon={true}
      onChange={onDrop}
      imgExtension={[".jpg",]}
      buttonText='Upload images'
      maxFileSize={1242880}
      withPreview={true}
      accept="accept=image/*"
      // singleImage={false}
    />
  );
};

export default UploadImage;